# blog

Source of Miguel Torres Costa's personal blog, live at https://blog.mptc.uk.

It is a Jekyll site published by GitHub Pages from the `main` branch. The
`github-pages` gem pinned in the `Gemfile` matches the versions GitHub Pages
builds with.

## Local build

Requires Ruby 3.3+ and Bundler.

```bash
bundle install
bundle exec jekyll build    # output in _site/
bundle exec jekyll serve    # preview at http://localhost:4000
```

## Licence

The site uses the Celeste theme. `LICENSE` is the Celeste theme's MIT licence.
