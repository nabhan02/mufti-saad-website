import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { AskMufti } from "@/components/ask/AskMufti";

export const metadata: Metadata = {
  title: "Ask Mufti Saad | Religious Questions & Guidance",
  description:
    "Submit your religious questions to Mufti Saad Haque and receive answers rooted in classical scholarship and qualified Iftaa training. Confidential and relevant to today's challenges.",
};

export default function AskPage() {
  return (
    <>
      <PageHeader
        eyebrow="Religious Guidance"
        title="Ask Mufti Saad"
        description="Have a religious question? Submit it below and receive guidance grounded in classical scholarship and qualified Iftaa training, in shā' Allah."
      />
      <AskMufti />
    </>
  );
}
