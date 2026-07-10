import { Button } from "@/components/ui/Button";

const HELPS = [
  "Halal, riba-free home financing",
  "Vehicle financing",
  "Commercial & business property",
  "Halal savings & investment accounts",
  "Refinancing an existing mortgage",
  "Everyday Islamic finance questions",
];

export function IslamicFinance() {
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
              Resident Scholar — University Islamic Financial (myuif.com) · Since 2024
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--text-on-dark)" }}
            >
              As Resident Scholar for UIF, Mufti Saad provides nationwide
              guidance on Islamic financing solutions — helping American Muslims
              achieve homeownership and meet their financial needs in a
              Shariah-compliant, riba-free way.
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
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
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
                Whether you&apos;re buying your first home, financing a vehicle
                or commercial property, or looking to save and invest without
                riba, Mufti Saad helps you do it the halal way — with clear,
                practical, Shariah-compliant guidance every step of the way.
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
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
