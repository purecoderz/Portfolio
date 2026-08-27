# Oyetunji Taofeek — Portfolio

A single-page personal portfolio for **Oyetunji Taofeek Ololade** — backend software engineer, technical educator, and founder of [Logixia Academy](https://logixia.com.ng). It presents services, selected work, and skills, and routes enquiries straight to email/phone — no backend required.

Built with Vite + React 19 and Tailwind CSS v4, and ships with **two full colour themes**: a clean professional `light` theme and a neon `cyber` theme.

---

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Editing the content](#editing-the-content)
- [Images and assets](#images-and-assets)
- [Theming](#theming)
- [Animation](#animation)
- [Accessibility](#accessibility)
- [Deployment](#deployment)
- [Known gaps](#known-gaps)

---

## Features

- **Nine sections**, all content-driven from one file: Navbar → Hero → Stats → About → Services → Projects → Skills → Contact → Footer.
- **Dual theme** (`light` / `cyber`) with a two-segment switch in the navbar. The choice is saved to `localStorage` and applied **before first paint** by a tiny inline script in [index.html](index.html), so a reload on the cyber theme never flashes white.
- **Cyber-only effects** that cost the light theme nothing (they are no-ops under `:root`): a synthwave grid floor in the hero, page-wide scanlines, HUD corner brackets, neon text bloom, a radar-sweep headshot frame, and a travelling pulse down the skills timeline.
- **Developer-flavoured design language** — services render as little editor panes with a blinking caret, skills as a branching `git`-style timeline, and the hero carries a syntax-highlighted code window.
- **Scroll reveals** via `motion/react`, each one honouring `prefers-reduced-motion`.
- **Responsive** throughout, with a collapsible mobile nav and a sticky header that lights up once you scroll.
- **Contactable without a server**: `mailto:` and `tel:` links plus GitHub / LinkedIn / website icons.
- **SEO/social basics**: descriptive `<title>`, meta description, and Open Graph tags in [index.html](index.html).

## Tech stack

| Concern | Choice |
| --- | --- |
| Build tool | [Vite 8](https://vite.dev) |
| UI | React 19 (`react`, `react-dom`) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Animation | [Motion](https://motion.dev) (`motion/react`) |
| Linting | [oxlint](https://oxc.rs) with the `react` + `oxc` plugins |
| Fonts | Inter (body), Space Grotesk (display), JetBrains Mono (code) — loaded from Google Fonts |

There is no router, no state library, and no backend. The whole site is one scrolling page of static output.

## Getting started

**Prerequisites:** Node `^20.19.0 || >=22.12.0` (Vite 8's baseline) and npm.

```bash
npm install     # install dependencies
npm run dev     # start the dev server (default: http://localhost:5173)
```

Then open the URL Vite prints. Edits to `src/` hot-reload.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally to sanity-check a production build |
| `npm run lint` | oxlint over the project — **keep this clean** |

Before committing or deploying, run both:

```bash
npm run lint && npm run build
```

## Project structure

```
.
├── index.html                  # shell: fonts, meta/OG tags, pre-paint theme script
├── vite.config.js              # react + tailwindcss plugins
├── .oxlintrc.json              # lint rules (rules-of-hooks, only-export-components)
├── public/                     # served at the site root, copied verbatim to dist/
│   ├── profile.png             #   About headshot (transparent cutout)
│   ├── logixia.png             #   project screenshots
│   ├── gopher os.png
│   └── osun.png
└── src/
    ├── main.jsx                # React root, wraps <App> in <ThemeProvider>
    ├── App.jsx                 # section order lives here
    ├── data.js                 # ← ALL COPY AND CONTENT
    ├── index.css               # theme palettes, design tokens, shared classes, effects
    ├── theme.js                # theme list, storage key, context + useTheme()
    └── components/
        ├── themeprovider.jsx   # applies data-theme, persists it, updates theme-color
        ├── themetoggle.jsx     # the light/cyber segmented switch
        ├── navbar.jsx
        ├── hero.jsx
        ├── stats.jsx
        ├── about.jsx
        ├── services.jsx
        ├── projects.jsx
        ├── skills.jsx
        ├── contact.jsx
        ├── footer.jsx
        ├── icons.jsx           # inline SVG set, used as <Icon name="server" />
        └── reveal.jsx          # <Reveal> scroll-in wrapper
```

### Conventions

- Component **files are lowercase** (`navbar.jsx`, `hero.jsx`, …) and each has a **PascalCase default export**. Match this when adding one.
- No copy is hard-coded in components — everything reads from `src/data.js`.
- Repeated visual patterns are plain CSS classes in `src/index.css` (`.panel`, `.chip`, `.btn-primary`, `.btn-ghost`, `.icon-tile`, `.brand-gradient`, `.text-gradient`) rather than long duplicated utility strings. Gradients in particular are CSS classes so both themes can swap them at runtime.

## Editing the content

Almost every update you'll want to make is a one-line edit in [src/data.js](src/data.js). Its exports:

| Export | Drives | Notes |
| --- | --- | --- |
| `profile` | Hero, About, Contact, Footer | Name, title, location, email, phone, availability pill, headshot path, `lead` (hero pitch), `about` (array of paragraphs) |
| `socials` | Contact, Footer | `{ label, href, handle, icon }` — `icon` must be a key in `icons.jsx` (`github`, `linkedin`, `globe`) |
| `navLinks` | Navbar | `href` values are in-page anchors: `#about`, `#services`, `#projects`, `#skills` (also available: `#home`, `#contact`) |
| `stats` | Stats band | `{ value, label }` — four reads best on one row |
| `services` | Services | Each renders as an editor pane: `file` is the window title, `lines` are shown as `//` comments, `tags` are mono chips, `icon` is an `icons.jsx` key |
| `projects` | Projects | `{ image, name, badge, role, live, desc, tech }` |
| `skillGroups` | Skills | `{ dir, title, icon, items }` — `dir` is the mono badge on the timeline node |
| `education` | About | `{ title, org, year }` |

Two gotchas worth knowing:

- **Filenames with spaces must be URL-encoded** in `data.js`. `public/gopher os.png` is referenced as `/gopher%20os.png`.
- **Phone numbers** are formatted for display in `profile.phone`; Contact strips the spaces itself to build the `tel:` link, so keep it human-readable.

To reorder or drop a section, edit the JSX in [src/App.jsx](src/App.jsx) — that file is deliberately just the section list.

## Images and assets

Anything in `public/` is served from the site root and copied into `dist/` untouched — so `public/profile.png` is `/profile.png` in code.

To swap the headshot or a project screenshot, drop the new file in `public/` and point the corresponding `data.js` field at it. The headshot is designed as a **transparent cutout** sitting on a gradient disc (`.photo-frame`), which is what lets the cyber theme turn that disc into a radar scope; a rectangular photo will still work but loses the effect.

## Theming

Both palettes live at the top of [src/index.css](src/index.css) and are selected by a `data-theme` attribute on `<html>`:

```
:root                  → light  (default)
[data-theme='cyber']   → cyber
```

Every colour is a plain CSS variable (`--canvas`, `--ink`, `--line`, `--brand-500`, `--grad`, …), then aliased into Tailwind inside an `@theme inline { }` block. The `inline` keyword is load-bearing: it makes utilities compile to `var(--ink)` instead of `var(--color-ink)`, so flipping `data-theme` re-colours the page **at runtime** rather than at build time. That's the whole trick behind the instant theme switch.

**How the switch works end to end:**

1. The inline script in `index.html` reads `localStorage.theme` and stamps `data-theme` before the first paint.
2. `ThemeProvider` ([src/components/themeprovider.jsx](src/components/themeprovider.jsx)) initialises its state *from that attribute*, so React agrees with what's on screen.
3. On change it writes `data-theme`, persists the choice, updates the `<meta name="theme-color">` bar colour, and sets `data-theme-switching` for ~300 ms — a broad `* { transition }` rule is scoped to that attribute so the palette crossfades without taxing every hover for the rest of the session.
4. `ThemeToggle` reads and sets it through the `useTheme()` hook.

### Recolouring

Change a brand colour once in both blocks (`:root` and `[data-theme='cyber']`) and it propagates everywhere. Tokens are grouped by role — backgrounds, seven text steps, hairlines, brand ramp, the emerald availability pill, hero code-window syntax colours, gradients, shadows.

### Adding a third theme

1. Add the name to `THEMES` and a bar colour to `THEME_COLOR` in [src/theme.js](src/theme.js).
2. Add a `[data-theme='yourtheme'] { … }` block in `index.css` overriding the same variables `:root` declares.
3. Add an entry to `OPTIONS` in [src/components/themetoggle.jsx](src/components/themetoggle.jsx) (with an icon from `icons.jsx`).

Cyber-only decoration is written as `[data-theme='cyber'] .thing { … }` with an inert base class, so a new theme inherits the light layout and opts into whatever effects you give it.

## Animation

Scroll reveals go through one wrapper, [src/components/reveal.jsx](src/components/reveal.jsx):

```jsx
<Reveal delay={0.1}>…</Reveal>      {/* fade + rise, once */}
<Reveal x={-24} y={0}>…</Reveal>    {/* slide in from the side */}
```

It fires once per element (`viewport={{ once: true }}`) with an `-80px` margin so content is already settled by the time it's comfortably in view.

## Accessibility

Already handled, and worth preserving when you edit:

- `prefers-reduced-motion: reduce` collapses animations, transitions, and smooth scrolling globally.
- Decorative layers (scanlines, grid floor, tech grid, sweep line, HUD corners) are `aria-hidden` and `pointer-events: none`.
- The theme switch is a labelled `role="group"` of buttons using `aria-pressed`; the mobile menu button uses `aria-expanded`, and icon-only links carry `aria-label`.
- The seven text steps were chosen for contrast in both palettes; nothing suppresses the browser's default focus ring.
- Section landmarks use real `<section id>` anchors with `scroll-mt-20` so the fixed header never covers a heading.

## Deployment

`npm run build` emits a fully static `dist/` — no server, no environment variables.

- **Vercel / Netlify:** framework preset *Vite*, build `npm run build`, publish directory `dist`. No rewrite rules needed (single page, hash anchors only).
- **Render:** Static Site, same build command and publish directory.
- **GitHub Pages / any subpath host:** set `base: '/<repo-name>/'` in [vite.config.js](vite.config.js) first, otherwise asset URLs 404.

`dist/` is git-ignored; treat it as build output and never edit it by hand.

## Known gaps

Small, known, and safe to pick up in any order:

- **`public/favicon.svg` is missing.** [index.html:5](index.html#L5) links it, so browsers currently fall back to a default icon — add the file (an `OT` gradient tile matching the navbar logo would fit).
- **No Open Graph image.** `og:title` and `og:description` are set but there's no `og:image`, so link previews render as plain text. Add a 1200×630 PNG to `public/` and reference it.
- **Vite scaffolding leftovers.** `src/App.css` and `src/assets/` (`react.svg`, `vite.svg`, `hero.png`) are unused — nothing imports them. Deleting them is a no-op for the build.
- **Not yet a git repository.** Run `git init` when you're ready to version and deploy it.

---

© Oyetunji Taofeek Ololade. Content, copy, and images are the site owner's; the code is unlicensed — add a `LICENSE` file if you intend to open-source it.
