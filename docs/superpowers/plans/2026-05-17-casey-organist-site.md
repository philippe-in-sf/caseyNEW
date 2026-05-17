# Casey Cantwell Artist Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished Astro static site for Casey Cantwell with formal liturgical styling, Markdown content, events, media, and contact routes.

**Architecture:** The site is a static Astro project with content collections for pages, events, and media. Shared layout and section components provide consistent metadata, navigation, page framing, event rendering, and contact calls to action. Content stays in Markdown/MDX so the first release is easy to edit and can migrate to a CMS later.

**Tech Stack:** Astro, TypeScript, Markdown/MDX content collections, CSS custom properties, static image assets.

---

## File Structure

- Create `package.json`: npm scripts and Astro dependencies.
- Create `astro.config.mjs`: static Astro configuration.
- Create `tsconfig.json`: Astro TypeScript configuration.
- Create `.gitignore`: ignore dependencies, build output, local environment files, and visual companion artifacts.
- Create `README.md`: local setup, editing model, and deployment audit convention.
- Create `docs/deployment-audit.md`: project-local deployment audit log.
- Create `src/content.config.ts`: content collection schemas for pages, events, and media.
- Create `src/content/pages/*.md`: editable copy for Biography, Trinity Music, and Contact.
- Create `src/content/events/*.md`: sample upcoming and past events.
- Create `src/content/media/*.md`: sample media entries.
- Create `src/data/site.ts`: centralized site settings and navigation.
- Create `src/lib/events.ts`: event sorting and grouping helpers.
- Create `src/lib/media.ts`: media selection helpers.
- Create `src/layouts/BaseLayout.astro`: document shell, metadata, header, footer.
- Create `src/components/*.astro`: focused UI pieces for hero, cards, event lists, media grids, page headers, and contact CTA.
- Create `src/pages/*.astro`: Home, Biography, Trinity Music, Events, Media, and Contact routes.
- Create `src/styles/global.css`: liturgical green visual system, responsive layout, and component styling.
- Create `public/images/README.md`: image sourcing and replacement notes.

---

### Task 1: Scaffold Astro Project Foundation

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `.gitignore`
- Create: `README.md`
- Create: `docs/deployment-audit.md`

- [ ] **Step 1: Create the project metadata and scripts**

Create `package.json`:

```json
{
  "name": "casey-organist-site",
  "version": "1.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "astro": "^5.0.0",
    "typescript": "^5.6.0"
  },
  "devDependencies": {}
}
```

- [ ] **Step 2: Add Astro and TypeScript configuration**

Create `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://caseycantwell.com',
  output: 'static',
});
```

Create `tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

- [ ] **Step 3: Add repository hygiene files**

Create `.gitignore`:

```gitignore
node_modules/
dist/
.astro/
.env
.env.*
.DS_Store
.superpowers/
```

Create `README.md`:

```markdown
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

Editable content lives in `src/content/`:

- `pages/` for Biography, Trinity Music, and Contact copy
- `events/` for upcoming and past events
- `media/` for recordings, videos, and external media links

Shared site settings live in `src/data/site.ts`.

## Deployment Audit

Every deployment should increment the major and minor version numbers and be recorded in `docs/deployment-audit.md`.
```

Create `docs/deployment-audit.md`:

```markdown
# Deployment Audit

## Pending First Deployment

- Current project version: `1.0.0`
- Deployment history will be recorded here before publishing `caseycantwell.com`.
```

- [ ] **Step 4: Install dependencies**

Run:

```bash
npm install
```

Expected: dependencies install and `package-lock.json` is created.

- [ ] **Step 5: Verify Astro is callable**

Run:

```bash
npm run check
```

Expected: this may fail until `src/` exists, but the command should invoke Astro rather than failing with a missing package error.

- [ ] **Step 6: Commit foundation**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json .gitignore README.md docs/deployment-audit.md
git commit -m "chore: scaffold Astro project"
```

---

### Task 2: Define Content Collections And Seed Content

**Files:**
- Create: `src/content.config.ts`
- Create: `src/content/pages/biography.md`
- Create: `src/content/pages/trinity-music.md`
- Create: `src/content/pages/contact.md`
- Create: `src/content/events/2026-06-14-trinity-choral-evensong.md`
- Create: `src/content/events/2025-11-02-all-saints-recital.md`
- Create: `src/content/media/improvisation-postlude.md`
- Create: `src/content/media/trinity-organ-feature.md`

- [ ] **Step 1: Define collection schemas**

Create `src/content.config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    venue: z.string(),
    location: z.string(),
    eventType: z.string(),
    description: z.string(),
    externalUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['upcoming', 'past']),
  }),
});

const media = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['video', 'audio', 'link']),
    sourceUrl: z.string().url().optional(),
    description: z.string(),
    date: z.coerce.date().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  pages,
  events,
  media,
};
```

- [ ] **Step 2: Add editable page content**

Create `src/content/pages/biography.md`:

```markdown
---
title: "Biography"
description: "Biography for Casey Cantwell, organist, improviser, and church musician in Tulsa, Oklahoma."
eyebrow: "Biography"
---

Casey Cantwell is a professional church musician, organist, and improviser based in Tulsa, Oklahoma. He serves as Director of Music and Choirmaster at Trinity Episcopal Church, where he leads a music program shaped by Anglican liturgy, choral tradition, and the expressive range of the organ.

As a concert organist, Casey is known for thoughtful programming, command of the instrument, and improvisations that grow directly from the musical and architectural character of the room.

This biography is structured for a first public release and should be replaced with Casey's approved long-form biography before launch.
```

Create `src/content/pages/trinity-music.md`:

```markdown
---
title: "Trinity Music"
description: "Music leadership and service music at Trinity Episcopal Church in Tulsa."
eyebrow: "Trinity Episcopal Church"
---

At Trinity Episcopal Church in Tulsa, Casey Cantwell serves as Director of Music and Choirmaster. His work supports the parish's worship life through choral leadership, organ repertoire, service planning, and the formation of a music program rooted in the Episcopal tradition.

This page will carry concise information about the Trinity music program, regular service music, special liturgies, and selected musical offerings.

Schedule details should remain light and easy to maintain, with links to Trinity's official parish calendar when available.
```

Create `src/content/pages/contact.md`:

```markdown
---
title: "Contact"
description: "Contact Casey Cantwell for recital, service, and professional music inquiries."
eyebrow: "Contact"
---

For recital inquiries, service music, collaborations, or professional introductions, please use the contact link below.

The public contact address is temporary for the first build and should be replaced before launch.
```

- [ ] **Step 3: Add seed event entries**

Create `src/content/events/2026-06-14-trinity-choral-evensong.md`:

```markdown
---
title: "Choral Evensong at Trinity"
date: "2026-06-14"
venue: "Trinity Episcopal Church"
location: "Tulsa, Oklahoma"
eventType: "Service"
description: "A service of choral evensong featuring the Trinity choir and organ."
featured: true
status: "upcoming"
---

Service music details will be added when the program is confirmed.
```

Create `src/content/events/2025-11-02-all-saints-recital.md`:

```markdown
---
title: "All Saints Organ Recital"
date: "2025-11-02"
venue: "Trinity Episcopal Church"
location: "Tulsa, Oklahoma"
eventType: "Recital"
description: "A recital program for All Saints, featuring organ repertoire and improvisation."
featured: false
status: "past"
---

Archived event entry for layout and content testing.
```

- [ ] **Step 4: Add seed media entries**

Create `src/content/media/improvisation-postlude.md`:

```markdown
---
title: "Improvised Postlude"
type: "video"
description: "A temporary first-release media entry for a future video of Casey's improvisation."
featured: true
---

Embed or link details will be added when approved media is available.
```

Create `src/content/media/trinity-organ-feature.md`:

```markdown
---
title: "The Organ at Trinity"
type: "link"
description: "A temporary first-release feature for organ and church music context at Trinity Episcopal Church."
featured: false
---

This entry can later link to a Trinity page, recording, or short article.
```

- [ ] **Step 5: Validate content schema**

Run:

```bash
npm run check
```

Expected: Astro content schemas are valid, or only route/layout errors remain because pages are not built yet.

- [ ] **Step 6: Commit content model**

```bash
git add src/content.config.ts src/content
git commit -m "feat: add content collections"
```

---

### Task 3: Build Shared Data, Helpers, Layout, And Global Styles

**Files:**
- Create: `src/data/site.ts`
- Create: `src/lib/events.ts`
- Create: `src/lib/media.ts`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/styles/global.css`
- Create: `public/images/README.md`

- [ ] **Step 1: Add centralized site settings**

Create `src/data/site.ts`:

```ts
export const site = {
  name: 'Casey Cantwell',
  domain: 'caseycantwell.com',
  url: 'https://caseycantwell.com',
  title: 'Casey Cantwell | Organist & Choirmaster',
  description: 'Professional church musician, concert organist, improviser, and Director of Music and Choirmaster at Trinity Episcopal Church in Tulsa, Oklahoma.',
  location: 'Tulsa, Oklahoma',
  contactEmail: 'contact@caseycantwell.com',
  trinityUrl: 'https://trinitytulsa.org',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Biography', href: '/biography/' },
  { label: 'Trinity Music', href: '/trinity-music/' },
  { label: 'Events', href: '/events/' },
  { label: 'Media', href: '/media/' },
  { label: 'Contact', href: '/contact/' },
];
```

- [ ] **Step 2: Add event helpers**

Create `src/lib/events.ts`:

```ts
import type { CollectionEntry } from 'astro:content';

export type EventEntry = CollectionEntry<'events'>;

export function sortUpcomingEvents(events: EventEntry[]) {
  return [...events].sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
}

export function sortPastEvents(events: EventEntry[]) {
  return [...events].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function groupEventsByStatus(events: EventEntry[]) {
  const upcoming = events.filter((event) => event.data.status === 'upcoming');
  const past = events.filter((event) => event.data.status === 'past');

  return {
    upcoming: sortUpcomingEvents(upcoming),
    past: sortPastEvents(past),
  };
}

export function formatEventDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}
```

Create `src/lib/media.ts`:

```ts
import type { CollectionEntry } from 'astro:content';

export type MediaEntry = CollectionEntry<'media'>;

export function getFeaturedMedia(items: MediaEntry[], limit = 2) {
  return items.filter((item) => item.data.featured).slice(0, limit);
}
```

- [ ] **Step 3: Add the base layout**

Create `src/layouts/BaseLayout.astro`:

```astro
---
import '../styles/global.css';
import { navigation, site } from '../data/site';

interface Props {
  title?: string;
  description?: string;
}

const { title = site.title, description = site.description } = Astro.props;
const pageTitle = title === site.title ? title : `${title} | ${site.name}`;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{pageTitle}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={new URL(Astro.url.pathname, site.url).toString()} />
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="/" aria-label={`${site.name} home`}>{site.name}</a>
      <nav class="nav" aria-label="Primary navigation">
        {navigation.map((item) => <a href={item.href}>{item.label}</a>)}
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="site-footer">
      <p>&copy; 2026 {site.name}. All rights reserved.</p>
      <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
    </footer>
  </body>
</html>
```

- [ ] **Step 4: Add global visual system**

Create `src/styles/global.css`:

```css
:root {
  --green-950: #101a15;
  --green-900: #18271f;
  --green-800: #24382e;
  --green-700: #304b3d;
  --ivory: #f5efe3;
  --ivory-deep: #e5dccb;
  --gold: #b7a36d;
  --gold-deep: #8d7745;
  --ink: #1d231f;
  --muted: #6c756d;
  --line: rgba(183, 163, 109, 0.38);
  --max-width: 1120px;
  color-scheme: light;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--ivory);
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
}

.site-header,
.site-footer {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.25rem;
  text-decoration: none;
  letter-spacing: 0.02em;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  font-size: 0.88rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nav a,
.site-footer a {
  text-decoration: none;
}

.section,
.hero {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 72px 24px;
}

.hero {
  min-height: 72vh;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 48px;
  align-items: center;
}

.hero-panel,
.dark-band {
  background: var(--green-900);
  color: var(--ivory);
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--gold);
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 500;
  line-height: 1.08;
}

h1 {
  margin: 0;
  font-size: clamp(3rem, 8vw, 6.8rem);
}

h2 {
  margin: 0 0 18px;
  font-size: clamp(2rem, 4vw, 3.4rem);
}

h3 {
  margin: 0 0 8px;
  font-size: 1.35rem;
}

.lede {
  max-width: 720px;
  font-size: 1.24rem;
  color: rgba(245, 239, 227, 0.84);
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 18px;
  border: 1px solid var(--gold);
  color: var(--ivory);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
}

.button.secondary {
  color: var(--green-950);
  border-color: var(--gold-deep);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.card {
  border-top: 3px solid var(--gold);
  padding: 22px 0 0;
}

.meta {
  color: var(--muted);
  font-size: 0.9rem;
}

.page-header {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 72px 24px 36px;
}

.prose {
  max-width: 760px;
  font-size: 1.08rem;
}

@media (max-width: 780px) {
  .site-header,
  .site-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .hero,
  .grid {
    grid-template-columns: 1fr;
  }

  .section,
  .hero,
  .page-header {
    padding-left: 18px;
    padding-right: 18px;
  }
}
```

- [ ] **Step 5: Add image asset note**

Create `public/images/README.md`:

```markdown
# Images

Store local copies of approved site imagery here.

Approved temporary sources:

- Public imagery from `trinitytulsa.org`
- Appropriate church, organ, or architectural imagery that can be replaced before launch

Do not hotlink production images from third-party sites.
```

- [ ] **Step 6: Run checks**

Run:

```bash
npm run check
```

Expected: layout and TypeScript imports are valid, or errors only refer to pages not existing yet.

- [ ] **Step 7: Commit shared foundation**

```bash
git add src/data src/lib src/layouts src/styles public/images
git commit -m "feat: add shared site foundation"
```

---

### Task 4: Build Reusable Components

**Files:**
- Create: `src/components/PageHeader.astro`
- Create: `src/components/EventList.astro`
- Create: `src/components/MediaGrid.astro`
- Create: `src/components/ContactCallout.astro`

- [ ] **Step 1: Add page header component**

Create `src/components/PageHeader.astro`:

```astro
---
interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

const { eyebrow, title, description } = Astro.props;
---

<header class="page-header">
  {eyebrow && <p class="eyebrow">{eyebrow}</p>}
  <h1>{title}</h1>
  {description && <p class="prose">{description}</p>}
</header>
```

- [ ] **Step 2: Add event list component**

Create `src/components/EventList.astro`:

```astro
---
import type { EventEntry } from '../lib/events';
import { formatEventDate } from '../lib/events';

interface Props {
  events: EventEntry[];
  emptyText: string;
}

const { events, emptyText } = Astro.props;
---

{events.length > 0 ? (
  <div class="grid">
    {events.map((event) => (
      <article class="card">
        <p class="eyebrow">{event.data.eventType}</p>
        <h3>{event.data.title}</h3>
        <p class="meta">{formatEventDate(event.data.date)} · {event.data.venue} · {event.data.location}</p>
        <p>{event.data.description}</p>
        {event.data.externalUrl && <a href={event.data.externalUrl}>Event details</a>}
      </article>
    ))}
  </div>
) : (
  <p class="prose">{emptyText}</p>
)}
```

- [ ] **Step 3: Add media grid component**

Create `src/components/MediaGrid.astro`:

```astro
---
import type { MediaEntry } from '../lib/media';

interface Props {
  items: MediaEntry[];
}

const { items } = Astro.props;
---

{items.length > 0 ? (
  <div class="grid">
    {items.map((item) => (
      <article class="card">
        <p class="eyebrow">{item.data.type}</p>
        <h3>{item.data.title}</h3>
        <p>{item.data.description}</p>
        {item.data.sourceUrl && <a href={item.data.sourceUrl}>Open media</a>}
      </article>
    ))}
  </div>
) : (
  <p class="prose">Selected recordings and videos will be added here.</p>
)}
```

- [ ] **Step 4: Add contact callout component**

Create `src/components/ContactCallout.astro`:

```astro
---
import { site } from '../data/site';

interface Props {
  title?: string;
  body?: string;
}

const {
  title = 'For recital inquiries and professional introductions',
  body = 'Reach out for concert, service, collaboration, or church music inquiries.',
} = Astro.props;
---

<section class="section dark-band">
  <p class="eyebrow">Contact</p>
  <h2>{title}</h2>
  <p class="lede">{body}</p>
  <div class="button-row">
    <a class="button" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
  </div>
</section>
```

- [ ] **Step 5: Run checks**

Run:

```bash
npm run check
```

Expected: components type-check, or route-related errors remain until pages exist.

- [ ] **Step 6: Commit components**

```bash
git add src/components
git commit -m "feat: add reusable page components"
```

---

### Task 5: Build Site Routes

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/biography.astro`
- Create: `src/pages/trinity-music.astro`
- Create: `src/pages/events.astro`
- Create: `src/pages/media.astro`
- Create: `src/pages/contact.astro`

- [ ] **Step 1: Add homepage route**

Create `src/pages/index.astro`:

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import ContactCallout from '../components/ContactCallout.astro';
import EventList from '../components/EventList.astro';
import MediaGrid from '../components/MediaGrid.astro';
import { site } from '../data/site';
import { groupEventsByStatus } from '../lib/events';
import { getFeaturedMedia } from '../lib/media';

const events = await getCollection('events');
const media = await getCollection('media');
const groupedEvents = groupEventsByStatus(events);
const featuredMedia = getFeaturedMedia(media);
---

<BaseLayout>
  <section class="hero hero-panel">
    <div>
      <p class="eyebrow">Organist · Improviser · Choirmaster</p>
      <h1>{site.name}</h1>
      <p class="lede">Professional church musician, concert organist, and Director of Music and Choirmaster at Trinity Episcopal Church in Tulsa, Oklahoma.</p>
      <div class="button-row">
        <a class="button" href="/events/">View events</a>
        <a class="button" href="/contact/">Contact</a>
      </div>
    </div>
    <div class="card">
      <p class="eyebrow">Trinity Episcopal Church</p>
      <h3>Music formed by liturgy, choral leadership, and the organ.</h3>
      <p>Casey's work at Trinity supports worship through service planning, choir direction, organ repertoire, and improvisation.</p>
    </div>
  </section>

  <section class="section">
    <p class="eyebrow">Upcoming</p>
    <h2>Events</h2>
    <EventList events={groupedEvents.upcoming.slice(0, 3)} emptyText="Upcoming events will be announced here." />
  </section>

  <section class="section">
    <p class="eyebrow">Selected Media</p>
    <h2>Recordings and features</h2>
    <MediaGrid items={featuredMedia} />
  </section>

  <ContactCallout />
</BaseLayout>
```

- [ ] **Step 2: Add content-backed page routes**

Create `src/pages/biography.astro`:

```astro
---
import { getEntry } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import PageHeader from '../components/PageHeader.astro';
import ContactCallout from '../components/ContactCallout.astro';

const page = await getEntry('pages', 'biography');
if (!page) {
  throw new Error('Missing biography page content');
}
const { Content } = await page.render();
---

<BaseLayout title={page.data.title} description={page.data.description}>
  <PageHeader eyebrow={page.data.eyebrow} title={page.data.title} description={page.data.description} />
  <section class="section prose">
    <Content />
  </section>
  <ContactCallout />
</BaseLayout>
```

Create `src/pages/trinity-music.astro`:

```astro
---
import { getEntry } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import PageHeader from '../components/PageHeader.astro';
import ContactCallout from '../components/ContactCallout.astro';

const page = await getEntry('pages', 'trinity-music');
if (!page) {
  throw new Error('Missing Trinity Music page content');
}
const { Content } = await page.render();
---

<BaseLayout title={page.data.title} description={page.data.description}>
  <PageHeader eyebrow={page.data.eyebrow} title={page.data.title} description={page.data.description} />
  <section class="section prose">
    <Content />
  </section>
  <ContactCallout title="For Trinity music questions" body="Use the contact address for concise music-program inquiries and service music coordination." />
</BaseLayout>
```

Create `src/pages/contact.astro`:

```astro
---
import { getEntry } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import PageHeader from '../components/PageHeader.astro';
import ContactCallout from '../components/ContactCallout.astro';

const page = await getEntry('pages', 'contact');
if (!page) {
  throw new Error('Missing contact page content');
}
const { Content } = await page.render();
---

<BaseLayout title={page.data.title} description={page.data.description}>
  <PageHeader eyebrow={page.data.eyebrow} title={page.data.title} description={page.data.description} />
  <section class="section prose">
    <Content />
  </section>
  <ContactCallout />
</BaseLayout>
```

- [ ] **Step 3: Add Events route**

Create `src/pages/events.astro`:

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import EventList from '../components/EventList.astro';
import PageHeader from '../components/PageHeader.astro';
import { groupEventsByStatus } from '../lib/events';

const events = await getCollection('events');
const groupedEvents = groupEventsByStatus(events);
---

<BaseLayout title="Events" description="Upcoming and past events for Casey Cantwell.">
  <PageHeader eyebrow="Events" title="Events" description="Upcoming services, recitals, and archived performances." />
  <section class="section">
    <p class="eyebrow">Upcoming</p>
    <h2>Upcoming events</h2>
    <EventList events={groupedEvents.upcoming} emptyText="Upcoming events will be announced here." />
  </section>
  <section class="section">
    <p class="eyebrow">Archive</p>
    <h2>Past events</h2>
    <EventList events={groupedEvents.past} emptyText="Past events will appear here." />
  </section>
</BaseLayout>
```

- [ ] **Step 4: Add Media route**

Create `src/pages/media.astro`:

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import MediaGrid from '../components/MediaGrid.astro';
import PageHeader from '../components/PageHeader.astro';

const media = await getCollection('media');
---

<BaseLayout title="Media" description="Selected media, recordings, and features for Casey Cantwell.">
  <PageHeader eyebrow="Media" title="Media" description="Selected recordings, videos, and features." />
  <section class="section">
    <MediaGrid items={media} />
  </section>
</BaseLayout>
```

- [ ] **Step 5: Run full static checks**

Run:

```bash
npm run build
```

Expected: Astro check and build pass, producing `dist/`.

- [ ] **Step 6: Commit routes**

```bash
git add src/pages
git commit -m "feat: add site routes"
```

---

### Task 6: Add Local Imagery And Visual Polish

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`
- Create: `public/images/trinity-context.jpg` or another approved local image file
- Modify: `public/images/README.md`

- [ ] **Step 1: Source approved imagery**

Use public imagery from `trinitytulsa.org` or an appropriate replaceable church/organ image. Save the image locally under `public/images/`.

Expected file:

```text
public/images/trinity-context.jpg
```

If no image can be downloaded because network access is unavailable, create no binary image and continue with the CSS fallback from Step 2.

- [ ] **Step 2: Add image-aware hero markup**

Modify the right side of the homepage hero in `src/pages/index.astro` to:

```astro
    <figure class="hero-image-card">
      <img src="/images/trinity-context.jpg" alt="Architectural detail at Trinity Episcopal Church or an organ setting" />
      <figcaption>Music shaped by liturgy, architecture, and the instrument.</figcaption>
    </figure>
```

If the image was not available, use:

```astro
    <div class="hero-image-card image-fallback" aria-label="Architectural organ-inspired visual">
      <span>Trinity · Organ · Improvisation</span>
    </div>
```

- [ ] **Step 3: Add final visual styles**

Append to `src/styles/global.css`:

```css
.hero-image-card {
  margin: 0;
  min-height: 420px;
  border-left: 5px solid var(--gold);
  background: linear-gradient(135deg, var(--green-800), var(--green-950));
  overflow: hidden;
  position: relative;
}

.hero-image-card img {
  width: 100%;
  height: 100%;
  min-height: 420px;
  display: block;
  object-fit: cover;
  filter: saturate(0.78) contrast(1.04);
}

.hero-image-card figcaption,
.hero-image-card span {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  color: var(--ivory);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.25rem;
}

.image-fallback {
  display: flex;
  align-items: flex-end;
}
```

- [ ] **Step 4: Update image notes**

Modify `public/images/README.md` to list the actual local image filename and source URL used. If no image was available, add:

```markdown
No external image was downloaded during initial implementation. The homepage uses a CSS fallback until approved Casey or Trinity imagery is added.
```

- [ ] **Step 5: Verify build**

Run:

```bash
npm run build
```

Expected: build passes and local images are copied into `dist/`.

- [ ] **Step 6: Commit visual polish**

```bash
git add src/pages/index.astro src/styles/global.css public/images
git commit -m "feat: add liturgical visual polish"
```

---

### Task 7: Browser Verification And Final Fixes

**Files:**
- Modify files only as needed based on verification findings.

- [ ] **Step 1: Start the local dev server**

Run:

```bash
npm run dev
```

Expected: Astro prints a local URL, normally `http://localhost:4321/`.

- [ ] **Step 2: Verify core routes in browser**

Open these routes:

```text
http://localhost:4321/
http://localhost:4321/biography/
http://localhost:4321/trinity-music/
http://localhost:4321/events/
http://localhost:4321/media/
http://localhost:4321/contact/
```

Expected: every route renders without a 404, the header navigation works, and footer contact appears.

- [ ] **Step 3: Verify responsive layout**

Check desktop and mobile widths:

```text
Desktop: 1440 x 900
Mobile: 390 x 844
```

Expected: text does not overlap, navigation wraps cleanly, cards stack on mobile, and the hero remains readable.

- [ ] **Step 4: Verify event ordering**

On `/events/`, confirm:

```text
Upcoming events appear above past events.
Upcoming events sort oldest to newest.
Past events sort newest to oldest.
```

- [ ] **Step 5: Fix verification issues**

If text overlaps, cards break, links fail, or build errors occur, make the smallest focused edit and rerun:

```bash
npm run build
```

Expected: build passes after each fix.

- [ ] **Step 6: Commit verification fixes**

If changes were needed:

```bash
git add .
git commit -m "fix: polish verified site experience"
```

If no changes were needed, do not create an empty commit.

---

### Task 8: Final Project Handoff

**Files:**
- Modify: `README.md` if verification reveals useful local instructions.
- Modify: `docs/deployment-audit.md` only if deployment occurs.

- [ ] **Step 1: Run final build**

Run:

```bash
npm run build
```

Expected: build passes.

- [ ] **Step 2: Check git status**

Run:

```bash
git status --short --branch
```

Expected: either clean working tree or only intentionally uncommitted local runtime files.

- [ ] **Step 3: Prepare final summary**

Report:

```text
Project path
Pages built
How to run locally
Verification performed
Any temporary content that must be replaced before launch
```

Do not claim deployment unless a real deployment was performed and recorded in `docs/deployment-audit.md`.

---

## Self-Review

- Spec coverage: The plan implements Astro static output, Markdown content collections, all approved pages, upcoming and past events, secondary media, Liturgical Green styling, local imagery guidance, browser verification, and deployment audit preparation.
- Placeholder scan: No implementation placeholders, TBD markers, or unspecified tasks remain.
- Type consistency: Event and media field names match `src/content.config.ts`, helper functions, and component props.
