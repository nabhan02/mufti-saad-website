import { Button } from "@/components/ui/Button";

const SERVICES = [
  {
    title: "Islamic Counseling & Pastoral Care",
    description:
      "Confidential, compassionate guidance for individuals, couples, and families navigating life's challenges — rooted in tradition and practical wisdom.",
    features: [
      "One-on-one spiritual guidance",
      "Family & personal challenges",
      "Faith-centered perspective",
      "Confidential, judgment-free space",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    title: "Pre-Marital & Marital Counseling",
    description:
      "Support for couples preparing for marriage and those seeking to strengthen an existing one — grounded in Islamic principles and practical counsel.",
    features: [
      "Communication & expectations",
      "Rights & responsibilities in Islam",
      "Conflict resolution",
      "Building a spiritual foundation",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    title: "Nikah Officiation",
    description:
      "As a Virginia state-recognized marriage officiant, Mufti Saad performs nikahs and helps couples begin married life on a firm Islamic foundation.",
    features: [
      "Virginia-recognized officiant",
      "Performed per the Sunnah",
      "Pre-nikah guidance included",
      "Coordination with your event",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ),
  },
];

export function Counseling() {
  return (
    <section className="py-24 md:py-32">
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
              {/* Header strip */}
              <div
                className="h-2"
                style={{
                  background:
                    "linear-gradient(90deg, var(--navy), var(--navy-soft))",
                }}
              />
              <div className="p-8 flex-1 flex flex-col">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: "var(--navy)",
                    color: "var(--gold-accent)",
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {service.title}
                </h3>
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] mb-4 self-start"
                  style={{
                    background: "var(--gold-accent)",
                    color: "var(--navy-deep)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--navy-deep)" }}
                  />
                  By Appointment
                </span>
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
                  Request an Appointment
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
