// Central place for site-wide constants.
// TODO: Replace these placeholders with Mufti Saad's real details before launch.

// The inquiry forms ("Ask Mufti Saad" and "Contact") open the visitor's email
// client addressed to this address. Update it to the real inbox.
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@muftisaadhaque.com";

export const SITE_NAME = "Mufti Saad Haque";
export const SITE_TITLE = "Director & Head Imam, Zakaria Islamic Academy";
export const LOCATION = "Northern Virginia";
export const ORG_NAME = "Zakaria Islamic Academy";

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/ask", label: "Ask Mufti Saad" },
  { href: "/classes", label: "Classes" },
  { href: "/counseling", label: "Counseling" },
  { href: "/hajj-umrah", label: "Hajj & Umrah" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
