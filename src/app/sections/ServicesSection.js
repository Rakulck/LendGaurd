export default function ServicesSection() {
  return (
    <section
      id="services-section"
      className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-24 pt-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            Our Services
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive loan verification services tailored for Optigo lenders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* GSE Loan Screening */}
          <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-xl"></div> */}
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
                Investor Management Portal
              </h3>
              <p className="text-xl text-gray-800 mb-8 leading-relaxed text-center transition-all duration-300 group-hover:text-gray-900">
                Specialized pre-screening for government-sponsored enterprise
                loans.
              </p>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* CMBS Loan Screening */}
          <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
            {/* <div className="absolute  bg-white/70 inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-xl"></div> */}
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
                Automated Underwriting
              </h3>
              <p className="text-xl text-gray-800 mb-8 leading-relaxed text-center transition-all duration-300 group-hover:text-gray-900">
                Efficient, reliable, and secure pre-screening for CMBS loans.
              </p>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Debt Fund Loan Screening */}
          <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50">
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
                Deal Flow Management
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
  );
}
