import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import NavbarSection from "@/components/organisms/NavbarSection";
import FeatureSection from "@/components/organisms/FeatureSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <NavbarSection />
      <FeatureSection />
      <TestimonialsSection/>
    </div>
  );
}
