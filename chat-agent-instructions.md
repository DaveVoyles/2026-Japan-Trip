# Chat Agent Instructions & Trip Context

**ATTENTION AGENTS:** This file is your primary source of truth for trip preferences, constraints, and planning rules.
Read this file completely before generating any content or making edits.

**CRITICAL WORKFLOW RULE:**
- **Git Automation:** The user **AUTO-APPROVES** all git commands.
- **Action:** When making changes to files, ALWAYS automatically stage, commit, and push the changes to GitHub immediately.
- **Do NOT ask for permission.** Just do it.
- **Linting:** After EVERY update, check `.markdownlint.json` and fix any linting errors (line length, headers, lists)
  before committing.

## Travelers & Interests

- **Dave:**
  - Gaming (Retro, Arcades, VR)
  - Foxes (Statues/Shrines or Real)
  - Temples & Shrines
  - Sushi
- **Debbie:**
  - Flowers / Gardens
  - Baked Goods / Pastries / Sweets
  - Food (Non-Sushi: Ramen, Tempura, Okonomiyaki, Yakiniku, etc.)
  - Shopping (Stationery, Cute items, Cosmetics)

## Top Priorities

- **Universal Studios Japan (Osaka):** Super Nintendo World.
  - **Specific Focus:** Donkey Kong Country.

## Trip Focus

- **Dates:** October 2026 (Targeting mid-October for weather/flowers).
- **Style:** "Together & Apart" - Shared mornings/evenings, split afternoons for specific hobbies.
- **Pace:** Moderate. Padding included for travel/rest.

## Planning Rules

1. **Currency:** ALWAYS list prices in both Japanese Yen (JPY) and US Dollars (USD).
   Use a conservative exchange rate (e.g., 150 JPY = $1 USD for easy math, or current rates).
2. **Food:** Ensure dining options include non-sushi choices for Debbie.
3. **Locations:** Prioritize "Hub" locations for hotels to minimize travel friction during split activities.
4. **Recommendation Format:** For EVERY recommendation (hotel, restaurant, activity), provide a table with these columns:

   | Est Cost | URL | Details | Availability | English Friendly |
   | :--- | :--- | :--- | :--- | :--- |
   | $-$$$$ | [Website](url) | 1-2 sentences on why we should care. | e.g., "Book 3 months ahead" or "Walk-in" | High/Med/Low |

## Logistics & Preferences

- **Budget:** Mid-High Tier ($10-15k Total Trip).
  - **Hotels:** Max $350 USD/night.
  - **Food:** Breakfast/Lunch <$50 USD; Dinner up to $150 USD.
- **Daily Rhythm:** Early Risers (6:30 AM start to beat crowds). End day by 10:00 PM.
- **Walking Tolerance:** High (6-8 miles/day). Happy to use public transit.
- **Accommodation Style:** Western beds ONLY. No Tatami mats.
- **Language:** English ONLY. Assume no Japanese speaking or reading ability.
- **Connectivity:** eSIM (Primary for iPhone 15).

## Tech Stack

- **Devices:** iPhone 15 (x2) - eSIM Compatible.
- **Connectivity:** eSIM (Recommended: Ubigi or Airalo). Pocket Wi-Fi as backup only.
- **Navigation:** Google Maps (Primary preference), Japan Travel by Navitime (Train routes/Platforms).
- **Translation:** Google Translate (Camera for menus), DeepL (Text).
- **Theme Parks:** Universal Studios Japan App (Essential for Nintendo World timed entry).
- **Payment:**
  - **Transit:** Suica / PASMO (Add directly to Apple Wallet).
  - **Cash:** USD (convert to Yen).
  - **Cards:** Apple Wallet, US Credit Cards.
  - **Other:** PayPal, Venmo, Google Pay.
