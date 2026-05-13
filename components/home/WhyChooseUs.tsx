import { Monitor, Lock, Network, Headphones, LucideIcon } from "lucide-react";

const benefits: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Monitor,
    title: "Proactive IT Monitoring",
    desc: "24/7 monitoring to detect and resolve issues before they impact your business.",
  },
  {
    icon: Lock,
    title: "Advanced Cybersecurity",
    desc: "Multi-layered security protecting your data, endpoints, and network perimeter.",
  },
  {
    icon: Network,
    title: "Reliable Infrastructure",
    desc: "Enterprise-grade network solutions that keep your business connected.",
  },
  {
    icon: Headphones,
    title: "Fast IT Support",
    desc: "Responsive help desk with rapid resolution times for critical issues.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2137] mb-4">
            Why Choose AsmaTec
          </h2>
          <p className="text-[#94a3b8] text-base max-w-md mx-auto">
            We go beyond fixing problems — we prevent them.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon box */}
              <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-6 group-hover:bg-[#dbeafe] transition-colors duration-300">
                <b.icon className="h-6 w-6 text-[#3b82f6]" strokeWidth={1.5} />
              </div>

              <h3 className="text-[15px] font-bold mb-2 text-[#0f2137]">
                {b.title}
              </h3>
              <p className="text-[#94a3b8] text-[13px] leading-6 max-w-[200px]">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
