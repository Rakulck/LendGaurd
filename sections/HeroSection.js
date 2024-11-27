import Navbar from "../src/components/Navbar";
import CTAButtons from "../src/components/CTAButtons";

export default function HeroSection() {
  return (
    <div className="relative bg-[url('/bg_image.jpg')] bg-cover bg-center">
      <div className="relative z-10">
        <Navbar />
        <section className="hero-section relative h-screen">
          <div className="relative z-10 h-full">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Fast, Secure Loan Pre-Screening & Sizing Solutions
                </h1>
                <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                  Streamline and grow your real estate lending operations with
                  our expert offshore solutions. Our team delivers exceptional
                  talent and proven systems to help you scale efficiently and
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
