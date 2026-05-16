# 2026 Japan Trip Visualizations

> ⚠️ **DO NOT EDIT THIS REPO DIRECTLY.**
>
> This repository is the **auto-published deploy target** for the trip site. All content is
> force-pushed here by a GitHub Actions workflow from the private source repo
> (`DaveVoyles/2026-Japan-Trip`). Any changes made directly here **will be overwritten**
> on the next workflow run.
>
> **To update the site:** edit files under `docs/` in `DaveVoyles/2026-Japan-Trip` and push to `main`.

## Live Site

```
https://davevoyles.github.io/2026-Japan-Trip-site/
```

## Structure

- `index.html` — Landing page with all 10 day cards
- `visualizations/` — Individual day visualization pages
- `bookings-status.html` — Booking confirmation tracker
- `data/` — JSON data files generated from source markdown at publish time

## How Publishing Works

1. Edit `docs/` in the private `DaveVoyles/2026-Japan-Trip` repo
2. Push to `main` — the `publish-trip-site.yml` workflow triggers automatically
3. The workflow mirrors `docs/` here via force-push (~10 seconds)
4. GitHub Pages serves this repo at the live site URL

## Offline / PWA

Open the site once on Wi-Fi before departure to cache trip pages for offline use.
On mobile, use **Add to Home Screen** for faster access.
External links (Google Maps, etc.) still require data.
