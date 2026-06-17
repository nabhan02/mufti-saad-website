# Mufti Saad Haque Website

A professional website for Mufti Saad Haque — Scholar, Imam, and Mufti at Zakaria Islamic Academy in Northern Virginia.

## Run & Operate

- `pnpm --filter @workspace/mufti-saad run dev` — run the frontend (served at `/`)
- `pnpm run typecheck` — full typecheck across all packages
- Required env: none (purely frontend, no backend or database)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, wouter (routing)
- Fonts: Playfair Display (headings) + Inter (body) via Google Fonts

## Where things live

- `artifacts/mufti-saad/src/App.tsx` — routing + page composition
- `artifacts/mufti-saad/src/index.css` — brand CSS variables (plum/gold palette)
- `artifacts/mufti-saad/src/lib/site.ts` — site-wide constants (email, nav links)
- `artifacts/mufti-saad/src/components/` — all UI components by section
- `artifacts/mufti-saad/public/images/` — headshot.png, logo-mark.svg

## Architecture decisions

- Pure frontend — no API server or database needed; contact/inquiry forms use mailto links
- wouter used for routing (already in scaffold); all routes in `App.tsx`
- Brand colors use OKLCH color space (plum family + antique gold on warm cream)
- `next/link` and `next/image` replaced with wouter `Link` and standard `<img>` tags
- `VITE_CONTACT_EMAIL` env var overrides the default contact email

## Product

- Home page with hero (portrait + tagline), services overview, about teaser, CTA
- About page with full biography and credentials sidebar
- Ask Mufti page — inquiry form that opens visitor's email client
- Classes & Education, Counseling & Nikah, Hajj & Umrah, Islamic Finance, Fundraising pages
- Contact page with general inquiry form

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- `next` dependency is installed as a side effect of the copy script but is unused — it can be removed
- Do NOT put frontend code into `artifacts/api-server/`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
