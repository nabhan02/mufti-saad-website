import { Button } from "@/components/ui/Button";

const HELPS = [
  "Annual group Hajj packages",
  "Monthly Umrah groups (solo or family)",
  "On-ground scholarly mentorship",
  "Pre-journey preparation classes",
  "Full logistical coordination",
  "Guidance through every rite",
];

export function HajjUmrah() {
  return (
    <>
      {/* Partnership banner */}
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
              Director — Sara International Travel (sarainternationaltravel.com) · Since 2021
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--text-on-dark)" }}
            >
              As Director of Sara International Travel, Mufti Saad leads groups
              annually for Hajj and Umrah — pairing trusted logistical
              coordination with scholarly mentorship for a truly meaningful
              pilgrimage experience.
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
                    d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
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
                Mufti Saad personally leads group Hajj each year and Umrah
                groups throughout the year — whether you travel solo or with
                family. Every journey pairs full logistical coordination with
                scholarly mentorship, so you set out with knowledge and return
                with a renewed connection to Allah.
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
                Inquire About a Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
