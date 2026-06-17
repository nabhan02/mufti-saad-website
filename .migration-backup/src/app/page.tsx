import { Hero } from "@/components/hero/Hero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { InquiryCTA } from "@/components/home/InquiryCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesOverview />
      <InquiryCTA />
    </>
  );
}
