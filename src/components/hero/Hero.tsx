import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(38% 0.085 260) 0%, oklch(34% 0.08 261) 35%, oklch(29% 0.066 262) 70%, oklch(25% 0.055 262) 100%)",
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
              Hafiz of the Qur&apos;an and graduate of the Alimiyyah and Iftaa
              programs, qualified to issue Islamic legal rulings. Director and
              Head Imam of Zakaria Islamic Academy in Northern Virginia —
              dedicated to authentic education, religious guidance, and
              community service.
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
                boxShadow: "0 25px 80px oklch(18% 0.04 262 / 0.55)",
                border: "3px solid oklch(96% 0.015 85 / 0.15)",
              }}
            >
              <Image
                src="/images/headshot.png"
                alt="Mufti Saad Haque"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
