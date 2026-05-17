# Casey Cantwell Artist Site Design

## Summary

Build a small, formal artist website for Casey Cantwell at `caseycantwell.com`. Casey is a professional church musician and organist, Director of Music and Choirmaster at Trinity Episcopal Church in Tulsa, Oklahoma, an accomplished concert organist, and a master of improvisation.

The site will use Astro as a static site generator, with Markdown-based content collections for pages, events, and media. The first release should be easy to host, easy to edit in files, and organized cleanly enough to migrate to a hosted CMS later.

## Goals

- Present Casey as a serious concert organist, improviser, and church musician.
- Give visitors clear paths to biography, Trinity music information, events, media, and contact.
- Support both upcoming events and an archive of past events.
- Include Trinity Music content that describes Casey's role and the music program, plus light service or music schedule information.
- Use temporary imagery from `trinitytulsa.org` and appropriate church or organ sources, saved locally and replaceable later.
- Keep the implementation static, durable, and free of unnecessary backend complexity.

## Non-Goals

- Do not build a CMS in the first version.
- Do not build ticketing, payments, newsletter management, or parish member portals.
- Do not depend on live hotlinked images from third-party sites.
- Do not overbuild media or event archives beyond what is needed for a polished first release.

## Information Architecture

Top-level navigation:

- Home
- Biography
- Trinity Music
- Events
- Media
- Contact

### Home

The homepage introduces Casey with a formal hero treatment, a concise artist statement, and a clear identity line: organist, improviser, Director of Music and Choirmaster. It includes previews for upcoming events, Trinity Music, selected media, and contact.

### Biography

The Biography page provides a fuller professional narrative, emphasizing concert organ performance, improvisation, church music leadership, and Casey's role at Trinity Episcopal Church in Tulsa.

### Trinity Music

The Trinity Music page explains Casey's role and the music program at Trinity. It should include light schedule-oriented content for services, music offerings, or recurring program information without becoming a full parish operations page.

### Events

The Events page lists upcoming events first, followed by a past events archive. Events should be filterable or clearly grouped by status, but the first version can keep interaction minimal.

### Media

The Media page is secondary but present. It can feature selected recordings, videos, or placeholder media entries until real links are available.

### Contact

The Contact page supports recital inquiries, church music contact, and general professional contact. It should make the next step obvious without publishing more personal information than necessary.

## Visual Direction

Use the approved "Liturgical Green" direction:

- Deep liturgical green as the primary field color.
- Warm ivory backgrounds and text areas.
- Aged gold accents for rules, buttons, and small navigational details.
- Restrained serif typography for headings and refined sans-serif typography for body and navigation.
- Subtle architectural motifs inspired by church interiors, organ pipes, arches, and liturgical program design.
- Formal and elegant rather than trendy, cute, or overly theatrical.

The site should feel grounded in sacred music and tradition while still reading as a professional artist site for concert presenters.

## Content Model

Use Astro content collections with Markdown or MDX files.

### Site Settings

Shared settings should include:

- Site name: `Casey Cantwell`
- Domain: `caseycantwell.com`
- Default title pattern
- Contact email placeholder
- Social or external links
- Primary location: Tulsa, Oklahoma

### Pages

Pages can use Markdown content with frontmatter for title, description, and optional hero image.

### Events

Each event should include:

- `title`
- `date`
- `endDate` when needed
- `venue`
- `location`
- `eventType`
- `description`
- `externalUrl`
- `featured`
- `status`, using `upcoming` or `past`

Upcoming events should sort ascending by date. Past events should sort descending by date.

### Media

Each media item should include:

- `title`
- `type`, such as `video`, `audio`, or `link`
- `sourceUrl`
- `description`
- `date`
- `featured`

## Technical Design

Use Astro with static output. Keep the project small and transparent:

- `src/pages/` for top-level routes.
- `src/layouts/` for shared page shell and metadata.
- `src/components/` for reusable sections such as hero, event list, media card, and contact callout.
- `src/content/` for Markdown content collections.
- `src/styles/` for global styles and design tokens.
- `public/images/` for local image assets.

No backend is required. JavaScript should be minimal and only used where it improves the user experience.

## Error Handling And Fallbacks

- If an event has no external URL, render it without a link instead of a broken action.
- If media items are unavailable, render a dignified placeholder section rather than fake embeds.
- If images are missing, use a local fallback visual treatment that preserves the layout.
- Contact information should be centralized so placeholder values are easy to replace.

## Testing And Verification

Before completion:

- Run the Astro development server.
- Verify Home, Biography, Trinity Music, Events, Media, and Contact routes.
- Check that upcoming and past events render in the correct order.
- Inspect desktop and mobile layouts in the browser.
- Confirm images load from local project assets.
- Run available formatting, linting, or build checks.

## Deployment And Audit

When this project is deployed, each deployment should increment the major and minor version numbers and record the deployment in a project-local audit document. The audit location will be `docs/deployment-audit.md`.

Initial implementation should create the audit file before the first deploy so the convention is ready when publishing begins.
