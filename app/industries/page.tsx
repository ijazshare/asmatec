import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { industries, coreServices, trustPoints } from "@/constants/industries";
import PageCTA from "@/components/PageCTA";
import { Button } from "@/components/ui/button";

export default function IndustriesPage() {
  return (
    <div className="pt-14">
      {/* Hero Section */}
      <PageHero
        title="Industries We Serve"
        description="Practical technology solutions for businesses, nonprofits, and organizations that need reliable systems, stronger security, and the right operational support."
      />

      {/* Main Industries Content */}
      <section className="pb-16 mt-10 md:pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-12">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-[#e2e8f0] bg-white p-8 md:p-10 card-shadow"
                >
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {/* Detail Column */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-[#dbeafe] flex items-center justify-center shrink-0">
                          <Icon
                            className="h-6 w-6 text-[#3b82f6]"
                            strokeWidth={2}
                          />
                        </div>
                        <h2 className="text-2xl md:text-[28px] font-heading font-bold text-[#1a2e4a] leading-tight">
                          {item.name}
                        </h2>
                      </div>

                      <p className="text-[#64748b] leading-relaxed mb-8 text-[15px] md:text-base">
                        {item.description}
                      </p>

                      {/* Outcomes */}
                      <div className="grid sm:grid-cols-1 gap-4">
                        {item.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#3b82f6] mt-0.5 shrink-0" />
                            <span className="text-[#374151] text-[15px] font-medium">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/case-study"
                        className="inline-block border border-[#3b82f6] mt-6  font-semibold px-8 py-2.5 rounded-md bg-[#3b82f6] text-white transition-colors"
                      >
                        View Case Study
                      </Link>
                    </div>

                    {/* Services Column */}
                    <div className="lg:w-[360px] p-6 md:p-8 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                      <h3 className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#94a3b8] mb-6">
                        Relevant Services
                      </h3>
                      <ul className="space-y-4">
                        {item.services.map((svc) => (
                          <li key={svc} className="flex items-start gap-3">
                            <ArrowRight className="h-4 w-4 text-[#3b82f6] mt-1 shrink-0" />
                            <span className="text-[14px] text-[#475569] font-medium leading-normal">
                              {svc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-[2.25rem] font-heading font-bold text-[#1a2e4a] mb-5">
              Tailored, Not One-Size-Fits-All
            </h2>
            <p className="text-[#64748b] text-[15px] md:text-base leading-relaxed">
              AsmaTec combines services based on your organizations
              environment, challenges, and goals. Here is the technology
              foundation we bring to every partner.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {coreServices.map((svc) => {
              const SvcIcon = svc.icon;
              return (
                <div
                  key={svc.label}
                  className="flex items-center gap-4 bg-white rounded-xl border border-[#e2e8f0] p-5 card-shadow hover:card-shadow-hover transition-all duration-300"
                >
                  <SvcIcon className="h-5 w-5 text-[#3b82f6] shrink-0" />
                  <span className="text-[15px] font-semibold text-[#1a2e4a]">
                    {svc.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why AsmaTec (Trust Section) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-[2.25rem] font-heading font-bold text-[#1a2e4a] mb-4">
              Why Organizations Choose AsmaTec
            </h2>
          </div>
          <div className="space-y-4">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-5 p-6 rounded-xl bg-white border border-[#e2e8f0] shadow-sm hover:border-[#3b82f6]/20 transition-all"
              >
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-[#1E81EF]" />
                </div>
                <span className="text-[#1a2e4a] text-base md:text-[17px] font-semibold leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  CTA */}
      <PageCTA
        title="Ready to simplify your IT?"
        description="Whether you're improving day-to-day IT, planning a donation system, upgrading infrastructure, or evaluating new vendors — AsmaTec can help you choose and implement the right solution."
        buttonText="Get Free Assessment"
      />
    </div>
  );
}
