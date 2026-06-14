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
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

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

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to top, var(--cream), transparent)",
        }}
      />
    </section>
  );
}
