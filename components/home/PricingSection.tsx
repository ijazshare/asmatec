import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    title: "Lite Plan",
    price: "$99",
    unit: "user / month",
    features: [
      "Remote monitoring",
      "Help desk support",
      "Basic endpoint protection",
      "Monthly reporting",
    ],
    highlighted: false,
  },
  {
    title: "Standard Plan",
    price: "$149",
    unit: "user / month",
    features: [
      "Everything in Lite",
      "Advanced cybersecurity",
      "Patch management",
      "Priority support",
      "Quarterly reviews",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise Plan",
    price: "$199",
    unit: "user / month",
    features: [
      "Everything in Standard",
      "Dedicated account manager",
      "Custom security policies",
      "24/7 monitoring",
      "On-site support",
    ],
    highlighted: false,
  },
  {
    title: "Server Management",
    price: "$199",
    unit: "server / month",
    features: [
      "Server monitoring",
      "Patch management",
      "Backup management",
      "Performance optimization",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-20 md:py-28 ">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2137] mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#94a3b8] text-sm">
            Predictable monthly costs with no hidden fees.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-xl border p-7 h-full transition-all duration-300 ${
                plan.highlighted
                  ? "border-[#3b82f6] bg-[#F3F8FD] shadow-xl  z-10"
                  : "border-[#e2e8f0] bg-white hover:shadow-md"
              }`}
            >
              {/* Most Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1e3a5f] text-white text-[11px] font-semibold rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="text-[15px] font-bold text-[#0f2137] mb-3">
                {plan.title}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-[#0f2137]">
                  {plan.price}
                </span>
                <span className="text-[#94a3b8] text-xs">/ {plan.unit}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 grow">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-[13px] text-[#64748b]"
                  >
                    <Check
                      className="h-3.5 w-3.5 text-[#3b82f6] shrink-0"
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link
                href="/contact"
                className={`w-full text-center py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-[#1e3a5f] text-white hover:bg-[#1e3a5f]/90"
                    : "border border-[#e2e8f0] text-[#0f2137] hover:bg-gray-50"
                }`}
              >
                Request Quote
              </Link>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[#94a3b8] text-[12px] mt-10">
          Onboarding fees apply depending on company size.{" "}
          <Link
            href="/contact"
            className="text-[#3b82f6] font-semibold hover:underline"
          >
            Request a custom quote →
          </Link>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
