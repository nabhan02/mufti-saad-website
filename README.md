# Mufti Saad Haque — Website

Personal website for Mufti Saad Haque — scholar, Imam, and Mufti. Built with
Next.js (App Router), React, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before going live — things to replace

A few placeholders should be updated with real details:

- **Contact email** — set in `src/lib/site.ts` (`CONTACT_EMAIL`). The inquiry
  forms ("Ask Mufti Saad" and "Contact") open the visitor's email client
  addressed to this address.
- **Photograph** — the hero currently shows a monogram medallion. Drop a real
  portrait into `public/images/` and wire it into `src/components/hero/Hero.tsx`
  if/when one is available.
- **Social links** — placeholder `#` links in
  `src/components/footer/SocialIcons.tsx`.
- **Location / org details** — `src/lib/site.ts`.

## Structure

- `src/app/*` — routes (Home, About, Ask Mufti Saad, Classes, Counseling,
  Hajj & Umrah, Community & Services, Contact).
- `src/components/*` — UI components grouped by area.
- `src/lib/site.ts` — shared site constants (email, location, nav links).
- `src/app/globals.css` — design tokens (cream + dark-blue palette).
