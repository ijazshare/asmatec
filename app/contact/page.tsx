"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { event } from "@/components/MetaPixel";
import Script from "next/script";

const inputClass =
  "w-full px-3.5 py-2.5 text-[13px] text-[#0f2137] bg-white border border-[#e2e8f0] rounded-lg outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/10 transition placeholder:text-[#94a3b8]";

const selectClass =
  "w-full px-3.5 py-2.5 text-[13px] text-[#0f2137] bg-white border border-[#e2e8f0] rounded-lg outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/10 transition appearance-none";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // REPLACE THIS with your actual Google Apps Script Web App URL
  const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSent(false);

    const formData = new FormData(e.currentTarget);

    try {
      // If no URL is provided yet, simulate success for demonstration
      if (SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_URL_HERE") {
        console.warn("Google Script URL not set. Simulating success.");
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSent(true);
        (e.target as HTMLFormElement).reset();
        return;
      }

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSent(true);
        event("Contact"); // Track successful submission
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send message. Please try again later.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="bg-[#0A1A2F] py-20 md:py-28 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Contact Us
          </h1>
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
            Get in touch for a free IT assessment or to learn how we can help
            your business.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-bold text-2xl text-[#0f2137] mb-4">
                  Get In Touch
                </h2>
                <p className="text-[#64748b] text-[14px] leading-relaxed">
                  Whether you need managed IT support, cybersecurity solutions,
                  or a complete network overhaul, our team is ready to help.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                    <Phone
                      className="h-4 w-4 text-[#3b82f6]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#94a3b8] uppercase tracking-wider mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+15169534567"
                      className="text-[14px] font-semibold text-[#0f2137] hover:text-[#3b82f6] transition-colors"
                    >
                      +1 516-953-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                    <Mail
                      className="h-4 w-4 text-[#3b82f6]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#94a3b8] uppercase tracking-wider mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:info@asmatec.com"
                      className="text-[14px] font-semibold text-[#0f2137] hover:text-[#3b82f6] transition-colors"
                    >
                      info@asmatec.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                    <MapPin
                      className="h-4 w-4 text-[#3b82f6]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#94a3b8] uppercase tracking-wider mb-0.5">
                      Service Areas
                    </p>
                    <p className="text-[14px] font-semibold text-[#0f2137]">
                      New York, New Jersey &amp; Pennsylvania
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-[#e2e8f0] card-shadow overflow-hidden min-h-[600px]">
                <iframe
    src="https://api.leadconnectorhq.com/widget/form/4KiLBBtIBUpc12ZaKEuF"
    style="width:100%;height:100%;border:none;border-radius:8px"
    id="inline-4KiLBBtIBUpc12ZaKEuF" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Form 4"
    data-height="728"
    data-layout-iframe-id="inline-4KiLBBtIBUpc12ZaKEuF"
    data-form-id="4KiLBBtIBUpc12ZaKEuF"
    title="Form 4"
    
        >
</iframe>
                <Script
                  src="https://link.msgsndr.com/js/form_embed.js"
                  strategy="lazyOnload"
                />
              </div>

              {/* Note: Google Sheets integration logic is preserved in the code above for future use, 
                  but the iframe form below is handled directly by LeadConnector. */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
