import { Button } from "@/components/ui/Button";

const CLASSES = [
  {
    title: "Public Classes at Zakaria Islamic Academy",
    subtitle: "Open to the community — check ZIA's website",
    description:
      "Mufti Saad teaches regular public classes at Zakaria Islamic Academy covering Tafsir, Fiqh, Hadith, and other Islamic sciences. Class schedules, topics, and registration can be found on ZIA's website.",
    cta: "Visit ziacademy.org",
    ctaHref: "https://ziacademy.org",
    external: true,
    badge: "Community Classes",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: "Private One-on-One Classes",
    subtitle: "Personalized instruction — contact directly",
    description:
      "For students seeking individualized instruction in Qur'an recitation, Tajweed, Islamic studies, or specific texts, private sessions can be arranged directly with Mufti Saad.",
    cta: "Inquire About Private Classes",
    ctaHref: "/contact",
    external: false,
    badge: "By Arrangement",
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
    title: "Advanced Alimiyyah Classes",
    subtitle: "Classical texts for serious students — contact directly",
    description:
      "Mufti Saad teaches advanced Islamic texts online to students nationwide, including works such as al-Hidayah, Mukhtasar al-Qudoori, Tafseer al-Jalalayn, and Usool as-Shashi. Enrollment is by direct arrangement.",
    cta: "Inquire About Alimiyyah Classes",
    ctaHref: "/contact",
    external: false,
    badge: "Advanced Level",
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
];

export function Education() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--surface-light)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Featured block */}
        <div
          className="rounded-2xl p-8 md:p-10 mb-10"
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
            Classes & Education
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 max-w-3xl"
            style={{
              fontFamily: "var(--font-playfair), serif",
              color: "var(--text-on-dark)",
            }}
          >
            Public community classes, private instruction, and advanced
            Alimiyyah study.
          </h2>
          <p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: "var(--text-muted-on-dark)" }}
          >
            Whether you are a beginner or an advanced student, there is an
            option suited to you. Public class schedules are listed on ZIA&apos;s
            website; private and Alimiyyah classes are arranged directly.
          </p>
        </div>

        {/* Class cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {CLASSES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
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
                {item.icon}
              </div>
              <h3
                className="text-xl font-bold mb-1"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm font-medium mb-4"
                style={{ color: "var(--blue-accent)" }}
              >
                {item.subtitle}
              </p>
              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.description}
              </p>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] mb-6 self-start"
                style={{
                  background: "var(--gold-accent)",
                  color: "var(--navy-deep)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--navy-deep)" }}
                />
                {item.badge}
              </span>
              {item.external ? (
                <a
                  href={item.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "var(--blue-accent)" }}
                >
                  {item.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ) : (
                <Button href={item.ctaHref} variant="link">
                  {item.cta}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
