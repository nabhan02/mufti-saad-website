import { Button } from "@/components/ui/Button";

const HELPS = [
  "Confidential one-on-one counseling",
  "Pre-marital & marital guidance",
  "Family & parenting support",
  "Nikah officiation (Virginia-recognized)",
  "Spiritual growth & accountability",
  "A judgment-free, faith-centered space",
];

export function Counseling() {
  return (
    <section
      className="py-16 md:py-24 pb-24 md:pb-32"
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
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
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
              From preparing for marriage to strengthening an existing one,
              navigating family challenges, or seeking spiritual direction,
              Mufti Saad offers confidential, compassionate counsel rooted in
              Islamic tradition. As a Virginia-recognized officiant, he also
              performs nikahs — helping couples begin on a firm foundation.
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
              Request an Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
