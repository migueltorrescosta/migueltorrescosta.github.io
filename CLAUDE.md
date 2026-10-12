# blog

Personal blog for Miguel Torres Costa. Jekyll (via the `github-pages` gem), Ruby, GitHub Pages. Live at https://blog.mptc.uk (custom domain set by `CNAME`).

GitHub Pages builds and publishes the site from `main`, so merging to `main` deploys. The `github-pages` gem pinned in the `Gemfile` keeps the local build on the same Jekyll and plugin versions that GitHub Pages uses.

## Quality Gates

Requires Ruby 3.3+. Install the gems once with `bundle install`, then run before committing:
```bash
bundle exec jekyll build
```

Verify the site builds without errors. Catches broken markdown, Liquid template errors, and missing includes.

Never commit `_site/`, `.sass-cache/`, `vendor/` or `.bundle/` (all git-ignored).

## Structure

- `_posts/` — blog post markdown files
- `_includes/` — reusable template fragments
- `_layouts/` — page templates
- `_sass/` — SASS source files (base, components, pages, utilities)
- `css/` — `style.scss` entry point and Font Awesome
- `assets/` — static assets (documents, images, react_components)
- `_react_src/` — JSX sources of the React components (not published)
- `_config.yml` — Jekyll configuration
- `CNAME` — custom domain for GitHub Pages

## Conventions

- Theme: Celeste (minimalist, based on Poole).
- Posts use standard Jekyll front matter.
- The React components are loaded only on posts with a `react_component:` front-matter key. `_react_src/*.jsx` is the source; `assets/react_components/*.js` is generated from it by Babel (JSX only) and committed, because GitHub Pages runs no build step other than Jekyll. Never edit the generated files: edit the `.jsx`, recompile with the command in `README.md`, and commit both.
- No commits on main. Branch or worktree only.
