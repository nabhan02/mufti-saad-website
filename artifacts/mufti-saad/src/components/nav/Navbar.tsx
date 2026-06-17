import { useState } from "react";
import { Link, useLocation } from "wouter";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        background: "oklch(20% 0.065 320 / 0.92)",
        borderBottom: "1px solid oklch(96% 0.015 85 / 0.1)",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          style={{ color: "var(--text-on-dark)" }}
        >
          <img
            src="/images/logo-mark.svg"
            alt=""
            width={36}
            height={36}
            className="object-contain shrink-0"
          />
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((link) => {
            const active = location === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium tracking-wide transition-colors duration-200"
                  style={{
                    color: active
                      ? "var(--gold-accent)"
                      : "oklch(86% 0.023 320)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation"
          aria-expanded={open}
          style={{ color: "var(--text-on-dark)" }}
        >
          <span
            className="block h-0.5 w-6 rounded transition-transform duration-300"
            style={{
              background: "currentColor",
              transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block h-0.5 w-6 rounded transition-opacity duration-300"
            style={{ background: "currentColor", opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-6 rounded transition-transform duration-300"
            style={{
              background: "currentColor",
              transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden px-6 pb-6"
          style={{ background: "oklch(20% 0.065 320 / 0.98)" }}
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const active = location === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium py-2"
                    style={{
                      color: active
                        ? "var(--gold-accent)"
                        : "oklch(86% 0.023 320)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
