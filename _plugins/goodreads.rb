# Reads the Goodreads "read" shelf from its public shelf widget
# (`goodreads_widget` in _config.yml) on every build into site.data.books, most
# recently added first. Goodreads retired its shelf RSS feeds in October 2026
# and shelf pages need a sign-in; the widget is what it still serves publicly.
#
# _data/books.yml is a committed snapshot. If the widget can't be read, the
# build warns and keeps the snapshot, so it never fails on Goodreads. The widget
# only links to review pages, which need a sign-in, so books in the snapshot
# keep its book links and new books link to a Goodreads search.
require "cgi"
require "net/http"

module Goodreads
  class Generator < Jekyll::Generator
    priority :highest

    # The widget's covers are thumbnails (`._SY75_`); this is the size the pages show.
    COVER_SIZE = "._SY475_."

    def generate(site)
      snapshot = site.data["books"] || []
      site.data["books"] = fetch(site.config.fetch("goodreads_widget"), snapshot)
      Jekyll.logger.info "Goodreads:", "#{site.data["books"].size} books from the shelf widget"
    rescue StandardError => e
      Jekyll.logger.warn "Goodreads:", "#{e.message}; using the #{snapshot.size} books in _data/books.yml"
    end

    private

    def fetch(widget, snapshot)
      uri = URI(widget)
      # Goodreads caches a widget's books by widget_id, so each build asks for its own
      uri.query = "#{uri.query}&widget_id=blog#{Time.now.to_i}"
      response = Net::HTTP.get_response(uri)
      raise "#{widget} returned HTTP #{response.code}" unless response.is_a?(Net::HTTPSuccess)
      body = response.body.force_encoding(Encoding::UTF_8)
      code = body[/var widget_code = '(.*?)'\n/m, 1] or raise "the widget has no widget_code"
      # The HTML sits in a JavaScript string: unescape \n, \", \' and \/
      html = code.gsub(/\\(.)/m) { Regexp.last_match(1) == "n" ? "\n" : Regexp.last_match(1) }
      links = snapshot.to_h { |b| [[b["title"], b["author"]], b["url"]] }
      books = html.split("gr_custom_each_container").drop(1).map { |entry| book(entry, links) }
      raise "the widget lists no books" if books.empty?
      books
    end

    def book(entry, links)
      title = CGI.unescapeHTML(entry[/<a title="([^"]*)"/, 1].to_s)
      author = CGI.unescapeHTML(entry[/gr_custom_author[^>]*>\s*by <a[^>]*>([^<]*)/, 1].to_s).squeeze(" ").strip
      raise "a widget entry has no title or author" if title.empty? || author.empty?
      {
        "title" => title,
        "author" => author,
        "url" => links[[title, author]] || "https://www.goodreads.com/search?q=#{CGI.escape("#{title} #{author}")}",
        "cover" => entry[/<img[^>]*src="([^"]*)"/, 1].to_s.sub(/\._S[XY]\d+_\./, COVER_SIZE),
      }
    end
  end
end
