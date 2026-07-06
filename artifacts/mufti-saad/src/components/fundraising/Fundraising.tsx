const CAUSES = [
  {
    title: "Food Security",
    description:
      "Providing meals and sustenance to families facing hunger and hardship around the world.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Orphan Care",
    description:
      "Sponsoring and supporting orphaned children with their essential needs and a path forward.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    title: "Education",
    description:
      "Funding access to learning and opportunity for children in underserved communities.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: "Emergency Relief",
    description:
      "Rapid humanitarian response for communities struck by crisis, conflict, and disaster.",
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
];

export function Fundraising() {
  return (
    <>
      {/* Human Appeal banner */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div
            className="rounded-2xl p-8 md:p-10 text-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(41.0% 0.135 230) 0%, oklch(35.5% 0.129 230) 100%)",
              boxShadow: "0 8px 40px oklch(20% 0.074 230 / 0.18)",
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

      {/* Causes */}
      <section
        className="py-12 md:py-20 pb-24 md:pb-32"
        style={{ background: "var(--surface-light)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--blue-accent)" }}
            >
              Where Support Goes
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Causes We Support
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CAUSES.map((cause) => (
              <div
                key={cause.title}
                className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
                style={{
                  background: "var(--surface-card)",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 4px 24px oklch(25% 0.074 230 / 0.06)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: "var(--navy)",
                    color: "var(--gold-accent)",
                  }}
                >
                  {cause.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {cause.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cause.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
