# Visprax.ai

Static-exported Next.js site for **visprax.ai**.

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

The repository includes `public/CNAME` for `visprax.ai`.

Optionally point `www` to your GitHub Pages hostname with a CNAME.

After DNS has propagated, enable **Enforce HTTPS** in the repository's Pages settings.

## Adding projects

Project content is centralized in `lib/projects.ts`. Add a project there and Next.js will
include its route automatically through `generateStaticParams()`.
