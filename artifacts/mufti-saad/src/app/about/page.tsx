import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/about/About";
import { InquiryCTA } from "@/components/home/InquiryCTA";

export const metadata: Metadata = {
  title: "About | Mufti Saad Haque",
  description:
    "Learn about Mufti Saad Haque — Hafiz of the Qur'an, graduate of the Alimiyyah and Iftaa programs, and Director and Head Imam of Zakaria Islamic Academy in Northern Virginia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Biography"
        title="About Mufti Saad"
        description="A life dedicated to sacred knowledge, religious guidance, and service to the Muslim community."
      />
      <About />
      <InquiryCTA />
    </>
  );
}
