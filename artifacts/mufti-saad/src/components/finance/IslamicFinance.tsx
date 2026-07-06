import { Button } from "@/components/ui/Button";

const SERVICES = [
  {
    title: "Shariah-Compliant Home Financing",
    tag: "Riba-free homeownership",
    description:
      "Achieve homeownership through Islamically structured, riba-free financing. Mufti Saad helps families navigate the process with clarity and confidence.",
    features: [
      "Riba-free financing structures",
      "Guidance for first-time buyers",
      "A faith-aligned path to ownership",
      "Clear, step-by-step support",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12 11.204 3.045c.433-.434 1.16-.434 1.592 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    title: "Islamic Financial Solutions",
    tag: "Halal alternatives",
    description:
      "Beyond home financing, explore Shariah-compliant options for your broader financial needs — grounded in authentic Islamic principles and free of interest.",
    features: [
      "Halal financing alternatives",
      "Avoiding riba in transactions",
      "Compliant everyday solutions",
      "Backed by University Islamic Financial",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Financial Consultation",
    tag: "One-on-one guidance",
    description:
      "Personalized guidance that connects faith-based financial ethics with real-world decisions, helping individuals and families plan with confidence.",
    features: [
      "Personalized consultation",
      "Islamic finance education",
      "An ethics-first approach",
      "Practical, contextual advice",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
        />
      </svg>
    ),
  },
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
                "linear-gradient(135deg, oklch(31% 0.086 218) 0%, oklch(21% 0.068 210) 100%)",
              boxShadow: "0 8px 40px oklch(20% 0.046 214 / 0.18)",
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

      {/* Service cards */}
      <section
        className="py-12 md:py-20 pb-24 md:pb-32"
        style={{ background: "var(--surface-light)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{
                  background: "var(--surface-card)",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 4px 24px oklch(25% 0.046 214 / 0.06)",
                }}
              >
                <div
                  className="h-2"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--navy), var(--navy-soft))",
                  }}
                />
                <div className="p-8 flex-1 flex flex-col">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: "var(--navy)",
                      color: "var(--gold-accent)",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: "var(--blue-accent)" }}
                  >
                    {service.tag}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <svg
                          className="w-4 h-4 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          style={{ color: "var(--blue-accent)" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span style={{ color: "var(--text-secondary)" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button href="/contact" variant="link">
                    Request a Consultation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
