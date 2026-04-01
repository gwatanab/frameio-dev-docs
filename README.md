# frameio-dev-docs

Static assets for Frame.io developer documentation localization previews, served via GitHub Pages.

## Contents

### `css/`

Stylesheets for rendering `.mdx.html` localization preview files in the browser.

- **`md-styles.css`** — GitHub Flavored Markdown styles. Covers base typography, headings, links, blockquotes, code blocks, tables, lists (including task lists), GitHub Alerts, and syntax highlighting.
- **`mdx-styles.css`** — Fern MDX component styles. Covers Callouts, Cards, CardGroups, Accordions, Steps, Frames, Badges, and CodeBlocks.

### `js/`

- **`inject-css.js`** — Dynamically injects the two CSS stylesheets with a cache-busting timestamp (`?t=<epoch-ms>`) so the latest styles are always loaded.

## Usage

Add the following `<script>` tag inside `<head>` of any `.mdx.html` preview file:

```html
<script src="https://gwatanab.github.io/frameio-dev-docs/js/inject-css.js?t={timestamp}"></script>
```

This replaces manually managed `<link rel="stylesheet">` tags and ensures translators always see the most recent styles without browser caching issues.
