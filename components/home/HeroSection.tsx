import Link from "next/link";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A1A2F] py-28 md:py-48 px-4">
      <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center overflow-hidden">
        <Shield className="w-[600px] h-[600px] text-white" />
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1A2F] via-transparent to-[#0A1A2F]" />
      </div>

      <div className="relative z-10 container mx-auto text-center md:text-left max-w-7xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
          Secure, Reliable IT
          <br /> Infrastructure for Growing
          <br /> Businesses
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
          Managed IT services, cybersecurity, and network infrastructure
          solutions for businesses in New York, New Jersey, and Pennsylvania.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
          <Button
            asChild
            className="bg-[#1E81EF] hover:bg-[#1E81EF]/90 text-white rounded-md px-10 py-7 text-sm font-bold shadow-xl shadow-blue-500/10"
          >
            <Link href="/contact">Get Free Assessment</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-md px-10 py-7 text-sm font-bold bg-transparent"
          >
            <Link href="/case-study">See Our Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
