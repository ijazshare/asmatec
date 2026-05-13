import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { serviceSections } from "@/constants/services";
import PageCTA from "@/components/PageCTA";

export default function ServicesPage() {
  return (
    <div className="pt-14">
      {/* Hero */}
      <section className="bg-[#0A1A2F] py-20 md:py-28 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Our IT Services
          </h1>
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
            Comprehensive technology solutions to secure, optimize, and manage
            your business IT infrastructure — from network monitoring to
            cybersecurity and disaster recovery.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {serviceSections.map((section, idx) => (
        <section
          key={section.title}
          className={`py-16 md:py-20 ${idx % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}`}
        >
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#DCE7F5] flex items-center justify-center mb-5">
                  <section.icon
                    className="h-6 w-6 text-[#3b82f6]"
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0f2137] mb-4">
                  {section.title}
                </h2>
                <p className="text-[#64748b] text-[15px] leading-relaxed mb-8">
                  {section.overview}
                </p>
                <Link
                  href={section.link}
                  className="inline-block bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white text-[13px] font-semibold px-6 py-2.5 rounded-md transition-colors"
                >
                  {section.cta}
                </Link>
              </div>

              {/* Right — two cards */}
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Benefits */}
                <div className="p-5 bg-white rounded-xl border border-[#e2e8f0] shadow-sm">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#3b82f6] mb-4">
                    Benefits
                  </h4>
                  <ul className="space-y-2.5">
                    {section.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-[13px] text-[#374151]"
                      >
                        <CheckCircle className="h-4 w-4 text-[#3b82f6] shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problems */}
                <div className="p-5 bg-white rounded-xl border border-[#e2e8f0] shadow-sm">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#ef4444] mb-4">
                    Problems We Solve
                  </h4>
                  <ul className="space-y-2.5">
                    {section.problems.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-[13px] text-[#374151]"
                      >
                        <XCircle className="h-4 w-4 text-[#ef4444] shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <PageCTA
        title="Ready to Transform Your IT Infrastructure?"
        description="Get a free network assessment and see how we can improve your infrastructure."
        buttonText="Get a Free Assessment"
      />
    </div>
  );
}
