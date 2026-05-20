# docs/data — Data Files Reference

This directory holds the data files consumed by the site's visualization and booking pages.

---

## Files

### `days.json` — ✏️ Hand-authored itinerary data

The full day-by-day itinerary data. This repo currently does not include the old generator/source briefing files, so update this file directly and keep the summary mirrors in sync.

**Consumed by:** `visualizations/day-view.html` (fetched at runtime via `fetch('../data/days.json')`)

**Sync notes:** When changing a day, also check `data/day-meta.json`, `index.html`, `visual-schedule.html`, and visualization summary pages for duplicated labels or summaries.

**Drift check:** After itinerary edits, run:

```bash
node -e "for (const f of ['data/days.json','data/routes.json','data/day-meta.json','data/bookings.json','data/city-guide-anchors.json']) JSON.parse(require('fs').readFileSync(f,'utf8')); console.log('JSON OK')"
```

For city-guide anchor or link behavior changes, run:

```bash
node scripts/validate-city-guide-links.js
```

Then search for stale removed items and duplicated summaries in `index.html`, `visual-schedule.html`, `visualizations/webgl-timeline.html`, and `transit-guide.html`.

Because the site uses a cache-first service worker for static assets and JSON data, bump `CACHE_NAME` in `sw.js` whenever data files, guide-link behavior, or cached HTML pages change.

---

### `routes.json` — ✏️ Hand-authored route planning data

Provides high-level route visuals for the trip route viewer. This file covers Days 2–10; Day 1 is intentionally omitted because it is the arrival day and does not need a route visual.

**Consumed by:** `visualizations/route-view.html` (fetched at runtime via `fetch('../data/routes.json')`)

**Planning notes:** Use this data for broad planning context, grouped stops, and route links. It is not a turn-by-turn map or live navigation source.

---

### `city-guide-anchors.json` — ✏️ Hand-authored city-guide link terms

Maps itinerary terms to deep-link IDs in `city-guide.html`. Values can be a simple display string or an object with aliases and optional broad-link suppression metadata:

```json
{
  "share-lounge": {
    "name": "SHARE LOUNGE",
    "aliases": ["TSUTAYA Shibuya Sakura Stage", "Shibuya Sakura Stage"]
  },
  "shibuya": {
    "name": "Shibuya",
    "broad": true,
    "suppressedBy": ["share-lounge", "shibuya-sky", "shibuya-crossing"]
  }
}
```

Use `suppressedBy` for broad neighborhood anchors so day pages prefer specific visit targets when both appear on the same day. Anchor names and aliases must be unique case-insensitively, and every top-level key must match an `id` in `city-guide.html`.

---

### `day-meta.json` — ✏️ Hand-authored narrative fields

Provides a reference mirror of narrative and operational fields for each day.

**Consumed by:** Maintainers as a summary source; keep it aligned with `days.json` by `dayNumber`.

**Schema — all fields per day entry:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `dayNumber` | number | ✅ | Day index (1–10); must match the corresponding day in `days.json` |
| `date` | string | ✅ | Human-readable date (e.g. `"Mon May 26"`) |
| `startCityClass` | string | ✅ | CSS class for city chip: `city-tokyo`, `city-kyoto`, or `city-osaka` |
| `endCityClass` | string | ✅ | CSS class for destination city chip (same values) |
| `morning` | string | ✅ | Narrative paragraph for the morning section of the day view |
| `daytime` | string | ✅ | Narrative paragraph for the afternoon/daytime section |
| `night` | string | ✅ | Narrative paragraph for the evening section |
| `details` | string[] | ✅ | Array of bullet strings shown in the day detail panel |
| `note` | string | ✅ | Short italicized contextual note shown below the day title |
| `brief.today` | string | ✅ | One-line summary for today (shown in the status widget) |
| `brief.next` | string | ✅ | One-line "next up" note |
| `brief.backup` | string | ✅ | Rainy-day / backup plan |
| `brief.ops` | string | ✅ | Operational notes: booking refs, transport, timing |
| `transfer` | string | — | Transfer description shown in transit summary (empty string if no transfer) |
| `splitDay` | boolean | — | Set `true` if the party may split up; shows indicator on day view |
| `splitNote` | string | — | Text shown alongside the split indicator |
| `deadline` | string | — | Date/time of any upcoming deadline or cutoff |

---

### `bookings.json` — ✏️ Hand-authored bookings data

Drives the `bookings-status.html` page.  
Also included in the service worker precache for offline access.

**Consumed by:** `bookings-status.html` (fetched at runtime)

**Top-level structure:**
```json
{
  "hotels": [...],
  "flights": [...],
  "trains": [...],
  "dining": [...],
  "attractions": [...]
}
```

Each item has: `name`, `dates`, `status`, `details` (object of key/value pairs).

**Status values:** `confirmed` | `pending` | `critical` | `considering` | `sold-out` | `closed` | `walk-up`

---

## Canonical Hotel Names

Use these exact names consistently across all data files:

| Property | Canonical Name |
|----------|---------------|
| Tokyo (Leg 1) | Keio Plaza Hotel Shinjuku |
| Kyoto (Leg 2) | Cross Hotel Kyoto Kawaramachi |
| Osaka (Leg 3) | Cross Hotel Osaka Dotonbori |
