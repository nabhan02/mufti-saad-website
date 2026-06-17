import { InquiryForm } from "@/components/ui/InquiryForm";
import { CONTACT_EMAIL, LOCATION, ORG_NAME } from "@/lib/site";

const TOPICS = [
  "Religious Question",
  "Classes & Education",
  "Counseling",
  "Nikah Officiation",
  "Hajj & Umrah",
  "Islamic Finance",
  "Fundraising",
  "Speaking / Khutbah",
  "Other",
];

export function Contact() {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-3xl px-6">
        <InquiryForm
          topics={TOPICS}
          topicLabel="Interested In"
          subjectPrefix="Website Inquiry"
          messageLabel="Message"
          messagePlaceholder="Tell us how we can help, or share your question..."
          submitLabel="Send Message"
        />

        {/* Direct contact details */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div
            className="rounded-2xl p-6 text-center"
            style={{
              background: "var(--surface-card)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "var(--blue-accent)" }}
            >
              Email
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm font-medium underline underline-offset-4 decoration-1 transition-opacity hover:opacity-80 break-all"
              style={{ color: "var(--navy)" }}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div
            className="rounded-2xl p-6 text-center"
            style={{
              background: "var(--surface-card)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "var(--blue-accent)" }}
            >
              Based At
            </p>
            <p className="text-sm font-medium" style={{ color: "var(--navy)" }}>
              {ORG_NAME}
              <span className="block text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                {LOCATION}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
