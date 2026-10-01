# Visprax.ai — Cyber Research Lab

Static-exported Next.js site for **visprax.ai**, designed as a dark cyber-lab research index.

## Stack

- Next.js App Router
- React 19
- TypeScript
- CSS
- lucide-react
- Self-hosted JetBrains Mono

## Routes

- `/` — lab landing page
- `/projects` — project database / index
- `/projects/neural-routing`
- `/projects/state-integrity`
- `/projects/synaptic-sync`
- `/manifest` — The Visprax Charter

## GitHub Pages

This repository is already configured for GitHub Pages static hosting.

### Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

### Production build

```bash
npm run build
```

Next.js writes the static site to `./out`.

### Deploy

Push the repository's `main` branch to GitHub. The included workflow at
`.github/workflows/deploy-pages.yml` builds the static site and publishes it to
GitHub Pages automatically.

In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the build source.

The repository includes `public/CNAME` for `visprax.ai`.

### DNS for `visprax.ai`

At your DNS provider, configure the GitHub Pages apex records:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

Optionally point `www` to your GitHub Pages hostname with a CNAME.

After DNS has propagated, enable **Enforce HTTPS** in the repository's Pages settings.

## Design direction

Visprax deliberately keeps its own visual language rather than copying FetchPal:

- near-black technical surfaces
- dark graphite / steel signal accents
- JetBrains Mono throughout
- HUD / terminal-style metadata
- subtle grid and scanline layers
- research-console visualizations
- project pages built as inspectable records
- the Charter presented as a canonical lab document

## Adding projects

Project content is centralized in `lib/projects.ts`. Add a project there and Next.js will
include its route automatically through `generateStaticParams()`.
