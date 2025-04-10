export default function RevolutionSection() {
  return (
    <section className="relative overflow-hidden py-32  from-[#e0f7fa] to-[#e0f2f1]">
      {/* Background decorative elements */}
      <div className="absolute top-[10%] left-[-5%] w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="relative mx-auto px-8 max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Revolutionizing Deal Flow with advanced underwriting options and an
            easy-to-access deal box.
          </h2>
        </div>
        <div className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
          <p className="mb-8 text-2xl text-gray-700">
            We are dedicated to supporting individual investors, family offices,
            and institutions in underwriting acquisitions/refinances with
            greater precision, speed, and confidence. Our secure and streamlined
            workflows are designed to help you assess risk more accurately,
            reduce uncertainty, and accelerate decision-making—all while
            enhancing profitability.
          </p>
          <p className="text-2xl text-gray-700">
            We leverage a data-driven approach to clarify even the most complex
            acquisition structures and support more consistent, informed
            underwriting outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
