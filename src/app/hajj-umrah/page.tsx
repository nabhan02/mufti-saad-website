import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { HajjUmrah } from "@/components/hajjumrah/HajjUmrah";
import { InquiryCTA } from "@/components/home/InquiryCTA";

export const metadata: Metadata = {
  title: "Hajj & Umrah | Mufti Saad Haque",
  description:
    "Guided Hajj and Umrah journeys with Mufti Saad Haque through Sara International Travel — combining logistical coordination with spiritual mentorship for a meaningful pilgrimage.",
};

export default function HajjUmrahPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sacred Travel"
        title="Hajj & Umrah"
        description="Embark on the pilgrimage of a lifetime with scholarly guidance and trusted coordination at every step of the journey."
      />
      <HajjUmrah />
      <InquiryCTA
        eyebrow="Planning Your Pilgrimage?"
        title="Inquire About an Upcoming Journey"
        body="For dates, packages, and details on upcoming Hajj and Umrah groups, please reach out by email or the inquiry form."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
