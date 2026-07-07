import { Link } from "wouter";

const ITEMS = [
  {
    href: "/ask",
    eyebrow: "Religious Guidance",
    title: "Ask Mufti Saad",
    description:
      "Submit your religious questions and receive answers rooted in classical scholarship and qualified Iftaa training, relevant to today's challenges.",
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
  {
    href: "/classes",
    eyebrow: "Education",
    title: "Classes & Education",
    description:
      "Weekly lectures, monthly seminars, and classes for all ages — including advanced study of Tafsir and Fiqh at Zakaria Islamic Academy.",
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
    href: "/counseling",
    eyebrow: "Family",
    title: "Counseling & Nikah",
    description:
      "Confidential Islamic counseling and pastoral care for individuals, couples, and families — plus nikah officiation as a Virginia-recognized officiant.",
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
    href: "/hajj-umrah",
    eyebrow: "Travel",
    title: "Hajj & Umrah",
    description:
      "Guided pilgrimage journeys with logistical coordination and spiritual mentorship, leading groups for Hajj and Umrah through Sara International Travel.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
        />
      </svg>
    ),
  },
  {
    href: "/islamic-finance",
    eyebrow: "Financial Guidance",
    title: "Islamic Finance",
    description:
      "Shariah-compliant financial solutions as a consultant with University Islamic Financial (UIF) — including riba-free home financing for families.",
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
    href: "/fundraising",
    eyebrow: "Humanitarian",
    title: "Fundraising",
    description:
      "Partnering with Human Appeal to raise funds and awareness for food security, orphan care, education, and emergency relief worldwide.",
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

export function ServicesOverview() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: "var(--blue-accent)" }}
          >
            How Mufti Saad Serves
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Paths of Knowledge & Service
          </h2>
          <p className="text-base" style={{ color: "var(--text-secondary)" }}>
            Whether you seek a religious ruling, sacred knowledge, compassionate
            counsel, or a meaningful pilgrimage, find the path that suits you.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 24px oklch(19.0% 0.074 230 / 0.06)",
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
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-2"
                style={{ color: "var(--blue-accent)" }}
              >
                {item.eyebrow}
              </p>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.description}
              </p>
              <span
                className="inline-flex items-center text-sm font-semibold tracking-wide gap-2 transition-all duration-300 group-hover:gap-3"
                style={{ color: "var(--navy)" }}
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
