import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import NavbarSection from "@/components/organisms/NavbarSection";
import FeatureSection from "@/components/organisms/FeatureSection";
import ContactPage from "@/components/organisms/ContactPage";

export default function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <NavbarSection />
      <FeatureSection />
      <TestimonialsSection />
      <ContactPage />
    </div>
  );
}
