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
          "linear-gradient(160deg, oklch(38% 0.085 260) 0%, oklch(32% 0.075 262) 55%, oklch(25% 0.055 262) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
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
