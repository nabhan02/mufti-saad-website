export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section
      className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(30% 0.12 305) 0%, oklch(25% 0.11 305) 55%, oklch(25% 0.10 305) 100%)",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p
          className="text-sm font-semibold uppercase tracking-[0.25em] mb-4"
          style={{ color: "var(--gold-accent)" }}
        >
          {eyebrow}
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          style={{
            fontFamily: "var(--font-playfair), serif",
            color: "var(--text-on-dark)",
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-muted-on-dark)" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
