import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 110% at 78% 12%, oklch(38% 0.092 334 / 0.38) 0%, transparent 55%), linear-gradient(150deg, oklch(34% 0.088 332) 0%, oklch(26% 0.078 320) 50%, oklch(15% 0.055 304) 100%)",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="grid gap-12 md:gap-16 md:grid-cols-5 items-center">
          {/* Text content */}
          <div className="md:col-span-3 order-2 md:order-1">
            <p
              className="text-sm font-medium uppercase tracking-[0.25em] mb-6"
              style={{ color: "var(--gold-accent)" }}
            >
              Scholar &middot; Imam &middot; Mufti
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "var(--text-on-dark)",
              }}
            >
              Mufti Saad{" "}
              <span style={{ color: "var(--gold-accent)" }}>Haque</span>
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-xl mb-10"
              style={{ color: "var(--text-muted-on-dark)" }}
            >
              Scholar, Imam, and Mufti — serving the community through
              authentic Islamic education, religious guidance, and
              compassionate counsel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/ask" variant="accent">
                Ask Mufti Saad
              </Button>
              <Button href="/about" variant="ghost">
                About Mufti Saad
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 25px 80px oklch(18% 0.039 320 / 0.55)",
                border: "3px solid oklch(96% 0.015 85 / 0.15)",
              }}
            >
              <img
                src="/images/headshot.png"
                alt="Mufti Saad Haque"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
