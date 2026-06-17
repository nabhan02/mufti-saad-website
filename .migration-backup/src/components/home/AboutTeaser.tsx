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
          A scholar grounded in tradition, serving today&apos;s community.
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          Raised in the United States, Mufti Saad Haque completed the
          memorization of the Qur&apos;an in 2010, graduated from the rigorous
          Alimiyyah program at Darul Uloom New York in 2016, and earned a
          post-graduate specialization in Islamic legal studies (Iftaa) under
          the late Mufti Ebrahim Desai (may Allah have mercy on him). Since
          2018 he has served as Religious Director and Lead Imam of Zakaria
          Islamic Academy in Northern Virginia.
        </p>
        <Button href="/about" variant="primary" showArrow>
          Read Full Biography
        </Button>
      </div>
    </section>
  );
}
