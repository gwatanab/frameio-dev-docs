# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo purpose

Static assets for Frame.io developer documentation localization previews, served via GitHub Pages at `https://gwatanab.github.io/frameio-dev-docs/`.

Translators open `.mdx.html` preview files locally in a browser. Those files load styles from this repo via `js/inject-css.js`.

## Git / GitHub setup

- Remote uses the `github-personal` SSH host alias (not `github.com`) — the remote URL is `git@github-personal:gwatanab/frameio-dev-docs.git`
- The `gh` CLI is authenticated with an Adobe EMU account and **cannot create PRs** on this personal repo — always provide the browser URL for PR creation instead

## Asset overview

- `css/md-styles.css` — GitHub Flavored Markdown styles for `.mdx.html` preview files
- `css/mdx-styles.css` — Fern MDX component styles (Callouts, Cards, Accordions, Steps, Badges, etc.)
- `js/inject-css.js` — Dynamically loads both CSS files with a `?t=<epoch-ms>` cache-busting timestamp

## How HTML files consume these assets

Add inside `<head>` (not at the bottom of `<body>`, to avoid flash of unstyled content):

```html
<script src="https://gwatanab.github.io/frameio-dev-docs/js/inject-css.js"></script>
```

This replaces static `<link rel="stylesheet">` tags with the two CSS files.
