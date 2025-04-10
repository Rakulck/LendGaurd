import Navbar from "../../components/Navbar.jsx";
import CTAButtons from "../../components/CTAButtons.jsx";

export default function HeroSection() {
  return (
    <div className="relative bg-[url('/hero_img.jpeg')] bg-cover bg-center">
      <div className="relative z-10">
        <Navbar />
        <section className="hero-section relative h-screen">
          <div className="relative z-10 h-full">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Fast, Secure Deal Flow Solutions
                </h1>
                <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                  Streamline and grow your real estate operations with our
                  expert analytics solutions. Our team delivers exceptional
                  talent and proven systems to help you scale efficiently and
                  improve profitability.
                </p>
                <CTAButtons />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
