import { CheckCircle } from "lucide-react";
import { cyberFeatures, securityStack } from "@/constants/cybersecurity";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export default function CybersecurityPage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <PageHero
        title="Cybersecurity Solutions"
        description="Protect your business from evolving cyber threats with our comprehensive security solutions designed for small and mid-sized businesses."
      />

      {/* Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6">
            {cyberFeatures.map((f) => (
              <div
                key={f.title}
                className="p-7 cursor-default bg-white rounded-xl border border-[#e2e8f0] card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-md bg-[#E8F1FB] flex items-center justify-center mb-5">
                  <f.icon
                    className="h-5 w-5 text-[#3b82f6]"
                    strokeWidth={1.5}
                  />
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

      {/* Security Stack */}
      <section className="py-16 md:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2137] mb-10 text-center">
            Security Stack
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {securityStack.map((item) => (
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

      {/* CTA */}
      <PageCTA
        title="Upgrade Your Network"
        description="Strengthen Your Cybersecurity"
        buttonText="Get a Network Assessment"
      />
    </main>
  );
}
