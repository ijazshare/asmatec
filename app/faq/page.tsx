"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "@/constants/faq";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export default function FAQPage() {
  return (
    <main className="pt-14">
      <PageHero
        title="Frequently Asked Questions"
        description="Common questions from businesses, nonprofits, and organizations exploring IT and technology consulting partnerships."
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-[#e8edf2] hover:border-[#3b82f6]/20 transition-colors "
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-[#0f2137] hover:text-[#3b82f6] hover:no-underline py-5 transition-colors cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#64748b] leading-relaxed text-[15px] md:text-base pb-6 pr-8 cursor-pointer">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <PageCTA
        title="Still have questions?"
        description="Our team is here to provide clear answers and practical technology advice."
        buttonText="Get Free Assessment"
      />
    </main>
  );
}
