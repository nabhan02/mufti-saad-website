export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "rshaque22@gmail.com";

export const CONTACT_PHONE = "(703) 640-8988";

export const SITE_NAME = "Mufti Saad Haque";
export const SITE_TITLE = "Director of Religious Affairs, Zakaria Islamic Academy";
export const LOCATION = "Northern Virginia";
export const ORG_NAME = "Zakaria Islamic Academy";

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/ask", label: "Ask Mufti" },
  { href: "/classes", label: "Classes" },
  { href: "/counseling", label: "Counseling" },
  { href: "/hajj-umrah", label: "Hajj & Umrah" },
  { href: "/islamic-finance", label: "Islamic Finance" },
  { href: "/fundraising", label: "Fundraising" },
  { href: "/contact", label: "Contact" },
] as const;
