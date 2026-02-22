#  Master Reservation Timeline

##  Critical Booking Dates (Set Alarms)

| Date (EST) | Time (EST) | Action Item | Target Date | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Mar 27, 2026** | **11:00 AM** | **Buy USJ Express Pass** | June 1 | [Instructions](../Reference/universal-studios-strategy.md) |
| **Apr 24, 2026** | **9:00 PM** | **Book Shibuya Sky** | May 25 | Sunset slot (18:00 - 19:00) |
| **Apr 28, 2026** | **11:00 PM** | **Book Shinkansen (Tokyo -> Kyoto)** | May 29 | SmartEx App. Request "View of Mt Fuji" (Seats E) |
| **May 1, 2026** | **12:00 PM** | **Book Pokemon Cafe** | May 26 | [Reservation Link](https://reserve.pokemon-cafe.jp/) (Extremely competitive) |
| **May 10, 2026** | **11:00 PM** | **Book Kichi Kichi Omurice** | May 30 | Via TableCheck (Release time varies, check site) |

---

##  Daily Calendar View

### Day 0: Sunday, May 24 (Travel)
- **11:35 AM:** Flight UA 131 departs EWR.

### Day 1: Monday, May 25 (Arrival)
- **01:35 PM:** Land at HND.
- **03:00 PM:** Limousine Bus to Keio Plaza.
- **06:00 PM:** Check-in.
- **07:30 PM:** Dinner at Omoide Yokocho (Walk-in).

### Day 2: Tuesday, May 26 (Tokyo)
- **Reservation:** Possible Pokemon Cafe slot?
- **Evening:** Shibuya Crossing & Sky (Sunset Reservation Needed).

### Day 3: Wednesday, May 27 (Tokyo)
- **Activity:** TeamLab Planets (Book 2 months out - Flexible).
- **Dinner:** High-end Sushi? (Book via TableCheck).

### Day 4: Thursday, May 28 (Tokyo)
- **Activity:** Free day / Ghibli Museum (Tickets: 10th of PRIOR month @ 10am JST).

### Day 5: Friday, May 29 (Travel -> Kyoto)
- **10:00 AM:** Shinkansen to Kyoto (Reserved Seat E).
- **01:00 PM:** Drop bags at Cross Hotel.
- **05:00 PM:** Dinner Reservation: Pontocho Alley (Many require booking).

### Day 6: Saturday, May 30 (Kyoto)
- **Reservation Target:** Kichi Kichi Omurice.
- **Alternative:** Kura Sushi (Use App to book table).

### Day 7: Sunday, May 31 (Travel -> Osaka)
- **Morning:** Fushimi Inari (No booking).
- **Evening:** Travel to Osaka.

### Day 8: Monday, June 1 (USJ)
- **07:00 AM:** Arrive USJ Gates.
- **10:00 AM:** Nintendo World Entry (Timed with Express Pass).

### Day 9: Tuesday, June 2 (Osaka -> Tokyo)
- **Morning:** Osaka Castle.
- **Evening:** Shinkansen to Tokyo.

### Day 10: Wednesday, June 3 (Departure)
- **05:45 PM:** Flight UA 130 Departs HND.

---

##  TripIt Integration Guide

### Option 1: The "Email Forwarding" Method (Simplest)
TripIt is built around email parsing. You do not need an API key.

1.  **Sign Up:** Create a free account at [TripIt.com](https://www.tripit.com/).
2.  **Forward:** Forward every confirmation email to `plans@tripit.com`.
    *   United Flight emails
    *   Hotel Confirmations (Keio Plaza, Cross Hotel)
    *   Klook Vouchers (USJ Express Pass)
    *   SmartEx Receipts
3.  **Result:** It automatically builds the timeline in the app.

### Option 2: Manual Import (For things without emails)
For activities like "Shibuya Sky" or "TeamLab" where the email might be in Japanese or not parseable:

1.  **Login:** Go to TripIt Website.
2.  **Add Plan:** Click "Add Plans" -> "Activity".
3.  **Paste Details:** Copy from this markdown file.

*Note: While a developer API exists, it requires OAuth 1.0 web authentication and is overkill for a single trip. The forward-to-email feature is their "Pro" feature for consumers and works 99% of the time.*

