import Navbar from "../src/components/Navbar";
import CTAButtons from "../src/components/CTAButtons";

export default function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/bg_image.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <Navbar />
        <section className="min-h-[calc(100vh-80px)] flex items-center">
          {" "}
          {/* Adjusted height accounting for navbar */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Fast, Secure Loan Pre-Screening Solutions
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                Streamlinewdewq your loan process with our advanced
                pre-screening platform designed for Optigo lenders.
              </p>
              <CTAButtons />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
