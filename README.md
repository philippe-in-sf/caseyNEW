# Casey Cantwell Artist Site

Static Astro website for Casey Cantwell, professional church musician, organist, improviser, and Director of Music and Choirmaster at Trinity Episcopal Church in Tulsa, Oklahoma.

## Local Development

Install dependencies:

```bash
npm install
```

Run the local server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

## Content

Editable content lives in `src/content/` and structured schedule data lives in `src/data/musicSchedule.ts`.

- `pages/` for Biography, Trinity Music, and Contact copy
- `musicSchedule.ts` for the 2025-2026 concert and service music schedule from the Trinity brochure
- `site.ts` for shared site settings

## Deployment Audit

Every deployment should increment the major and minor version numbers and be recorded in `docs/deployment-audit.md`.
