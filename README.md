# Visprax.ai

Hugo rebuild of the Visprax landing page. Single page (hero, projects, about/contact
as anchored sections), no client-side framework, no external font or icon CDN.

## Requirements

- [Hugo](https://gohugo.io/installation/) v0.140+ (extended not strictly required —
  this site only uses `css.Minify` and `js.Build`, both available in the standard
  binary — but the deploy workflow uses extended, so it's used here for parity).

## Local development

```
hugo server -D
```

Visit http://localhost:1313/.

## Production build

```
hugo --minify
```

Output goes to `public/`. This:
- Minifies and fingerprints CSS/JS (long-lived cache headers are safe — filenames
  change automatically whenever content changes)
- Ships zero external requests: no Google Fonts, no icon CDN, no analytics.
  Fonts are self-hosted `.woff2` files in `static/fonts/` (~172KB total for
  Inter, JetBrains Mono, and Agdasima across all weights used)
- The rendered `index.html` is ~6KB before gzip

## Editing content

- **Hero copy, feature list, about text** — front matter in `content/_index.md`
- **Projects** — one Markdown file per project in `content/projects/`. Add a new
  file there and it appears in the grid automatically (sorted by the `weight`
  field). No template changes needed.
- **Colors/type/spacing** — `assets/css/main.css`, custom properties at the top

## Fonts

Self-hosted, subset to only the weights actually used on the page:
- **Agdasima** (400/700) — headline
- **Inter** (200/300/400/600) — body
- **JetBrains Mono** (300/400) — labels, nav, buttons

The `.woff2` files in `static/fonts/` were extracted from the `@fontsource/*` npm
packages. To add a weight later:

```
npm install @fontsource/inter
cp node_modules/@fontsource/inter/files/inter-latin-<weight>-normal.woff2 static/fonts/
```

Then add a matching `@font-face` block in `assets/css/main.css`.

## Deployment

`.github/workflows/deploy.yml` builds the site with Hugo and deploys to GitHub
Pages on every push to `main`. In the repo's Settings → Pages, set the source to
"GitHub Actions" (not "Deploy from a branch") for this to take effect.

For a custom domain (visprax.ai), add a `static/CNAME` file containing the domain
name, and point your DNS at GitHub Pages per
[GitHub's custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
