import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Education } from "@/components/education/Education";
import { InquiryCTA } from "@/components/home/InquiryCTA";

export const metadata: Metadata = {
  title: "Classes & Education | Mufti Saad Haque",
  description:
    "Weekly lectures, monthly seminars, and classes for all ages at Zakaria Islamic Academy — including advanced study of Tafsir and Fiqh with Mufti Saad Haque.",
};

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Classes & Education"
        description="From weekly community gatherings to advanced study of Tafsir and Fiqh, find a program that fits your learning journey."
      />
      <Education />
      <InquiryCTA
        eyebrow="Want to Learn More?"
        title="Ask About Classes & Programs"
        body="For class schedules, registration, or questions about programs at Zakaria Islamic Academy, please reach out by email or the inquiry form."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
