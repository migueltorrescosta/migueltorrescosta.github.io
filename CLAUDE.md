# blog

Personal blog for Miguel Torres Costa. Jekyll 3.9.3, Ruby, GitHub Pages. Live at migueltorrescosta.github.io.

## Quality Gates

Run before committing:
```bash
bundle exec jekyll build
```

Verify the site builds without errors. Catches broken markdown, Liquid template errors, and missing includes.

## Structure

- `_posts/` — blog post markdown files
- `_includes/` — reusable template fragments
- `_layouts/` — page templates
- `_sass/` — SASS source files (base, components, pages, utilities)
- `_plugins/` — Ruby plugins (ruby33_compat.rb for Ruby 3.3 compatibility)
- `assets/` — static assets (documents, images, react_components)
- `_config.yml` — Jekyll configuration

## Conventions

- Theme: Celeste (minimalist, based on Poole).
- Posts use standard Jekyll front matter.
- Node version pinned in `.nvmrc` (for React component builds).
- No commits on main. Branch or worktree only.
