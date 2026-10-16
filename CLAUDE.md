# blog

Personal blog for Miguel Torres Costa. Jekyll 4, Ruby, GitHub Pages. Live at https://blog.mptc.uk (custom domain set by `CNAME`).

`.github/workflows/deploy.yml` builds the site with the `Gemfile`'s Jekyll on every push to `main` and publishes it with GitHub Pages' Actions deploy, so merging to `main` deploys. This needs the repository's Pages source (Settings > Pages) to be "GitHub Actions".

## Quality Gates

Requires Ruby 3.3+. Install the gems once with `bundle install`, then run before committing:
```bash
bundle exec jekyll build
```

Verify the site builds without errors. Catches broken markdown, Liquid template errors, and missing includes.

CI (`.github/workflows/ci.yml`) runs on every pull request: the Jekyll build on Ruby 3.3, and a check that `assets/react_components` matches what Babel generates from `_react_src`. Its final `ci` job is the single check the ruleset requires. CI does not deploy; `deploy.yml` does, from `main`. Both build with the same `Gemfile` and command.

Never commit `_site/`, `.sass-cache/`, `vendor/` or `.bundle/` (all git-ignored).

## Structure

- `_posts/` — blog post markdown files
- `_includes/` — reusable template fragments
- `_layouts/` — page templates
- `css/style.scss` — the whole stylesheet (design tokens at the top, light and dark)
- `fonts/` — self-hosted woff2 fonts and their licence (`OFL.txt`)
- `assets/` — static assets (documents, images, react_components)
- `_react_src/` — JSX sources of the React components (not published)
- `_plugins/goodreads.rb` — reads the Goodreads shelf (`goodreads_feed` in `_config.yml`) on every build into `site.data.books`; a failed read fails the build, so the build needs network access
- `_config.yml` — Jekyll configuration
- `CNAME` — custom domain for GitHub Pages

## Conventions

- Theme: squared paper, written for this site (no theme gem). No external font or icon requests: fonts live in `fonts/`, icons are inline SVG.
- Posts use standard Jekyll front matter: `category:` holds the post's topics (one of `topics:` in `_config.yml`) and `description:` its one-line summary.
- The React components are loaded only on posts with a `react_component:` front-matter key. `_react_src/*.jsx` is the source; `assets/react_components/*.js` is generated from it by Babel (JSX only) and committed, because the deploy runs no build step other than Jekyll. Never edit the generated files: edit the `.jsx`, recompile with the command in `README.md`, and commit both.
- No commits on main. Branch or worktree only.
