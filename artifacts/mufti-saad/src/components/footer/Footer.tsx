import { Link } from "wouter";
import { SocialIcons } from "./SocialIcons";
import {
  CONTACT_EMAIL,
  LOCATION,
  ORG_NAME,
  SITE_NAME,
} from "@/lib/site";

const QUICK_LINKS = [
  { href: "/about", label: "About" },
  { href: "/ask", label: "Ask Mufti Saad" },
  { href: "/classes", label: "Classes & Education" },
  { href: "/counseling", label: "Counseling & Nikah" },
  { href: "/hajj-umrah", label: "Hajj & Umrah" },
  { href: "/islamic-finance", label: "Islamic Finance" },
  { href: "/fundraising", label: "Fundraising" },
];

export function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{
        background:
          "linear-gradient(180deg, oklch(28.0% 0.1 231), oklch(20.0% 0.085 232))",
        color: "var(--text-on-dark)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {SITE_NAME}
            </h3>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--text-muted-on-dark)" }}
            >
              Scholar, Imam, and Mufti — serving the community through authentic
              Islamic education, religious guidance, and compassionate
              counsel at {ORG_NAME} in {LOCATION}.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-70">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-100"
                    style={{ color: "var(--text-muted-on-dark)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-70">
              Get in Touch
            </h4>
            <p
              className="text-sm mb-3"
              style={{ color: "var(--text-muted-on-dark)" }}
            >
              For questions or inquiries, please email:
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm underline underline-offset-4 decoration-1 transition-opacity hover:opacity-80 block mb-6 break-all"
              style={{ color: "var(--gold-accent)" }}
            >
              {CONTACT_EMAIL}
            </a>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-70">
              Follow
            </h4>
            <SocialIcons />
          </div>
        </div>

        <div
          className="mt-16 pt-8 text-center text-xs"
          style={{
            borderTop: "1px solid oklch(96% 0.015 85 / 0.1)",
            color: "var(--text-muted-on-dark)",
          }}
        >
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
