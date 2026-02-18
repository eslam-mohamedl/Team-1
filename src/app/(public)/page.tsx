import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import NavbarSection from "@/components/organisms/NavbarSection";
import FeatureSection from "@/components/organisms/FeatureSection";
import FAQSection from "@/components/organisms/FAQSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <NavbarSection />
      <FeatureSection />
      <TestimonialsSection/>
      <FAQSection />
    </div>
  );
}
