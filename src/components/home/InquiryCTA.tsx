import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/site";

export function InquiryCTA({
  eyebrow = "Have a Question?",
  title = "Reach Out to Mufti Saad",
  body = "For religious questions, counseling, classes, or general inquiries, send a message and Mufti Saad's office will respond, in shā' Allah. For questions, please email or use the inquiry form.",
  primaryLabel = "Ask a Question",
  primaryHref = "/ask",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(30% 0.12 305), oklch(25% 0.11 305) 55%, oklch(25% 0.10 305))",
            boxShadow: "0 20px 60px oklch(20% 0.07 305 / 0.25)",
          }}
        >
          {/* Decorative orbs */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
            style={{ background: "var(--gold-accent)" }}
          />
          <div
            className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full opacity-[0.07]"
            style={{ background: "white" }}
          />

          <div className="relative">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--gold-accent)" }}
            >
              {eyebrow}
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto leading-tight"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "var(--text-on-dark)",
              }}
            >
              {title}
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: "var(--text-muted-on-dark)" }}
            >
              {body}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href={primaryHref} variant="accent">
                {primaryLabel}
              </Button>
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="ghost" external>
                Email Directly
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
