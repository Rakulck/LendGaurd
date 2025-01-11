import FooterSection from "./sections/FooterSection";
import RevolutionSection from "./sections/RevolutionSection";
import BenefitsSection from "./sections/BenefitsSection";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <HeroSection />

      <main>
        {/* Overview Section */}
        <RevolutionSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Services Section */}
        <ServicesSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
