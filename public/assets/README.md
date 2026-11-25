# Assets

Artwork, logo, fonts and video links for the Grand Theft Developer portfolio. All artwork is our own (AI-generated); nothing here is Rockstar's.

`site/` holds the section artwork pre-cropped for the full portfolio. `source/` and `brand/` hold the original artwork, and `hosted-media.json` points at the videos on Cloudinary. Folders are named after the page section they belong to.

```
assets/
├── brand/
│   ├── logo-poster.png       full logo (gradient VI + "grand theft developer"); the hero logo layers and the footer logo are cut from it
│   └── loader-logo.svg       the loading screen's shape: the wordmark's letters in one colour
├── fonts/                    Outfit (variable) + Barlow Condensed 700/900, SIL Open Font License, latin subset
├── hosted-media.json         Cloudinary links to the two scroll-scrubbed videos (services, city)
├── source/                   originals, before they were cut to size
│   ├── posters/      941×1672   full-stack-developer, off-the-clock, sunset-codeposter, the-heist-case-study
│   ├── squares/      ~1254²     achievements, beachfront-classic-car, performance-speedboat, supercar-projects-tower, supercar-tech-stack
│   ├── scenes/       ~16:9      after-hours-nightclub (1024×572), code-master-supercar, projects-developer-supercar, rooftop-full-stack, site-glow-hotel-sign (2:1), sportbike-rider
│   ├── banners/      ~5:2       alligator-float (2:1), sunset-coast, vault-heist
│   ├── projects/     1254²      3d-basketball-website, ai-book-assistant, react-native-language-app
│   ├── clients/      1254²      happy-clients-key-rack, miami-postcard-testimonial
│   ├── blog/         1672×941   agentic-engineering-2026, ai-agents-escaped, system-design-architecture
│   └── hero-masks/   desktop/ and mobile/: the outline of each of the hero intro's 10 pieces
└── site/                     every image the page loads, ready to use
    ├── hero/                 desktop/ and mobile/: shard-01…10, poster, logo-vi, logo-gta, poster-logo
    ├── meet-the-developer/   scene, featured-desktop, featured-mobile, card-1…3
    ├── services/             card-tall-desktop, card-tall-mobile, card-short
    ├── highlights/           open-to-work, after-hours, the-heist, off-the-clock (the four wide cards under Miami, USA.)
    ├── clients/              clients, testimonial
    ├── blog/                 post-1…3
    └── footer/               logo
```

## What goes where

| Section | Art |
|---|---|
| Loader | `brand/loader-logo.svg` |
| Hero | `site/hero/`: one intro piece per shard (cut from the posters, squares and scenes), the logo layers and the poster |
| Meet the Developer | scene: `site/meet-the-developer/scene` (projects-developer-supercar); featured card: `featured-desktop` (5:2) and `featured-mobile` (2:3, phones in portrait), both sportbike-rider; project cards: `card-1…3` (the three projects) |
| Services | backdrop: the neck-rotation video (`hosted-media.json` → `services`); big card: `card-tall-desktop` / `card-tall-mobile` (site-glow-hotel-sign); wide card: `card-short` (rooftop-full-stack) |
| Miami, USA. | backdrop: the city video (`hosted-media.json` → `city`) |
| Wide cards under Miami | `site/highlights/`: `open-to-work` (sunset-coast), `after-hours` (after-hours-nightclub), `the-heist` (vault-heist), `off-the-clock` (alligator-float) |
| Clients | `site/clients/`: `clients` (happy-clients-key-rack), `testimonial` (miami-postcard-testimonial) |
| Blog | `site/blog/post-1…3` (the three blog covers) |
| Footer | `site/footer/logo` |

## Notes

- `site/` images are cut to the live site's slot sizes. Square art that fills a wide or tall slot is placed whole, with the rest of the slot filled by a blurred extension of it, so titles baked into the art stay readable. Nothing is upscaled.
- To change a picture, replace its original in `source/` and re-cut it to the same size and name in `site/`.
- To change a video, put its Cloudinary URL in `hosted-media.json`.
- Some artwork shows real company logos (the clients key rack, "certified" badges, product names). Label that content as sample, or replace the art, before publishing a real portfolio.

## Findings: file-by-file inventory

The current minimal name screen does not render these artwork files; they are retained for the full portfolio sections.

### Brand, fonts, and hosted video

- `brand/logo-poster.png` — complete branded poster artwork; source for the layered hero logo and footer artwork.
- `brand/loader-logo.svg` — single-colour loader mark.
- `fonts/barlow-condensed-700.woff2` — Barlow Condensed Bold display font.
- `fonts/barlow-condensed-900.woff2` — Barlow Condensed Black display font.
- `fonts/outfit-variable.woff2` — variable-weight Outfit font for body and interface text.
- `hosted-media.json` — Cloudinary video URLs and notes for the Services and Miami/city backgrounds.

### Site-ready artwork

- `site/hero/desktop/poster.avif` and `site/hero/mobile/poster.avif` — responsive hero collage backgrounds.
- `site/hero/desktop/poster-logo.avif` and `site/hero/mobile/poster-logo.avif` — complete hero logo composition on transparency.
- `site/hero/desktop/logo-gta.avif` and `site/hero/mobile/logo-gta.avif` — isolated wordmark lettering layer.
- `site/hero/desktop/logo-vi.avif` and `site/hero/mobile/logo-vi.avif` — separate VI-shaped illustrated background layer.
- `site/hero/desktop/shard-01.avif` through `shard-10.avif` — ten transparent desktop collage pieces, aligned to the corresponding desktop masks.
- `site/hero/mobile/shard-01.avif` through `shard-10.avif` — the mobile-specific versions of those ten collage pieces.
- `site/meet-the-developer/scene.avif` — backdrop still for the developer/project scene.
- `site/meet-the-developer/featured-desktop.avif` — wide desktop featured project image.
- `site/meet-the-developer/featured-mobile.avif` — portrait mobile version of the featured image.
- `site/meet-the-developer/card-1.avif`, `card-2.avif`, and `card-3.avif` — art for the three project cards.
- `site/services/card-tall-desktop.avif` and `card-tall-mobile.avif` — responsive tall service-card artwork.
- `site/services/card-short.avif` — wide/short service-card artwork.
- `site/highlights/open-to-work.avif` — Open to Work card.
- `site/highlights/after-hours.avif` — After Hours card.
- `site/highlights/the-heist.avif` — case-study card.
- `site/highlights/off-the-clock.avif` — Off the Clock card.
- `site/clients/clients.avif` — sample clients card.
- `site/clients/testimonial.avif` — sample testimonial card.
- `site/blog/post-1.avif`, `post-2.avif`, and `post-3.avif` — the three ordered blog-cover images.
- `site/footer/logo.avif` — footer brand artwork.

For the numbered shard and mask ranges above, each numbered file has the same purpose and matches the corresponding number in the other responsive set.

### Source artwork

- `source/banners/alligator-float.png` — alligator pool-float banner art; source for Off the Clock.
- `source/banners/sunset-coast.png` — sunset-coast banner art; source for Open to Work.
- `source/banners/vault-heist.png` — vault/heist banner art; source for the case study.
- `source/blog/agentic-engineering-2026.png` — cover art for “Agentic Engineering in 2026”.
- `source/blog/ai-agents-escaped.png` — cover art for “700 AI Agents Escaped and Became Hackers”.
- `source/blog/system-design-architecture.png` — cover art for “Think System Design & Architecture”.
- `source/clients/happy-clients-key-rack.png` — sample client-logo key-rack artwork.
- `source/clients/miami-postcard-testimonial.png` — sample Miami postcard/testimonial artwork.
- `source/hero-masks/desktop/shard-01.png` through `shard-10.png` — desktop alpha masks that define the ten hero collage-piece shapes.
- `source/hero-masks/mobile/shard-01.png` through `shard-10.png` — mobile alpha masks for the corresponding hero pieces.
- `source/posters/full-stack-developer.png` — full-stack developer poster art.
- `source/posters/off-the-clock.png` — Off the Clock poster art.
- `source/posters/sunset-codeposter.png` — sunset/code poster art.
- `source/posters/the-heist-case-study.png` — The Heist case-study poster art.
- `source/projects/3d-basketball-website.png` — sample 3D basketball project artwork.
- `source/projects/ai-book-assistant.png` — sample AI book assistant project artwork.
- `source/projects/react-native-language-app.png` — sample React Native language-app artwork.
- `source/scenes/after-hours-nightclub.png` — nightclub scene art for After Hours.
- `source/scenes/code-master-supercar.png` — developer-at-work/supercar scene source art, available for hero collage crops.
- `source/scenes/projects-developer-supercar.png` — developer with supercar scene for Meet the Developer.
- `source/scenes/rooftop-full-stack.png` — rooftop developer scene for the short service card.
- `source/scenes/site-glow-hotel-sign.png` — hotel-sign scene used for the tall service card.
- `source/scenes/sportbike-rider.png` — sportbike scene used for the featured project imagery and city-video concept.
- `source/squares/achievements.png` — sample achievements and testimonial square artwork.
- `source/squares/beachfront-classic-car.png` — beachfront classic-car square art.
- `source/squares/performance-speedboat.png` — performance speedboat square art.
- `source/squares/supercar-projects-tower.png` — supercar/project-tower square art.
- `source/squares/supercar-tech-stack.png` — supercar and tech-stack square art.

### Non-content files

- `.DS_Store`, `site/.DS_Store`, and `source/.DS_Store` — macOS Finder metadata; not used by the site.
- `README.md` — this asset guide.
