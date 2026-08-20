# Total Vibe Salon & Studios — Website Project Brief

Reference doc for building this site with Claude Code. Kept in the repo root so it has context in every session.

## 1. Business Overview

Total Vibe Salon & Studios is a multi-use beauty & relaxation building housing multiple independent service providers under one roof/brand.

**Owner:** Kristin Stone — performs Lash Extensions and Hair services herself, alongside other stylists at the salon (Lash and Hair are team services, not solo-provider).

**Current services (live at launch):**

| Service | Provider | Booking |
|---|---|---|
| Lash Extensions | Total Vibe lash team (Kristin Stone & Lilly Lopez) | Square (separate links per stylist) |
| Full Service Hair Salon | Total Vibe stylist team (Kristin Stone & Lilly Lopez) | Square (separate links per stylist) |
| Waxing | Lilly Lopez | Square |

**Planned / future services** (pages built now, launched as "coming soon" until ready):

| Service | Provider | Booking |
|---|---|---|
| Massage | TBD provider | Link out to their own system |
| Yoga | Peak Mobility Yoga (owner's wife's business) | Link out to their own system |

Each provider runs their own booking — only Lash + Hair integrate with Square directly; every other provider gets a clearly labeled "Book with [Provider]" button that links out to whatever platform they use.

## 2. Brand Palette

Pulled directly from the logo (Logo.jpg):

| Color | Hex | Use |
|---|---|---|
| Blush Pink | `#FBDCE2` | Primary background |
| Charcoal Black | `#1A1613` | Headings, logo linework, primary text |
| White | `#FFFFFF` | Cards, contrast sections |
| Soft Cream | `#FDF6F3` | Alternate section background |

Typography: elegant serif ("Total") + flowing script ("Vibe") + wide-tracked small-caps sans ("SALON").

- Headings: Playfair Display
- Body: Inter
- Script accent: Parisienne
- Small-caps letter-spaced labels for section eyebrows/tags

## 3. Contact & Social

- Phone: (803) 646-5896
- Email: totalvibesalon@gmail.com
- Instagram: [@total.vibe.salon](https://www.instagram.com/total.vibe.salon/)
- TikTok: [@totalvibesalon](https://www.tiktok.com/@totalvibesalon)
- Facebook: Total Vibe Salon

## 4. Tech Stack

Plain HTML/CSS/JS — no framework, no build step. Vanilla JS only for the mobile nav toggle.

```
/
├── index.html
├── about.html
├── contact.html
├── services/
│   ├── lash-extensions.html
│   ├── hair-salon.html
│   ├── waxing.html
│   ├── massage.html
│   └── yoga.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
└── PROJECT_BRIEF.md
```

## 5. Site Structure

Nav: Home / About / Services (dropdown: each service) / Contact — consistent header + footer across all pages with social links, phone, and email.

## 6. Booking Integration Notes

- Lash and Hair pages let visitors pick a stylist (Kristin or Lilly) and book directly with them. Kristin's card has a `.square-embed-slot` placeholder, marked with a setup note — replace it with her real Square Appointments embed snippet (Square Dashboard → Appointments → Online Booking → Share → Embed) once available; call/email fallback buttons are live in the meantime. Lilly's card links straight to her own Square booking page.
- Waxing is Lilly Lopez's page, booked through her Square link.
- Massage ships as a "Coming Soon — join our list" page with a `mailto:` fallback, since no provider is confirmed yet.
- Yoga links out externally to Peak Mobility Yoga.

## 7. Open Items to Confirm Later

- [ ] Kristin's Square Appointments embed code/site ID for the Lash and Hair pages (currently a placeholder slot; Lilly's Square link is already live)
- [ ] Booking platform for Massage once a provider is hired
- [ ] Exact Facebook page URL for Total Vibe Salon (footer/contact currently link to a Facebook search for "Total Vibe Salon" rather than a guessed URL)
- [ ] Photography for hero + service pages (currently text/color-only, no imagery)

## Resolved during build

- **Address:** 1510 Whiskey Rd, Aiken, SC — used for the Contact page map embed (confirmed via Peak Mobility Yoga, which operates inside this same building).
- **Yoga provider:** Peak Mobility Yoga — name, external site (peakmobilityyoga.com), and Instagram confirmed and linked from the Yoga service page.
- **Real logo file:** `assets/images/logo.jpg` (original, cleaned) and `assets/images/logo.png` (transparent cutout, used site-wide in the header/favicon) — sourced from the client's `Logo.jpg`, with the stray cropped text in the bottom-left and bottom-right corners removed. The footer keeps a text-based wordmark since the logo's black linework has poor contrast on the dark charcoal footer background.
- **Owner name spelling:** corrected "Kristen" → "Kristin" (Stone) everywhere.
- **Lash/Hair attribution:** Lash Extensions and Hair Salon are performed by multiple stylists at Total Vibe, not exclusively the owner — the Lash and Hair service pages, and the matching cards on the home page, now credit "our lash artists" / "our stylists" / "Total Vibe Team" instead of naming Kristin as the sole provider. Her name stays on the About page, where she's introduced personally as the owner.
- **Botanical Smoothing → Waxing:** the placeholder "Botanical Smoothing" service was actually the same treatment Lilly Lopez calls Waxing, so the standalone page and all nav/footer/home references were removed in favor of the real `services/waxing.html` page.
- **Second stylist added:** Lilly Lopez (Master Cosmetologist & Lash Artist) joined the Lash Extensions and Hair Salon pages alongside Kristin Stone, each with their own booking method — Lilly's own Square link, Kristin's Square embed pending. Lilly also has her own Waxing page.
