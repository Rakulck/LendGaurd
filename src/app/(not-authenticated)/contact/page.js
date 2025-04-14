import CalendlyWidget from "../../../components/CalendlyWidget";
import Navbar from "../../../components/Navbar";
import FooterSection from "../../sections/FooterSection";

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-8xl mx-auto">
            <div className="mb-20 text-center">
              <h1 className="text-7xl mt-20 md:text-6xl font-bold mb-8">
                Schedule a Meeting
              </h1>
              <div className="w-32 h-1.5 bg-blue-600 mb-8 mx-auto"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/2">
                <img
                  src="/meeting.jpg"
                  alt="Schedule a consultation"
                  className="rounded-lg shadow-xl w-full h-[600px] object-cover"
                />
              </div>

              <div className="lg:w-1/2">
                <div className="mb-12">
                  <p className="text-2xl leading-relaxed">
                    Ready to streamline your real estate deals from underwriting
                    to investor management? Book a quick consultation with us to
                    explore how our platform can simplify your operations,
                    accelerate fundraising, and improve investor engagement.
                    Whether you're a sponsor, syndicator, or active investor,
                    we're here to help you scale smarter.
                  </p>
                  <p className="text-2xl mt-5 leading-relaxed">
                    Just choose a time, and let’s talk.
                  </p>
                </div>

                <div className="w-full">
                  <CalendlyWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
