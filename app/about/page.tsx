import { aboutSections } from "@/constants/about";
import PageCTA from "@/components/PageCTA";

export default function AboutPage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="bg-[#0A1A2F] py-20 md:py-28 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            About AsmaTec
          </h1>
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
            Your trusted partner for managed IT services, cybersecurity, and
            network infrastructure in the tri-state area.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6">
            {aboutSections.map((s) => (
              <div
                key={s.title}
                className="p-7 cursor-default bg-white rounded-xl border border-[#e2e8f0] card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-md bg-[#E8F1FB] flex items-center justify-center mb-5">
                  <s.icon
                    className="h-5 w-5 text-[#3b82f6]"
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="font-bold text-[15px] text-[#0f2137] mb-2">
                  {s.title}
                </h2>
                <p className="text-[#64748b] text-[13px] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Partner with AsmaTec for Your IT Needs"
        description="Let's build a reliable IT foundation for your business
            together."
        buttonText="Contact Us Today"
      />
    </main>
  );
}
