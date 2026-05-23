- 2026-05-21: Fixed Visual Planner nav link to point to visual-schedule.html (all 10 days) instead of day-view.html (single day)
- 2026-05-21: Added trip hero (Duration/Dates/Cities) and day-filter search bar to visual planner; removed nav-page quick links from search since they're already in the site nav
- 2026-05-21: Made visual-schedule.html the home page (index.html now redirects); added cross-page search results (Bookings, Apps, City Guide, Transit Guide) to visual planner search bar
- 2026-05-21: Cleanup pass — deleted 3 unused files (2 WebGL experiments + day-meta.json), removed broken Day 9 link, purged stale marion-crepes anchor, updated nav freshness date
2026-05-21: Added detailed city guide cards for 9 considering attractions (Skytree, Tokyo Tower, Sumo Tour, Nijo Castle, Tea Ceremony, Tsutenkaku, Abeno Harukas 300, Dotonbori Food Tour, Osaka Castle Klook update); removed Kawaguchiko (not in itinerary).
- 2026-05-22: Added 🚇 Transit card section to day-view.html; added transit arrays with Google Maps transit direction links to Days 1–7, 9–10 in days.json.
- 2026-05-22: Added emojis to morning/daytime/night and all timeline entries across all 10 days in days.json for better visual scannability.
- 2026-05-22: Added emojis to routes.json stop labels and segment headers across all 9 route days so route-view.html matches the emoji style of day-view.html.
- 2026-05-22: Replaced all neighborhood Google Maps links with YouTube 4K walking tour videos across tokyo/kyoto/osaka neighborhood guides and city-guide.html hood-card names
2026-05-20: Replaced all Google Maps sub-item attraction links with YouTube videos across city-guide.html, neighborhood-guide-tokyo.html, neighborhood-guide-kyoto.html, and neighborhood-guide-osaka.html. Every named attraction in hood-bullets and highlight lists now links to a verified 4K YouTube video.
- 2026-05-22: Added plain-English parenthetical clarifiers to ~40 Japanese proper nouns and cultural terms across all three neighborhood guides (Tokyo, Kyoto, Osaka)
- 2026-05-22: Completed all 6 app improvements: SW cache fix, countdown/today detection, Japanese phrases page, print itinerary, packing checklist, trip overview map — all committed and pushed (f233d21)
- 2026-05-23: Pre-trip polish: fixed bookings.json UA131 times + SNAP window, added Day 8 transit entries, filled Day 10 morning timeline, added Today's Bookings confirmation card to day-view.html
- 2026-05-23: Round 3 pre-departure polish: bumped SW cache version, fixed Day 3 timeline gap, added Day 9 checkout + last lunch, corrected Day 10 checkout from 12 PM to 11 AM
- 2026-05-23: Round 4 polish: filled evening timeline gaps on Days 2/3/4, expanded Day 3 and Day 10 ops details, added Day 9 nav links, bumped SW cache to v20260524000000
- 2026-05-23: Round 5: added Dinner TBD entries for Days 5 and 6 (Kyoto nights), expanded Day 5 details (SmartEX, ekiben, luggage), expanded Day 7 details (Fushimi Inari tip, hotel walk)
- 2026-05-23: Round 6: fixed 28 camelCase Google Maps nav URLs to proper ?q= format, updated nav freshness to May 23, bumped SW cache to v20260524180000
- 2026-05-23: Round 7: fixed Day 3 ops wrong transit line, added 4 missing nav links (CAPPINESS/Kanda Myojin/Gion/Kyoto-Kawaramachi), expanded Day 8 ops, bumped SW cache to v20260524200000
- 2026-05-23: Round 8: added Japanese hotel addresses to check-in days (taxi show-card), fixed Keio/Cross Kyoto missing check-in times, corrected UA130 class, added keyPhrases to Days 1/2/10, bumped SW cache
- 2026-05-23: Round 9 final pass: added Day 1 optional evening walk, Day 9 dinner TBD, Days 3/4 3rd keyPhrase — all 10 days now have 3 phrases and evening coverage
