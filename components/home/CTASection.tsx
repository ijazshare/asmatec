import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTASectionProps {
  headline: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection = ({ headline, buttonText, buttonLink }: CTASectionProps) => {
  return (
    <div className="bg-[#0A2540] py-20 px-4 text-center border-b border-white/10 w-full">
      <div className="container mx-auto max-w-4xl space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          {headline}
        </h2>
        <div className="pt-4">
          <Button asChild className="bg-[#1E81EF] hover:bg-[#1E81EF]/90 text-white rounded-md px-10 py-7 text-lg font-bold shadow-xl shadow-blue-500/20 active:scale-95 transition-all">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

