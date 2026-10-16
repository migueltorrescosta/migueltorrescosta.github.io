# blog

Source of Miguel Torres Costa's personal blog, live at https://blog.mptc.uk.

It is a Jekyll 4 site. On every push to `main`, the `Deploy` workflow
(`.github/workflows/deploy.yml`) builds it with the `Gemfile`'s Jekyll and
publishes it with GitHub Pages' Actions deploy. The repository's Pages source
(Settings > Pages) must be "GitHub Actions"; the custom domain is set there too
and matches `CNAME`.

## Local build

Requires Ruby 3.3+ and Bundler.

```bash
bundle install
bundle exec jekyll build    # output in _site/
bundle exec jekyll serve    # preview at http://localhost:4000
```

Every build reads the Books page from the Goodreads feed (`_plugins/goodreads.rb`),
so it needs network access and fails if the feed can't be read.

## React components

The interactive posts load a React component named by their `react_component:`
front-matter key. `_react_src/*.jsx` is the source. `assets/react_components/*.js`
is generated from it and committed, because the deploy runs no build step
other than Jekyll. Do not edit the generated files: edit the `.jsx`, recompile,
and commit both together.

Requires Node.js with `npx`. Run from the repository root:

```bash
npx --yes -p @babel/core@7.29.7 -p @babel/cli@7.29.7 -p @babel/preset-react@7.29.7 -c \
  'babel --no-babelrc --retain-lines --presets "$(dirname "$(command -v babel)")/../@babel/preset-react" _react_src --out-dir assets/react_components'
```

This only turns JSX into `React.createElement` calls (classic runtime, against
the global `React` loaded by `_layouts/default.html`); everything else is left
as written. `npx` keeps Babel in its own cache, so nothing is installed into
the repository.

## Licence

`LICENSE` is the MIT licence of the Celeste theme the site used until 2026. The fonts in
`fonts/` are under the SIL Open Font License (`fonts/OFL.txt`).
