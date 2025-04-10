import Navbar from '../../../components/Navbar.jsx'
import Image from 'next/image'
import FooterSection from '../../sections/FooterSection'
export default function About() {
  return (
    <div className="relative min-h-screen">
      {/* Full-page background image - updated z-index and added opacity check */}
      {/* <div 
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/team_bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      /> */}
      
      {/* Semi-transparent overlay - updated z-index */}
      {/* <div 
        className="fixed inset-0 bg-white/70"
        style={{ zIndex: 1 }}
      /> */}

      {/* Content - updated z-index */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h1 className="text-6xl mt-10 md:text-7xl font-bold mb-6">About Us</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Updated grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left side - team_bg Image */}
            <div className="relative w-full h-full min-h-[600px]">
              <Image 
                src="/team_bg.jpg"
                alt="Team Background"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
                priority
              />
            </div>

            {/* Right side - Cards */}
            <div className="space-y-8">
              {/* Mission Card */}
              <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-6 py-3 inline-block mb-8 shadow-lg">
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-2xl leading-relaxed text-gray-800 transition-all duration-300 group-hover:text-gray-900">
                    To provide real estate lenders with secure, fast, and affordable loan sizing services, 
                    tailored to the demands to increase profit margins.
                  </p>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Process Card */}
              <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-6 py-3 inline-block mb-8 shadow-lg">
                    <h2 className="text-2xl font-bold">Our Process</h2>
                  </div>
                  <p className="text-2xl leading-relaxed text-gray-800 transition-all duration-300 group-hover:text-gray-900">
                    We understand the importance of efficiency and accuracy in the loan pre-screening process. 
                    Our team brings industry knowledge that delivers results to stay competitive and compliant.
                  </p>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all duration-300"></div>
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection /> 
    </div>
  );
} 