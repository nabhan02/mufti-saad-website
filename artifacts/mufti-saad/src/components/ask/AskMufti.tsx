import { InquiryForm } from "@/components/ui/InquiryForm";
import { CONTACT_EMAIL } from "@/lib/site";

const QUESTION_TOPICS = [
  "Worship & Prayer (Salah)",
  "Fasting & Ramadan",
  "Zakat & Charity",
  "Marriage & Family",
  "Business & Finance (Muʿāmalāt)",
  "Halal & Haram",
  "Inheritance",
  "Other",
];

const POINTS = [
  {
    title: "Rooted in scholarship",
    text: "Answers draw on classical training in Fiqh and qualified Iftaa specialization.",
  },
  {
    title: "Confidential",
    text: "Your question is sent privately to Mufti Saad's office — not posted publicly.",
  },
  {
    title: "Contextually grounded",
    text: "Guidance is offered with relevance to the realities of life in America today.",
  },
];

export function AskMufti() {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-3xl px-6">
        {/* Intro points */}
        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          {POINTS.map((p) => (
            <div key={p.title}>
              <h3
                className="text-base font-bold mb-1.5"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <InquiryForm
          topics={QUESTION_TOPICS}
          topicLabel="Category of Question"
          topicPlaceholder="Select a category..."
          subjectPrefix="Religious Question"
          messageLabel="Your Question"
          messagePlaceholder="Please share your question with enough detail and context for an accurate response..."
          submitLabel="Submit Your Question"
        />

        {/* Disclaimer */}
        <div
          className="mt-8 rounded-2xl p-6 md:p-7"
          style={{
            background: "var(--surface-light)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-2"
            style={{ color: "var(--blue-accent)" }}
          >
            Please Note
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Responses are offered as general religious guidance and are not a
            substitute for professional legal, medical, or financial advice.
            Complex or sensitive matters may be best discussed in person. For
            urgent questions, please email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline underline-offset-2"
              style={{ color: "var(--blue-accent)" }}
            >
              {CONTACT_EMAIL}
            </a>{" "}
            directly.
          </p>
        </div>
      </div>
    </section>
  );
}
