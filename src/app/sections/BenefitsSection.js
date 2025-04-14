export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-8xl">
        <div className="flex flex-col md:flex-row gap-36 justify-center items-center">
          {/* Left side - Headings */}
          <div className="md:w-1/3 md:pr-12">
            <h2 className="text-7xl md:text-7xl xl:text-7xl font-bold text-gray-900 mb-12 tracking-tight">
              Key Benefits
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Experience the power of a unified platform designed to simplify
              real estate dealmaking from start to finish.
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
                      ⚡️ Speed
                    </h3>
                    <p className="text-xl text-gray-800 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                      Launch deals faster with automated underwriting, built-in
                      legal workflows, and instant investor onboarding — no more
                      switching between tools.
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
                      💰 Affordability
                    </h3>
                    <p className="text-xl text-gray-800 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                      An all-in-one solution that replaces 4+ platforms at a
                      fraction of the cost. Designed for sponsors and investors
                      who demand performance without the premium.
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
                      🔒 Security
                    </h3>
                    <p className="text-xl text-gray-800 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                      Your data and documents are protected with bank-grade
                      encryption and secure compliance workflow — from
                      underwriting to capital calls.
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
  );
}
