import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ChevronLeft, 
  CheckCircle, 
  Shield, 
  Target,
  Settings,
  ArrowRight
} from "lucide-react";
import { caseStudies } from "@/constants/case-studies";
import PageCTA from "@/components/PageCTA";

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="pt-14">
      {/* Hero Section - Matched to site style */}
      <section className="bg-[#0A1A2F] py-20 md:py-28 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center space-x-2 text-xs font-medium text-white/50 uppercase tracking-widest">
              <li><Link href="/case-study" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white">{study.client}</li>
            </ol>
          </nav>
          <div className="inline-block bg-[#1E81EF]/10 text-[#1E81EF] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest mb-6 border border-[#1E81EF]/20">
            {study.category} Case Study
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {study.title}
          </h1>
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {study.overview}
          </p>
        </div>
      </section>

      {/* Highlights / Stats */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-3 gap-8 text-center">
            {study.stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#0A1A2F] mb-1">{s.value}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FEE2E2] flex items-center justify-center mb-5">
                <Shield className="h-6 w-6 text-[#EF4444]" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f2137] mb-6">
                The Challenge
              </h2>
              <p className="text-[#64748b] text-[15px] md:text-base leading-relaxed">
                {study.challenge}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white p-2">
              <img src={study.images[0]} alt="Challenge view" className="rounded-xl w-full h-auto object-cover aspect-video" />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section: The 2 Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2137] mb-4">Our Two-Pillar Approach</h2>
            <div className="w-12 h-1 bg-[#3b82f6] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#DCE7F5] flex items-center justify-center text-[#3b82f6]">
                  <Target size={20} />
                </div>
                <h3 className="text-base font-bold uppercase tracking-widest text-[#3b82f6]">
                  Strategic Management
                </h3>
              </div>
              <h4 className="text-xl font-bold text-[#0f2137] mb-4">{study.pillar1.title}</h4>
              <p className="text-[#64748b] text-[14px] leading-relaxed mb-8">
                {study.pillar1.description}
              </p>
              <ul className="space-y-3">
                {study.pillar1.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-[#374151]">
                    <CheckCircle className="h-4 w-4 text-[#3b82f6] shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#DCE7F5] flex items-center justify-center text-[#3b82f6]">
                  <Settings size={20} />
                </div>
                <h3 className="text-base font-bold uppercase tracking-widest text-[#3b82f6]">
                  Expert Implementation
                </h3>
              </div>
              <h4 className="text-xl font-bold text-[#0f2137] mb-4">{study.pillar2.title}</h4>
              <p className="text-[#64748b] text-[14px] leading-relaxed mb-8">
                {study.pillar2.description}
              </p>
              <ul className="space-y-3">
                {study.pillar2.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-[#374151]">
                    <CheckCircle className="h-4 w-4 text-[#3b82f6] shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Image Gallery */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#3b82f6] mb-4">
                Results & Impact
              </h4>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0f2137] mb-8">
                Driving tangible business success.
              </h3>
              <div className="space-y-6">
                {study.results.map((r, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <CheckCircle size={18} />
                    </div>
                    <p className="text-slate-700 text-base font-medium pt-1 italic">
                      "{r}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {study.images.slice(1, 5).map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-slate-200">
                  <img src={img} alt={`Gallery item ${i}`} className="w-full h-full object-cover aspect-square" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PageCTA
        title="Ready to Build Your Success Story?"
        description="Let's transform your business challenges into scalable digital assets. Our experts are ready to consult on your next move."
        buttonText="Get Free Assessment"
      />
    </div>
  );
}
