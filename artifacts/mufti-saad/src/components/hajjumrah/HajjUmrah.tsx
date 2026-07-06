import { Button } from "@/components/ui/Button";

const JOURNEYS = [
  {
    title: "Hajj",
    description:
      "Fulfill the fifth pillar of Islam with scholarly guidance at every step. From preparation classes to on-ground spiritual mentorship, experience Hajj with depth, devotion, and careful coordination.",
    gradient: "linear-gradient(135deg, oklch(42.2% 0.135 230) 0%, oklch(36.6% 0.133 230) 100%)",
  },
  {
    title: "Umrah",
    description:
      "Umrah groups travel monthly throughout the year. Whether you are travelling solo or as a family, contact Mufti Saad directly to arrange your Umrah trip with spiritual guidance and full coordination.",
    gradient: "linear-gradient(135deg, oklch(40.0% 0.135 230) 0%, oklch(34.5% 0.118 230) 100%)",
  },
  {
    title: "Spiritual Mentorship",
    description:
      "Every journey includes preparation and guidance — understanding the rites, their meanings, and their wisdom — so pilgrims travel with knowledge and return with a renewed connection to Allah.",
    gradient: "linear-gradient(135deg, oklch(42.7% 0.135 230) 0%, oklch(37.2% 0.133 230) 100%)",
  },
];

export function HajjUmrah() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--surface-light)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Partnership banner */}
        <div
          className="rounded-2xl p-8 md:p-10 mb-12 text-center"
          style={{
            background: "var(--surface-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 4px 24px oklch(25% 0.074 230 / 0.06)",
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: "var(--blue-accent)" }}
          >
            Director — Sara International Travel (sarainternationaltravel.com) · Since 2021
          </p>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            As Director of Sara International Travel, Mufti Saad leads groups
            annually for Hajj and Umrah — pairing trusted logistical
            coordination with scholarly mentorship for a truly meaningful
            pilgrimage experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {JOURNEYS.map((journey, i) => (
            <div
              key={journey.title}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
              style={{ boxShadow: "0 8px 40px oklch(25% 0.074 230 / 0.1)" }}
            >
              {/* Visual header */}
              <div
                className="relative h-48 flex items-end p-6"
                style={{ background: journey.gradient }}
              >
                <div
                  className="absolute top-6 right-6 w-16 h-16 rounded-full opacity-10"
                  style={{ background: "white" }}
                />
                <div
                  className="absolute top-10 right-10 w-8 h-8 rounded-full opacity-10"
                  style={{ background: "white" }}
                />
                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.2em] block mb-2"
                    style={{ color: "var(--gold-accent)" }}
                  >
                    Journey {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      color: "var(--text-on-dark)",
                    }}
                  >
                    {journey.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div
                className="flex-1 p-6 flex flex-col"
                style={{ background: "var(--surface-card)" }}
              >
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {journey.description}
                </p>
                <Button href="/contact" variant="link">
                  Inquire About a Journey
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
