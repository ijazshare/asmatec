import type { Metadata } from "next";
import WhatsAppGuideVisual from "@/components/WhatsAppGuideVisual";

const GUIDE_URL = "https://asmatec.com/whatsapp-test-draft";

const DESCRIPTION =
  "Hide members' numbers and lock posting to admins only, so you can share the join link freely and keep scammers out. Free step-by-step guide from AsmaTec — with screenshots.";

export const metadata: Metadata = {
  metadataBase: new URL("https://asmatec.com"),
  title: "Keep Scammers Out of Your WhatsApp Community | AsmaTec",
  description: DESCRIPTION,
  // Draft: keep it out of search until promoted to /whatsapp.
  robots: { index: false, follow: false },
};

export default function Page() {
  return <WhatsAppGuideVisual guideUrl={GUIDE_URL} />;
}
