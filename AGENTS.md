# Project notes for agents

Personal website for **Mufti Saad Haque** (scholar, Imam, Mufti). Next.js
App Router + React + Tailwind CSS v4 + TypeScript.

## Conventions

- Design tokens live in `src/app/globals.css` as CSS custom properties
  (cream + dark-blue palette). Reference them via `var(--token)` rather than
  hard-coding colors.
- Shared site constants (contact email, location, nav links) live in
  `src/lib/site.ts` — update there, not inline.
- Headings use the Playfair Display serif (`var(--font-playfair)`); body uses
  Inter (`var(--font-inter)`).
- Inquiry forms are backend-less: they compose a `mailto:` to `CONTACT_EMAIL`.
  Swap in a real form handler/API route when one is available.

## Next.js version

Pinned to Next.js 16.x. Check the installed version's behavior before relying
on framework APIs that may have changed between releases.
