import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { IslamicFinance } from "@/components/finance/IslamicFinance";
import { InquiryCTA } from "@/components/home/InquiryCTA";

export const metadata: Metadata = {
  title: "Islamic Finance | Mufti Saad Haque",
  description:
    "Shariah-compliant financial guidance with Mufti Saad Haque — a consultant with University Islamic Financial (UIF). Riba-free home financing and Islamic financial solutions for families.",
};

export default function IslamicFinancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Financial Guidance"
        title="Islamic Finance"
        description="Shariah-compliant financial solutions that connect faith-based ethics with practical needs — from riba-free home financing to personalized consultation."
      />
      <IslamicFinance />
      <InquiryCTA
        eyebrow="Have Questions?"
        title="Explore Your Islamic Finance Options"
        body="To discuss home financing or other Shariah-compliant financial solutions, please reach out by email or the inquiry form and Mufti Saad will follow up."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
