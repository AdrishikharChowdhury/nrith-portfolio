# Grand Theft Developer: a Next.js GTA VI-style developer portfolio

A fan-made developer portfolio inspired by the layout and motion of the GTA VI website:
https://www.rockstargames.com/VI

This project is not affiliated with Rockstar Games. Artwork, copy, branding, and media are
our own. The live site is a reference for layout, size, timing, and motion only.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- GSAP with ScrollTrigger
- Lenis for smooth scrolling
- Next `Image`, `next/font`, and App Router metadata

## Next.js conventions

- Keep `app/layout.tsx` responsible for global fonts and page metadata.
- Keep `app/page.tsx` as the server component composition entry point.
- Use the `app/(root)/` route group for the main portfolio page when route organization requires it.
- Use server components by default.
- Add `"use client"` only to components that need browser APIs, state, effects, event handlers,
  Lenis, GSAP, ScrollTrigger, or scroll-scrubbed media.
- Split a client boundary around motion/interaction code; do not mark whole page sections as
  client components when their copy and markup can remain server-rendered.
- Use `next/image` for imported local artwork. Use `public/` only for runtime paths that cannot
  be imported or for files intentionally served as public assets.
- Use `next/font/local` for project fonts and `next/font/google` only for approved fonts.
- Set static page metadata in `app/layout.tsx` or `generateMetadata` in a route file.
- Preserve the exact App Router file names: `layout.tsx`, `page.tsx`, `loading.tsx`,
  `error.tsx`, and `not-found.tsx` when those boundaries are intentionally implemented.
- Read Next 16 conventions and deprecation guidance from `node_modules/next/dist/docs/` before
  using an unfamiliar API.

## Inputs

1. User instructions.
2. `CONTENT.md`, for every word on the page.
3. `src/assets/` and `public/assets/` for artwork and fonts.
4. `src/references/` for section screen recordings.
5. `hosted-media.json` for Cloudinary video URLs.
6. The live GTA VI website, only for layout, dimensions, timing, and motion.

Never assume a value from memory or from a similar website. Measure and extract before coding.

## Content

`CONTENT.md` is the source of truth. Mirror it in `src/content.ts` as one typed content object,
plus one `LINKS` object containing every user-editable URL.

Requirements:

- The developer name appears only in the page title, metadata, and biography.
- The portfolio voice is first person.
- Projects, clients, numbers, names, and external links are samples.
- Keep every link in `LINKS` and set all samples to `#` until replaced.
- Label fictional or sample clients and reviews as "Sample".
- Preserve "Fan-made GTA VI-style portfolio. Not affiliated with Rockstar Games." in the hero,
  footer, and page description.
- Several cards contain painted titles or labels. Keep the copy in `CONTENT.md`,
  `src/content.ts`, and the artwork in sync.

Server components should read content directly. Client components may receive content values as
props, but should not become the ownership point for page copy.

## Assets

Use these Next.js-friendly locations:

```text
src/assets/
  brand/
  fonts/
  site/
    hero/
    meet-the-developer/
    services/
    highlights/
    clients/
    blog/
    footer/
  source/
  hosted-media.json

public/
  assets/
    runtime-only artwork or files
```

- Never edit delivered `src/assets/site/` images by hand.
- Recrop from `src/assets/source/` using a reusable script in `tools/`.
- Import static artwork where Next.js can optimize it.
- Use public paths for browser-runtime paths, such as hosted video posters if required.
- Record the first-pass asset-to-section map in `Findings`.

## Method: Record to Diff

1. Record one section screen capture and leave it under `src/references/`.
2. Use Playwright and Chromium to dump computed styles and bounding boxes.
3. Sample at 375, 768, 1024, 1440, 1920, and 2560px, plus phone landscape.
4. Use the live site to extract exact triggers, durations, eases, and breakpoints.
5. Build the Next.js section from measured values.
6. Measure the local route at the same widths and compare against the live site.

Rules:

- Do not adjust by eye when a measurement can settle a value.
- Recheck live values at every breakpoint if they break an established pattern.
- Confirm recordings and headless Chromium received the same live page.
- Sampling and temporary output belong in `tools/` and `.measure/`.
- `.measure/` is temporary and must remain git-ignored.

## Motion and media

- Put GSAP registration and ScrollTrigger cleanup in client components.
- Clean up timelines and scroll triggers on unmount.
- Use Lenis only in a client-side provider or root motion component.
- Respect `prefers-reduced-motion: reduce` with a readable static fallback.
- Import Cloudinary URLs only through `src/assets/hosted-media.json`.
- Build portrait phone renditions with a subject-following 9:16 crop.
- Match the poster crop to the first video frame.
- Drop audio and add keyframes often enough to scrub cleanly.
- Hold the first and last frame around clips that do not cover the full scroll range.

## Page map

| Live site section | Portfolio section |
|---|---|
| Loader | Loader with the portfolio loader logo |
| Navbar | GTD monogram, menu icon, and appearing "Hire Me" pill |
| Hero | Collage, logo, tagline, hire button, tech tags, and fan-made disclaimer |
| Launch Trailer | Meet the Developer pinned scene and project cards |
| Ultimate Edition | Services video backdrop and two service cards |
| Vice City, USA. | Miami, USA. biography over a city video |
| Feature cards | Open to Work, After Hours, Case Study, and Off the Clock |
| Shop | Clients cards |
| Featured News | Blog posts |
| Footer | Logo, build-your-own pill, socials, links, disclaimer, and badge |

Do not add promo strips or banners not represented by this map. Ask before building an extra
live-site element.

## Accessibility

- Use semantic HTML and one page-level heading hierarchy.
- Ensure every interactive control works with keyboard input.
- Provide visible keyboard focus styles.
- Provide text alternatives for meaningful images.
- Do not use scroll-only behavior for essential navigation or content.
- Keep reduced-motion content visible and usable.

## Definition of done

A section is complete only when:

- Its layout is within 1px or 1% at all required widths.
- It matches the reference recording frame by frame.
- Its pins and section handoffs do not disrupt the previous or next section.
- Navbar and cursor-glow changes match the live behavior.
- Text fits the artwork at desktop and phone widths.
- Reduced motion shows readable static content.
- Focus states are visible and keyboard navigation works.
- Earlier sections remain unchanged by shared-code updates.
- The report states what was checked and what still differs.

## Project memory

Keep the progress and findings sections short and current.

- **Progress:** record done, in progress, next, and open differences.
- **Findings:** record established asset maps, scaling rules, breakpoints, fonts, route structure,
  and non-obvious Next.js behavior.
- Remove facts proven wrong and collapse completed work into one line.

## Git

- Commits are authored by the user.
- Never add an AI co-author or attribution line.
- Commit only when asked.
- Never force-push.

## Progress

**Done:** Next.js App Router scaffold is present and project conventions are Next.js-specific.

**In progress:** none.

**Next:** establish the asset map and build the measuring tool.

**Open differences:** none yet.

## Findings

- The app uses Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4.
- Shared page copy will live in `src/content.ts`.
- Root metadata and fonts are configured in `app/layout.tsx`.
