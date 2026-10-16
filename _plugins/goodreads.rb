# Reads the Goodreads shelf feed (`goodreads_feed` in _config.yml) on every
# build and puts its books in site.data.books, in the feed's order (most
# recently added first). Any failure raises, which fails the build, so a deploy
# never ships without the book list.
require "net/http"
require "rexml/document"

module Goodreads
  class Generator < Jekyll::Generator
    priority :highest

    def generate(site)
      site.data["books"] = fetch(site.config.fetch("goodreads_feed"))
    end

    private

    # The feed is paged; read pages until one comes back empty.
    def fetch(feed)
      books = []
      (1..).each do |page|
        items = items(URI("#{feed}&page=#{page}"))
        break if items.empty?
        books.concat(items)
      end
      raise "Goodreads: #{feed} has no books" if books.empty?
      Jekyll.logger.info "Goodreads:", "#{books.size} books"
      books
    end

    def items(uri)
      response = Net::HTTP.get_response(uri)
      raise "Goodreads: #{uri} returned HTTP #{response.code}" unless response.is_a?(Net::HTTPSuccess)
      REXML::Document.new(response.body).get_elements("//item").map do |item|
        text = ->(name) { item.elements[name].text.to_s.squeeze(" ").strip }
        {
          "title" => text["title"],
          "author" => text["author_name"],
          "url" => "https://www.goodreads.com/book/show/#{text["book_id"]}",
          "cover" => text["book_medium_image_url"],
          "cover_2x" => text["book_large_image_url"],
        }
      end
    end
  end
end
