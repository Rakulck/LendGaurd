'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import FooterSection from '../../sections/FooterSection';
import CTAButtons from '../../../components/CTAButtons';

export default function WhyUs() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  const benefits = [
    {
      title: "Industry Knowledge",
      description: "With a focus exclusively on GSE lending solutions, our team has a deep understanding of the regulatory and operational challenges you face. We leverage our knowledge to provide services that are accurate, compliant, and effective."
    },
    {
      title: "Tailored Solutions",
      description: "We recognize that no two lenders are the same. Our solutions are fully customized to align with your specific goals, lending guidelines, and operational requirements, ensuring a perfect fit for your needs."
    },
    {
      title: "Cutting-Edge Technology",
      description: "Our processes are supported by the latest technology, enabling fast and reliable pre-screening and loan sizing. This reduces the time to close transactions, helping you serve borrowers more effectively."
    },
    {
      title: "Data-Driven Insights",
      description: "We go beyond the numbers, delivering actionable insights that empower you to make smarter, more strategic lending decisions. From market trends to borrower analysis, our data solutions drive results."
    },
    {
      title: "Commitment to Excellence",
      description: "At LendGaurd, we are driven by a commitment to quality, precision, and client satisfaction. Every service we provide is backed by rigorous attention to detail and a passion for helping lenders succeed."
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h1 className="text-6xl mt-10 md:text-7xl font-bold mb-6">Why Choose LendGaurd?</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
            <div className="relative w-full h-full min-h-[600px]">
              <img 
                src="/img.jpg" 
                alt="Background" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="space-y-8">
              <div className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-6 py-3 inline-block mb-8 shadow-lg">
                    <h2 className="text-2xl font-bold">The Partner You Can Trust</h2>
                  </div>
                  <p className="text-2xl leading-relaxed text-gray-800 transition-all duration-300 group-hover:text-gray-900">
                    We combine industry knowledge, innovative technology, and a client-centric approach to provide lending solutions that truly add value. Partner with us to transform your lending operations and achieve results you can count on.
                  </p>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid - First Row (3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300">
                  {benefit.title === "Industry Knowledge" && (
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-8 mx-auto bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300">
                      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  )}
                  {benefit.title === "Tailored Solutions" && (
                    <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mb-8 mx-auto">
                      <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                  )}
                  {benefit.title === "Cutting-Edge Technology" && (
                    <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mb-8 mx-auto">
                      <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold mb-4 text-center text-gray-900">{benefit.title}</h3>
                  <p className="text-xl text-gray-800 leading-relaxed text-center transition-all duration-300 group-hover:text-gray-900">
                    {benefit.description}
                  </p>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Benefits Grid - Second Row (2 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {benefits.slice(3, 5).map((benefit, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300">
                  {benefit.title === "Data-Driven Insights" && (
                    <div className="w-20 h-20 bg-indigo-100 rounded-xl flex items-center justify-center mb-8 mx-auto relative bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)]">
                      <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  )}
                  {benefit.title === "Commitment to Excellence" && (
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-8 mx-auto bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.2)] transition-all duration-300">
                      <svg className="w-12 h-12 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold mb-4 text-center text-gray-900">{benefit.title}</h3>
                  <p className="text-xl text-gray-800 leading-relaxed text-center transition-all duration-300 group-hover:text-gray-900">
                    {benefit.description}
                  </p>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          <section className="text-center py-12 mb-16">
          <h2 className="text-6xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Your Success is Our Priority</h2>
          <p className="text-2xl mb-8">Join the growing network of lenders who trust LendGaurd to optimize their operations and achieve their goals. Experience the difference of working with a partner who truly understands your business.</p>
          <div className="flex justify-center">
            <CTAButtons />
          </div>
        </section>
        </div>
              
      </div>

      <FooterSection />
    </div>
  );
}
    