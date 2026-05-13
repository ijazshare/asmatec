import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="bg-[#0A1A2F] py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Terms & Conditions
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed">
            Please read these terms and conditions carefully before using Our
            Service.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              1. Agreement to Terms
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              By accessing or using our services at AsmaTec, you agree to be
              bound by these Terms and Conditions. If you disagree with any part
              of the terms, then you may not access the service.
            </p>

            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              2. Intellectual Property
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of AsmaTec and its
              licensors.
            </p>

            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              3. Use of Services
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our IT services are provided on an "AS IS" and "AS AVAILABLE"
              basis. We reserve the right to withdraw or amend our service, and
              any service or material we provide via the Service, in our sole
              discretion without notice.
            </p>

            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              4. Limitation of Liability
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              In no event shall AsmaTec, nor its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses.
            </p>

            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              5. Governing Law
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              These Terms shall be governed and construed in accordance with the
              laws of the State of New York, United States, without regard to
              its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              6. Changes
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will try to
              provide at least 30 days' notice prior to any new terms taking
              effect.
            </p>

            <div className="mt-16 p-8 bg-[#f8fafc] rounded-md border border-slate-100">
              <p className="text-sm text-slate-500">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
