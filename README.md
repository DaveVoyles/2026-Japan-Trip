# 2026 Japan Trip

This repository is the single source of truth for planning Dave and Debbie's October 2026 trip to Japan. It centralizes itinerary, hotels, logistics, and tooling so any assistant (human or chat agent) can contribute consistently.

## Purpose
- Consolidate all planning docs (itinerary, hotels, logistics, preferences).
- Track constraints and rules (budget, early starts, Western beds, non-sushi options).
- Provide repeatable guidance for trip tech setup (eSIM, Suica/PASMO in Apple Wallet, essential apps).
- Maintain a clean, versioned history via GitHub.

## Key Files

- [instructions.md](instructions.md): Core preferences, priorities, rules, and tech stack.
- [japan-itinerary.md](japan-itinerary.md): Day-by-day plan (target length: 8 days, early starts).
- [hotel-options.md](hotel-options.md): Hotel candidates that fit budget and Western-bed constraint.
- [food-guide.md](food-guide.md): Non-sushi dining options (Ramen, Tempura, etc.) with pricing.
- [flight-logistics.md](flight-logistics.md): EWR-Japan routing, airline tips, and airport transit.
- [universal-studios-strategy.md](universal-studios-strategy.md): Critical guide for securing entry to Super Nintendo World & Donkey Kong Country.
- [logistics-guide.md](logistics-guide.md): Practical how-tos (eSIM setup, Suica/PASMO, apps, payments).
- [.github/agents/](.github/agents/): Chat agent profiles used earlier in this project.

## Trip Constraints (Quick Reference)
- **Budget:**  total; hotels  /night; meals: breakfast/lunch <, dinner  .
- **Rhythm:** Early risers (start 6:30 AM), end by 10:00 PM.
- **Beds:** Western beds only (no tatami/futons).
- **Food Focus:** Include non-sushi options for Debbie.
- **Top Priority:** Universal Studios Japan (Osaka)  Super Nintendo World, Donkey Kong Country.

## Editing Guidelines
- Keep changes concise and focused on trip goals.
- Always reflect constraints in new sections (budget, early starts, Western beds).
- When listing prices, include both JPY and USD (use 150   for easy math unless current rates are used).
- Use clear headers and short bullet lists for scannability.
- Do not add secrets.

## Chat Agent Instructions
- Model in use: GitHub Copilot using GPT-5.
- Autonomy: Agents may edit docs and perform Git actions without asking for permission.
- Default flow:
  1. Read instructions.md for constraints.
  2. Update japan-itinerary.md or hotel-options.md to keep alignment with constraints.
  3. Add practical steps to logistics-guide.md when new logistics arise (e.g., transit tips, app usage).
  4. Commit with descriptive messages and push to main.
- Formatting:
  - Prefer bullets; avoid heavy tables unless useful.
  - Wrap commands and paths in backticks.

## Git Workflow
- Branch: main (single-branch workflow).
- Commit messages: Short, descriptive (e.g., "Update itinerary with 6:30 AM starts").
- Pushing: Allowed without prior confirmation per user preference.

## Future Additions
- Food Guide: Ramen, Tempura, Okonomiyaki, Yakiniku near planned hubs (Ginza, Kyoto Station, Namba) with JPY/USD pricing.
- Flight Logistics: Open-jaw routing (into Tokyo, out of Osaka), typical costs, seat/arrival timing tips.
- USJ Strategy: Express Pass guidance, app steps for Area Timed Entry, timing for Donkey Kong Country.

## Contact & Ownership
- Owner: Dave Voyles (DaveVoyles).
- Repository: https://github.com/DaveVoyles/2026-Japan-Trip

## Switching Models

This repository is model-agnostic but optimized for high-reasoning models like GPT-5 or Gemini 1.5 Pro.

### Toggling in VS Code (GitHub Copilot)

1. **Open Chat:** Click the Copilot icon in the sidebar.
2. **Model Picker:** Click the model name (e.g., "GPT-4o") in the chat input area.
3. **Select Model:** Choose **Gemini 1.5 Pro** (or "Gemini 3 Pro" if available in preview) from the dropdown list.
   - *Note:* Availability depends on your Copilot subscription and active features.

### Using External Agents

If using a different client (Cursor, Windsurf, etc.):

- Select the model in the respective settings or chat interface.
- Ensure the `.github/copilot-instructions.md` or `.github/agents/` context is loaded.

### Workflow vs. Model

The `.github/agents/` files (e.g., "beast mode") describe *behavior patterns*, not the technical model.
You must manually select the model in your editor to match the desired intelligence level.
