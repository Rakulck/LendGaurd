import Navbar from "../components/Navbar.jsx";
import CTAButtons from "../components/CTAButtons.jsx";
import FooterSection from "../../sections/FooterSection.js";
import RevolutionSection from "../../sections/RevolutionSection.js";
import BenefitsSection from "../../sections/BenefitsSection.js";
import HeroSection from "../../sections/HeroSection.js";
import ServicesSection from "../../sections/ServicesSection.js";

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
