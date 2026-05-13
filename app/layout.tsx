import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "AsmaTec | Managed IT Services, Cybersecurity & Network Solutions",
  description:
    "AsmaTec provides managed IT services, cybersecurity solutions, and network infrastructure for businesses in New York, New Jersey, and Pennsylvania. Get a free IT assessment today.",
  keywords: [
    "Managed IT Services New York",
    "Managed IT Services New Jersey",
    "Managed IT Services Pennsylvania",
    "Cybersecurity Services for Businesses",
    "IT Support for Small Business",
  ],
  alternates: {
    canonical: "https://asmatec.com",
  },
  openGraph: {
    type: "website",
    title: "AsmaTec | Managed IT Services, Cybersecurity & Network Solutions",
    description:
      "AsmaTec provides managed IT services, cybersecurity solutions, and network infrastructure for businesses in New York, New Jersey, and Pennsylvania. Get a free IT assessment today.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e8c3bdd2-2639-456c-85c3-897b3c27c60f/id-preview-688e3dcd--21893d04-090b-4d2c-b0ed-241c77a8b780.lovable.app-1773339428346.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AsmaTec | Managed IT Services, Cybersecurity & Network Solutions",
    description:
      "AsmaTec provides managed IT services, cybersecurity solutions, and network infrastructure for businesses in New York, New Jersey, and Pennsylvania. Get a free IT assessment today.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e8c3bdd2-2639-456c-85c3-897b3c27c60f/id-preview-688e3dcd--21893d04-090b-4d2c-b0ed-241c77a8b780.lovable.app-1773339428346.png",
    ],
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import MetaPixel from "@/components/MetaPixel";
import Script from "next/script";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body>
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <Header />
        <div>{children}</div>
        <Footer />
        <FloatingContactButtons />
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69e92e02391771c2a94a7ee7"
        ></script>
      </body>
    </html>
  );
}
