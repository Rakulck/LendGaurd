export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            Our Services
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive loan verification services tailored for Optigo lenders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Quick Summary Card 1 */}
          <div className="bg-white rounded-2xl p-10 shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              GSE Loan Screening
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Specialized pre-screening for government-sponsored enterprise
              loans.
            </p>
          </div>

          {/* Quick Summary Card 2 */}
          <div className="bg-white rounded-2xl p-10 shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              CMBS Loan Screening
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Efficient, reliable, and secure pre-screening for CMBS loans.
            </p>
          </div>

          {/* Quick Summary Card 3 */}
          <div className="bg-white rounded-2xl p-10 shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Debt Fund Loan Screening
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Flexible screening solutions for debt fund lenders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
