import { CheckCircle, DollarSign } from "lucide-react";
import {
  features,
  includedItems,
  costEstimates,
  pricingExamples,
} from "@/constants/managed-it";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export default function ManagedITPage() {
  return (
    <div className="pt-14">
      {/* Hero */}s
      <PageHero
        title="Managed IT Services"
        description="Complete IT management and support so you can focus on growing your business. We handle everything from monitoring to maintenance, security, and strategic planning."
      />

      {/* Key Components */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2137] mb-4">
              Key Components
            </h2>
            <p className="text-[#64748b] text-[15px] max-w-2xl mx-auto leading-relaxed">
              Managed IT services involve partnering with a dedicated provider
              to handle your company&apos;s technology needs — ensuring your
              systems are maintained, secure, and optimized for performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-7 cursor-default bg-white rounded-xl border border-[#e2e8f0] card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-md bg-[#E8F1FB] flex items-center justify-center mb-5">
                  <f.icon className="h-5 w-5 text-[#1E73DC]" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-[15px] text-[#0f2137] mb-2">
                  {f.title}
                </h3>
                <p className="text-[#64748b] text-[13px] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2137] mb-10 text-center">
            What&apos;s Included
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {includedItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-3.5 bg-white rounded-lg border border-[#e2e8f0] shadow-sm"
              >
                <CheckCircle className="h-4 w-4 text-[#3b82f6] shrink-0" />
                <span className="text-[15px] font-medium text-[#374151]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Estimates */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2137] mb-4">
              Cost Estimates
            </h2>
            <p className="text-[#64748b] text-[15px] max-w-xl mx-auto">
              Transparent pricing that varies based on network complexity,
              support levels, and security needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {costEstimates.map((c) => (
              <div
                key={c.category}
                className="p-6 bg-white rounded-xl border border-[#e2e8f0] card-shadow"
              >
                <div className="w-10 h-10 rounded-md bg-[#E8F1FB] flex items-center justify-center mb-4">
                  <DollarSign
                    className="h-5 w-5 text-[#3b82f6]"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-bold text-[14px] text-[#0f2137] mb-3">
                  {c.category}
                </h3>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="text-[12px] text-[#64748b] leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Pricing Examples */}
      <section className="py-16 md:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2137] mb-4">
              Real-World Pricing Examples
            </h2>
            <p className="text-[#64748b] text-[15px] max-w-xl mx-auto">
              See how costs break down for businesses like yours.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pricingExamples.map((ex) => (
              <div
                key={ex.title}
                className="p-7 bg-white rounded-xl border border-[#e2e8f0] card-shadow"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="font-bold text-[16px] text-[#0f2137]">
                      {ex.title}
                    </h3>
                    <p className="text-[12px] text-[#94a3b8] mt-0.5">
                      {ex.users} · {ex.complexity}
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-[#3b82f6]">
                    {ex.total}
                  </span>
                </div>
                <ul className="space-y-2.5 border-t border-[#e2e8f0] pt-5">
                  {ex.breakdown.map((line) => (
                    <li
                      key={line}
                      className="flex items-center gap-2 text-[13px] text-[#64748b]"
                    >
                      <CheckCircle className="h-4 w-4 text-[#3b82f6] shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-[#94a3b8] mt-4 italic">
                  *Pricing may vary depending on specific client needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Ready to simplify your IT?"
        description="Let us handle the technology so you can focus on what matters most."
        buttonText="Get Free Assessment"
      />
    </div>
  );
}
