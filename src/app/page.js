import Navbar from "../components/Navbar.jsx";
import CTAButtons from "../components/CTAButtons.jsx";
import FooterSection from "../../sections/FooterSection.js";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative bg-[url('/bg_image.jpg')] bg-cover bg-center">
        <div className="relative z-10">
          <Navbar />
          <section className="hero-section relative h-screen">
            <div className="relative z-10 h-full">
              <div className="container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Fast, Secure Loan Pre-Screening Solutions
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Streamline your loan process with our advanced pre-screening
                    platform designed for Optigo lenders.
                  </p>
                  <CTAButtons />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main>
        {/* Benefits Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 max-w-8xl">
            <div className="flex flex-col md:flex-row gap-36 justify-center items-center">
              {/* Left side - Headings */}
              <div className="md:w-1/3 md:pr-12">
                <h2 className="text-6xl md:text-8xl xl:text-9xl font-bold text-gray-900 mb-12 tracking-tight">
                  Key Benefits
                </h2>
                <p className="text-2xl text-gray-600 leading-relaxed">
                  Experience the advantages of our specialized loan
                  pre-screening platform
                </p>
              </div>

              {/* Right side - Benefits Cards */}
              <div className="md:w-2/3 flex items-center md:pl-12">
                <div className="space-y-20">
                  {/* Speed Benefit */}
                  <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-xl"></div>
                    <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300 flex items-center gap-16">
                      <div className="w-24 h-24 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-12 h-12 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                          Speed
                        </h3>
                        <p className="text-xl text-gray-800 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                          Accelerate loan pre-screening without sacrificing
                          accuracy or security.
                        </p>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Affordability Benefit */}
                  <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-xl"></div>
                    <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300 flex items-center gap-16">
                      <div className="w-24 h-24 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-12 h-12 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                          Affordability
                        </h3>
                        <p className="text-xl text-gray-800 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                          Achieve cost-effective solutions tailored to the
                          specific needs of Optigo lenders.
                        </p>
                      </div>
                      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      <div className="absolute -left-4 -top-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Security Benefit */}
                  <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-xl"></div>
                    <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300 flex items-center gap-16">
                      <div className="w-24 h-24 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-12 h-12 text-purple-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                          Security
                        </h3>
                        <p className="text-xl text-gray-800 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                          Rest assured with secure processing that protects your
                          data at every step.
                        </p>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services-section"
          className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-24 pt-32 relative overflow-hidden"
        >
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                Our Services
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive loan verification services tailored for Optigo
                lenders
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* GSE Loan Screening */}
              <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300">
                  <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mb-8 mx-auto">
                    <svg
                      className="w-12 h-12 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
                    GSE Loan Screening
                  </h3>
                  <p className="text-xl text-gray-800 mb-8 leading-relaxed text-center transition-all duration-300 group-hover:text-gray-900">
                    Specialized pre-screening for government-sponsored
                    enterprise loans.
                  </p>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>

              {/* CMBS Loan Screening */}
              <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300">
                  <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mb-8 mx-auto">
                    <svg
                      className="w-12 h-12 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
                    CMBS Loan Screening
                  </h3>
                  <p className="text-xl text-gray-800 mb-8 leading-relaxed text-center transition-all duration-300 group-hover:text-gray-900">
                    Efficient, reliable, and secure pre-screening for CMBS
                    loans.
                  </p>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Debt Fund Loan Screening */}
              <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300">
                  <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mb-8 mx-auto">
                    <svg
                      className="w-12 h-12 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
                    Debt Fund Loan Screening
                  </h3>
                  <p className="text-xl text-gray-800 mb-8 leading-relaxed text-center transition-all duration-300 group-hover:text-gray-900">
                    Flexible screening solutions for debt fund lenders.
                  </p>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10">
        <div className="backdrop-blur-md bg-black text-white">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-blue-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="tel:+12027254071" className="hover:text-blue-400">
                      +1 (202) 725 4071
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:kavinsv01@gmail.com"
                      className="hover:text-blue-400"
                    >
                      kavinsv01@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
              <p>
                © {new Date().getFullYear()} LendGuard. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
