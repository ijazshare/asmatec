import ServicesSection from "@/components/home/ServicesSection";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import ClientLogoBanner from "@/components/home/ClientLogoBanner";
import PricingSection from "@/components/home/PricingSection";
import ServiceAreas from "@/components/home/ServiceAreas";
import IndustriesSection from "@/components/home/IndustriesSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Client Logos */}
      <ClientLogoBanner />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Service Areas Section */}
      <ServiceAreas />

      {/* Final CTA */}
      <div className="w-full">
        <CTASection
          headline="Stop IT Problems Before They Disrupt Your Business"
          buttonText="Schedule Free Consultation"
          buttonLink="/contact"
        />
      </div>
    </>
  );
}
