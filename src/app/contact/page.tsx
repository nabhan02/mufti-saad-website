import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Contact } from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact | Mufti Saad Haque",
  description:
    "Get in touch with Mufti Saad Haque for religious questions, classes, counseling, nikah officiation, Hajj & Umrah, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact"
        description="For questions or inquiries of any kind, please send a message below or email directly — Mufti Saad's office will respond, in shā' Allah."
      />
      <Contact />
    </>
  );
}
