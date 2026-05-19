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
node -e "for (const f of ['data/days.json','data/day-meta.json','data/bookings.json','data/city-guide-anchors.json']) JSON.parse(require('fs').readFileSync(f,'utf8')); console.log('JSON OK')"
```

Then search for stale removed items and duplicated summaries in `index.html`, `visual-schedule.html`, `visualizations/webgl-timeline.html`, and `transit-guide.html`.

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
