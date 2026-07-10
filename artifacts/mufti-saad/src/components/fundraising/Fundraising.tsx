import { Button } from "@/components/ui/Button";

const HELPS = [
  "Fundraising khutbahs & appeals",
  "Live event & banquet hosting",
  "Partners: Human Appeal, LIFE, MWL, HHRD",
  "Food security & emergency relief",
  "Orphan care & sponsorship",
  "Education & community projects",
];

export function Fundraising() {
  return (
    <>
      {/* Charity partnership banner */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div
            className="rounded-2xl p-8 md:p-10 text-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(35.0% 0.135 230) 0%, oklch(29.5% 0.129 230) 100%)",
              boxShadow: "0 8px 40px oklch(14.0% 0.074 230 / 0.18)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: "var(--gold-accent)" }}
            >
              Khateeb & Fundraiser — Partnering with Leading Charities Since 2022
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--text-on-dark)" }}
            >
              Mufti Saad serves as a Khateeb and fundraiser for Human Appeal
              (humanappealusa.org), LIFE for All (lifeusa.org), Muslim World
              League (mwlimits.org), and HHRD (hhrd.org) — helping raise
              millions of dollars for communities in need around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Consolidated "how I can help" section */}
      <section
        className="py-12 md:py-20 pb-24 md:pb-32"
        style={{ background: "var(--surface-light)" }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "var(--surface-card)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 8px 40px oklch(19.0% 0.074 230 / 0.08)",
            }}
          >
            <div
              className="h-2"
              style={{
                background:
                  "linear-gradient(90deg, var(--navy), var(--navy-soft))",
              }}
            />
            <div className="p-8 md:p-12">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                style={{ background: "var(--navy)", color: "var(--gold-accent)" }}
              >
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                How Mufti Saad Can Help
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Mufti Saad delivers powerful, Qur&apos;an-rooted fundraising
                appeals and khutbahs for masajid, banquets, and organizations
                nationwide — moving audiences to give generously and partnering
                with leading charities to raise support for those most in need,
                from food security and orphan care to emergency relief.
              </p>

              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 mb-10">
                {HELPS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-5 h-5 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      style={{ color: "var(--blue-accent)" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Button href="/contact" variant="primary" showArrow>
                Invite Mufti Saad
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
