# 2026 Japan Trip Site

Interactive travel guide and day-by-day itinerary site for Dave & Debbie's May 24–June 3, 2026 trip to Tokyo, Kyoto, and Osaka. Hosted on GitHub Pages.

> The old `DaveVoyles/2026-Japan-Trip` repo has been archived and is no longer used. This repo is the source of truth.

## Live Site

```
https://davevoyles.github.io/2026-Japan-Trip-site/
```

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page — 10 day cards with search, links to all sections |
| `visualizations/day-view.html` | Main day-by-day itinerary viewer (data-driven) |
| `visualizations/day-01.html` … `day-10.html` | Per-day static detail pages |
| `visual-schedule.html` | Visual schedule and route overview |
| `bookings-status.html` | Booking tracker (hotels, flights, trains, dining, attractions) |
| `city-guide.html` | City guides for Tokyo, Kyoto, and Osaka |
| `transit-guide.html` | Transit and transportation info (trains, IC cards, airports) |
| `neighborhood-guide-tokyo.html` | Tokyo neighborhood guide |
| `neighborhood-guide-kyoto.html` | Kyoto neighborhood guide |
| `neighborhood-guide-osaka.html` | Osaka neighborhood guide |
| `essential-apps.html` | Recommended apps and pre-departure setup checklist |
| `offline.html` | Offline fallback page (served by service worker) |

---

## Architecture

### Tech Stack

- **Vanilla HTML/CSS/JS** — no frameworks or build tools required
- **Shared component system** via injected scripts:
  - `assets/scripts/site-nav.js` — injects the shared top nav into every page
  - `assets/scripts/theme.js` — handles light/dark theme switching
  - `assets/styles/theme.css` — CSS custom properties for colors/typography
  - `assets/styles/site-nav.css` — shared nav styles
- **PWA-ready**: `manifest.webmanifest` + `sw.js` service worker for offline caching
- **GitHub Pages** for hosting — pushing to `main` publishes automatically

### Data Model

Data lives in `data/` and is consumed by pages at runtime via `fetch()`.

| File | Authored | Consumed by | Description |
|------|----------|-------------|-------------|
| `data/days.json` | ✏️ Hand-authored | `visualizations/day-view.html` | Full day-by-day itinerary data |
| `data/day-meta.json` | ✏️ Hand-authored | Reference mirror for day summaries | Narrative fields (morning/afternoon/night summaries, notes, ops) |
| `data/bookings.json` | ✏️ Hand-authored | `bookings-status.html` | Hotels, flights, trains, dining, attractions with status |
| `data/city-guide-anchors.json` | ✏️ Hand-authored | `visualizations/day-view.html` | Deep-link anchors into city guide tabs |

> `days.json` is currently hand-maintained. Keep `data/day-meta.json` and hardcoded summary surfaces in sync when changing day narratives.

### Service Worker & Offline

`sw.js` precaches all core pages, visualization pages, data files, and assets. Once opened on Wi-Fi, the full site works offline — useful in-flight or in areas with poor connectivity. On mobile, use **Add to Home Screen** for app-like access.

---

## How to Publish

1. Edit files directly in this repo
2. Push to `main` — GitHub Pages publishes automatically within ~30 seconds

---

## Hotels

| Leg | Dates | Property |
|-----|-------|----------|
| Tokyo | May 25–29 | Keio Plaza Hotel Shinjuku |
| Kyoto | May 29–31 | Cross Hotel Kyoto Kawaramachi |
| Osaka | May 31–Jun 2 | Cross Hotel Osaka Dotonbori |
| Tokyo final night | Jun 2–3 | Shinagawa Prince Hotel |
