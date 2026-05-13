import {
  Building2,
  Stethoscope,
  ShoppingBag,
  Truck,
  Building,
  Scale,
  HandHeart,
} from "lucide-react";

const industries = [
  { icon: Building2, label: "Professional Services" },
  { icon: Stethoscope, label: "Healthcare Clinics" },
  { icon: ShoppingBag, label: "Retail Businesses" },
  { icon: Truck, label: "Logistics Companies" },
  { icon: Building, label: "Commercial Offices" },
  { icon: Scale, label: "Law Firms" },
  { icon: HandHeart, label: "Non-Profits" },
];

export default function IndustriesSection() {
  return (
    <section className="w-full py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
            Industries We Serve
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Trusted by businesses across diverse industries.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <ind.icon className="h-6 w-6 text-[#0061FF]" />
              <span className="text-[13px] font-bold text-[#0A2540] text-center">
                {ind.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
