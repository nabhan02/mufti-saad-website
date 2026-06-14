import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Services } from "@/components/services/Services";

export const metadata: Metadata = {
  title: "Community & Services | Mufti Saad Haque",
  description:
    "Beyond the masjid: Islamic home-financing guidance with University Islamic Financial, humanitarian partnership with Human Appeal, and scholarly leadership through the DMV Ulama Council.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Broader Impact"
        title="Community & Services"
        description="Serving families and society through financial guidance, humanitarian partnership, and unified scholarly leadership."
      />
      <Services />
    </>
  );
}
