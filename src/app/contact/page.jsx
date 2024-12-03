import CalendlyWidget from '../../components/CalendlyWidget';
import Navbar from '../../components/Navbar';
import FooterSection from '../../../sections/FooterSection';


export default function Contact() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-8xl mx-auto">
            <div className="mb-20 text-center">
              <h1 className="text-7xl mt-20 md:text-6xl font-bold mb-8">Schedule a Meeting</h1>
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
                    Ready to transform your lending operations? Book a consultation with us to discuss your needs and discover how our solutions can empower your business. Simply reach out via phone or email, and we'll get back to you promptly.
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