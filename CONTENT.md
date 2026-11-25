# Next.js portfolio content

This file is the source of truth for every visible word on the portfolio.
Mirroring it in `src/content.ts` keeps App Router server and client components data-driven.

Keep copy synchronized with card artwork. Edit this file before swapping painted titles or labels.

## Page metadata

**Title:** "Grand Theft Developer · Jarvis, Full-Stack Developer"

**Description:** "Portfolio of Jarvis, a full-stack developer in Miami. Fan-made GTA VI-style portfolio. Not affiliated with Rockstar Games."

## App Router content contract

- Page copy belongs in `src/content.ts`, exported as `CONTENT`.
- Every external URL belongs in `src/content.ts`, exported as `LINKS`.
- Default every sample URL in `LINKS` to `#`.
- Serve copy through server components whenever possible.
- Pass content props into client components only for animation or interaction.
- Set the page title and description from `CONTENT.page` in `app/layout.tsx` metadata.

## Navbar

- Monogram: "GTD"
- Monogram destination: top of the page
- Menu icon
- Pill: "Hire Me"

## Hero

- Tagline line 1: "Full-stack developer"
- Tagline line 2: "Booking spring 2027"
- Button: "Hire Me"
- Tech tags: "React", "Node.js", "PostgreSQL"
- Fan-made line: "Fan-made GTA VI-style portfolio. Not affiliated with Rockstar Games."

## Meet the Developer

### Scene

- Eyebrow: "Watch"
- Title: "Meet the Developer"
- Button: "Play"

### Featured card

- Eyebrow: "Watch"
- Title: "Ride Along"
- Button: "Play"

### Project cards

1. Eyebrow: "AI"
   Title: "AI Book Assistant"
2. Eyebrow: "3D Web"
   Title: "3D Basketball Website"
3. Eyebrow: "Mobile"
   Title: "React Native Language App"

## Services

### Card 1

- Title: "Code Rescue"
- Text: "For existing teams: slow pages, flaky deploys or a codebase nobody wants to touch. I find the problems, fix them and leave it documented."
- Button: "See What's Included"

### Card 2

- Eyebrow: "For new products"
- Title: "Full-Stack / Builds"
- Text: "Product, API and database, designed and shipped end to end, from the first sketch to production. Typically six to ten weeks."
- Button: "Start a Project"

## Miami, USA.

- Title: "Miami, USA."
- Bio: "I'm Jarvis, a full-stack developer who has spent eight years building products for startups, agencies and teams that need to ship fast without breaking things. I work across the whole stack, from the interface people see to the API and database behind it, and I care about code the next developer will thank me for."

## Four wide cards

Render these in this order. Alternate text alignment or text placement so each copy block uses
the open area left by its artwork.

### Open to Work

- Eyebrow: "Status"
- Title: "Open to Work"
- Text: "Available for freelance and contract work from spring 2027, remote or on site in Miami."
- Button: "Hire Me"

### After Hours

- Eyebrow: "Community"
- Title: "After Hours"
- Text: "When the deploy's done, I'm out with Miami's dev crowd: meetups, talks and the occasional late-night hackathon."
- Button: "View All"

### The Heist

- Eyebrow: "Case Study"
- Title: "The Heist: Shipped in Six Weeks"
- Text: "How I rebuilt a booking platform's checkout and cut drop-offs by 31%."
- Button: "Read the Case Study"

### Off the Clock

- Eyebrow: "Personal"
- Title: "Off the Clock"
- Text: "Open-source contributor, weekend game jammer and the one who always brings the coffee to the meetup."
- Button: "More About Me"

## Clients

- Section header: "Clients"
- Header link: "View All"

### Card 1

- Eyebrow: "Sample Clients"
- Title: "Startups, Agencies and Product Teams"
- Button: "See All Clients"

### Card 2

- Eyebrow: "Sample Review"
- Title: "Incredibly fast, detail-oriented, and easy to work with."
- Button: "Read the Review"

## Blog

- Section header: "Blog"
- Header link: "View all"
- Post 1: "700 AI Agents Escaped and Became Hackers" — "November 3, 2026"
- Post 2: "Agentic Engineering in 2026" — "October 21, 2026"
- Post 3: "Think System Design & Architecture" — "October 8, 2026"

## Footer

- Logo
- Pill: "Build Your Own"
- Supporting text: "Want a portfolio like this? Here's how it was built, step by step."
- Social labels: "GitHub", "LinkedIn", "X", "YouTube"
- Utility links: "Email", "Résumé", "Privacy"
- Badge title: "Rated D for Developer"
- Badge text: "Clean Code, Mild Refactoring, Frequent Coffee."
- Copyright: "© 2026 Grand Theft Developer."
- Disclaimer: "Fan-made GTA VI-style portfolio. Not affiliated with Rockstar Games."
