# 2026 Japan Trip

This repository is the single source of truth for planning Dave and Debbie's October 2026 trip to Japan. It centralizes itinerary, hotels, logistics, and tooling so any assistant (human or chat agent) can contribute consistently.

## Purpose
- Consolidate all planning docs (itinerary, hotels, logistics, preferences).
- Track constraints and rules (budget, early starts, Western beds, non-sushi options).
- Provide repeatable guidance for trip tech setup (eSIM, Suica/PASMO in Apple Wallet, essential apps).
- Maintain a clean, versioned history via GitHub.

## Key Files
- instructions.md: Core preferences, priorities, rules, and tech stack.
- japan-itinerary.md: Day-by-day plan (target length: 8 days, early starts).
- hotel-options.md: Hotel candidates that fit budget and Western-bed constraint.
- logistics-guide.md: Practical how-tos (eSIM setup, Suica/PASMO, apps, payments).
- .github/agents/: Chat agent profiles used earlier in this project.

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

## Agent Model Selection (Important)
The repos workflow/profile labels (e.g., "gemini-pro-3-preview-beast mode") describe behavior patterns, not the actual LLM bound in your editor. Model selection is controlled by the host app/extension (e.g., GitHub Copilot in VS Code), not by files in this repo.

### How to actually use Gemini 3 Pro
- **Option A: VS Code extension that supports Gemini:** Install an extension that lets you choose Gemini as the backend and sign in with Google AI Studio credentials.
- **Option B: OpenRouter or similar router:** Configure Copilot/another chat client to route to Gemini via OpenRouter, then select the Gemini model.
- **Option C: MCP server:** Stand up a Model Context Protocol server that uses Gemini and connect it to an MCP-capable client; select the server/model at runtime.

Until one of these is configured, this workspace runs under GitHub Copilot (GPT-5). The .github/agents/ files are guidance templates; they do not switch the underlying model on their own.
