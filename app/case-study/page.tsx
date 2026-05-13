import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/constants/case-studies";
import PageCTA from "@/components/PageCTA";
import Image from "next/image";

const CaseStudyPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}

      {/* Hero */}
      <section className="bg-[#0A1A2F] py-20 md:py-28 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Real Solutions, Proven Results
          </h1>
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
            Discover how we have helped businesses across New York, New Jersey,
            and Pennsylvania overcome complex IT challenges and achieve their
            goals.
          </p>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.slug}
                className="group bg-white rounded-md overflow-hidden border border-slate-200 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image Wrap */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={study.images[0]}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0A1A2F]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest border border-white/10 shadow-lg">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-md bg-[#DCE7F5] flex items-center justify-center text-[#3b82f6]">
                      <study.icon size={20} />
                    </div>
                    <span className="text-xs font-semibold text-slate-400">
                      {study.client}
                    </span>
                  </div>

                  <Link href={`/case-study/${study.slug}`}>
                    <h3 className="text-xl font-bold text-[#0A1A2F] mb-4 group-hover:text-[#3b82f6] transition-colors leading-snug">
                      {study.title}
                    </h3>
                  </Link>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8 grow">
                    {study.overview}
                  </p>

                  <Link
                    href={`/case-study/${study.slug}`}
                    className="flex items-center text-[#1e3a5f] font-bold text-sm hover:gap-1.5 transition-all"
                  >
                    View Case Study{" "}
                    <ArrowRight size={16} className="ml-2 text-[#3b82f6]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter (Simple Preview) */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Client Satisfied", val: "100+" },
              { label: "Successful Projects", val: "50+" },
              { label: "Disaster Recovery", val: "20+" },
              { label: "Uptime Guaranteed", val: "99.9%" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-[#0A1A2F] mb-1">
                  {s.val}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Thinking of Scaling Your Infrastructure?"
        description="Let's build a success story together. Our expert team is ready to design your next solution."
        buttonText="Get Started Together"
      />
    </div>
  );
};

export default CaseStudyPage;
