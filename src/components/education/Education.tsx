import { Button } from "@/components/ui/Button";

const CLASSES = [
  {
    title: "Tafsir of the Qur'an",
    subtitle: "Understanding the Book of Allah",
    description:
      "In-depth study of the meanings, context, and lessons of the Qur'an, making the timeless guidance of revelation accessible and applicable to daily life.",
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
    title: "Fiqh & Islamic Law",
    subtitle: "Practical rulings for everyday life",
    description:
      "Advanced study of Islamic jurisprudence — worship, transactions, family, and contemporary issues — taught with the depth of classical scholarship and Iftaa training.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.032-.352c-.483-.174-.711-.703-.589-1.202L5.25 4.971Z"
        />
      </svg>
    ),
  },
  {
    title: "Weekly Lectures & Halaqāt",
    subtitle: "Spiritual reminders & gatherings",
    description:
      "Regular lectures and study circles that nurture faith, character, and prophetic example — building a connected, knowledgeable community throughout the year.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Classes for All Ages",
    subtitle: "Youth, adults & families",
    description:
      "From foundational learning for children and youth to advanced subjects for adults, programs welcome every member of the community at every stage of their journey.",
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
              "linear-gradient(135deg, oklch(30% 0.078 320), oklch(23% 0.068 320))",
            boxShadow: "0 8px 40px oklch(20% 0.046 320 / 0.18)",
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: "var(--gold-accent)" }}
          >
            At Zakaria Islamic Academy
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 max-w-3xl"
            style={{
              fontFamily: "var(--font-playfair), serif",
              color: "var(--text-on-dark)",
            }}
          >
            Daily prayers, Friday Khutbahs, and year-round programs for the whole
            community.
          </h2>
          <p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: "var(--text-muted-on-dark)" }}
          >
            Mufti Saad organizes weekly lectures, monthly seminars, and classes
            for all ages — fostering Qur&apos;anic learning, prophetic
            character, and spiritual development across the congregation.
          </p>
        </div>

        {/* Class cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {CLASSES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 24px oklch(25% 0.046 320 / 0.06)",
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
                Open to the Community
              </span>
              <Button href="/contact" variant="link">
                Ask About This Class
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
