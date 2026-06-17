import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Fundraising } from "@/components/fundraising/Fundraising";
import { InquiryCTA } from "@/components/home/InquiryCTA";

export const metadata: Metadata = {
  title: "Fundraising | Mufti Saad Haque",
  description:
    "Mufti Saad Haque partners with Human Appeal to raise funds and awareness for global humanitarian causes — food security, orphan care, education, and emergency relief.",
};

export default function FundraisingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Humanitarian"
        title="Fundraising"
        description="Mobilizing the community to support those in need — raising funds and awareness for critical humanitarian causes worldwide."
      />
      <Fundraising />
      <InquiryCTA
        eyebrow="Want to Help?"
        title="Support These Efforts"
        body="To organize a fundraising appeal, contribute to a cause, or learn more about the campaigns, please reach out by email or the inquiry form."
        primaryLabel="Get Involved"
        primaryHref="/contact"
      />
    </>
  );
}
