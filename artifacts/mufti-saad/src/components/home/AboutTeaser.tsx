import { Button } from "@/components/ui/Button";

export function AboutTeaser() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--surface-light)" }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p
          className="text-sm font-semibold uppercase tracking-[0.25em] mb-4"
          style={{ color: "var(--blue-accent)" }}
        >
          About Mufti Saad
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-8 leading-tight"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Serving the community, every day.
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          As Imam of Zakaria Islamic Academy, Mufti Saad leads daily prayers
          and Friday khutbahs, guides families toward halal home and business
          financing, personally leads group Hajj and Umrah journeys each year,
          and teaches the Qur&apos;an and Islamic sciences to students from
          beginner to advanced — while remaining available for personal
          questions and counsel.
        </p>
        <Button href="/about" variant="primary" showArrow>
          Read Full Biography
        </Button>
      </div>
    </section>
  );
}
