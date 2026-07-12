import type { Metadata } from "next";
import WhatsAppGuideDraft from "@/components/WhatsAppGuideDraft";

const GUIDE_URL = "https://asmatec.com/whatsapp-test-draft";

const DESCRIPTION =
  "Draft: one-way WhatsApp announcement channel — admins broadcast, members' numbers hidden, safe to share the join link publicly.";

export const metadata: Metadata = {
  metadataBase: new URL("https://asmatec.com"),
  title: "Draft · WhatsApp Announcement Channel Guide | AsmaTec",
  description: DESCRIPTION,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <WhatsAppGuideDraft guideUrl={GUIDE_URL} />;
}
