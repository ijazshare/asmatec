import type { Metadata } from "next";
import WhatsAppGuide from "@/components/WhatsAppGuide";

const GUIDE_URL = "https://asmatec.com/whatsapp-security";

const DESCRIPTION =
  "Hide members' numbers and lock posting to admins only, so you can share the join link freely and keep scammers out. Free step-by-step guide from AsmaTec.";

export const metadata: Metadata = {
  metadataBase: new URL("https://asmatec.com"),
  title: "Keep Scammers Out of Your WhatsApp Community | AsmaTec",
  description: DESCRIPTION,
  alternates: { canonical: GUIDE_URL },
  openGraph: {
    type: "article",
    url: GUIDE_URL,
    title: "Keep Scammers Out of Your WhatsApp Community",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Keep Scammers Out of Your WhatsApp Community",
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <WhatsAppGuide guideUrl={GUIDE_URL} />;
}
