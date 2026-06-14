import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Counseling } from "@/components/counseling/Counseling";
import { InquiryCTA } from "@/components/home/InquiryCTA";

export const metadata: Metadata = {
  title: "Counseling & Nikah | Mufti Saad Haque",
  description:
    "Confidential Islamic counseling and pastoral care for individuals, couples, and families — plus pre-marital and marital counseling and nikah officiation by a Virginia-recognized officiant.",
};

export default function CounselingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Family & Guidance"
        title="Counseling & Nikah"
        description="Compassionate, confidential counsel rooted in Islamic tradition — for individuals, couples, and families, and for those beginning married life."
      />
      <Counseling />
      <InquiryCTA
        eyebrow="Ready to Talk?"
        title="Request a Counseling Appointment"
        body="To arrange counseling or nikah officiation, please reach out by email or the inquiry form and Mufti Saad's office will follow up with you."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
