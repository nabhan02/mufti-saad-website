import { Button } from "@/components/ui/Button";

const SERVICES = [
  {
    title: "Islamic Home Financing",
    tag: "University Islamic Financial (UIF)",
    description:
      "As a professional consultant with University Islamic Financial, Mufti Saad helps individuals and families navigate Shariah-compliant home financing — connecting faith-based financial ethics with practical needs.",
    features: [
      "Shariah-compliant home financing",
      "Guidance for families & first-time buyers",
      "Faith-centered financial ethics",
      "Practical, personalized support",
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
    title: "Humanitarian Relief",
    tag: "In Partnership with Human Appeal",
    description:
      "Mufti Saad partners with Human Appeal, a leading international charity, to support global humanitarian projects — raising funds and awareness for critical causes around the world.",
    features: [
      "Food security & emergency relief",
      "Orphan care & sponsorship",
      "Education initiatives",
      "Fundraising & awareness",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    title: "DMV Ulama Council",
    tag: "Founding Member",
    description:
      "A founding member of the DMV Ulama Council — a collective of scholars from the D.C., Maryland, and Virginia region — Mufti Saad contributes to unified scholarly guidance and inter-masjid cooperation.",
    features: [
      "Unified scholarly guidance",
      "Inter-masjid cooperation",
      "Addressing community concerns",
      "Regional religious leadership",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <>
      {/* Intro banner */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div
            className="rounded-2xl p-8 md:p-10 text-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(38% 0.085 260), oklch(30% 0.07 262))",
              boxShadow: "0 8px 40px oklch(20% 0.05 262 / 0.18)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: "var(--gold-accent)" }}
            >
              Beyond the Masjid
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--text-on-dark)" }}
            >
              Mufti Saad serves the wider Muslim community through financial
              guidance, humanitarian partnership, and scholarly collaboration —
              translating faith into practical benefit for families and society.
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
                  boxShadow: "0 4px 24px oklch(25% 0.055 262 / 0.06)",
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
                    Get in Touch
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
