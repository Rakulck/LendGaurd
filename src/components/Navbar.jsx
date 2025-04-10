"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToServices = (e) => {
    e.preventDefault();
    
    // Check if we're on the homepage
    if (window.location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      window.location.href = '/#services-section';
      return;
    }
    
    // If on homepage, scroll to services
    const servicesSection = document.querySelector('#services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/30 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-5xl font-bold text-gray-800 tracking-tight">
              LendGuard
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <a
                href="#services-section"
                onClick={scrollToServices}
                className="text-2xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                Services
              </a>
               <Link href="/whyus" className="text-2xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300">
                Why LendGaurd
              </Link>
              <Link
                href="/about"
                className="text-2xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-2xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="text-2xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300"
              >
               Deal Room
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-2 bg-white border-t">
          <a
            href="#services-section"
            onClick={scrollToServices}
            className="block px-3 py-2 text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-lg cursor-pointer"
          >
            Services
          </a>
          <Link
            href="/whyus"
            className="block px-3 py-2 text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
          >
            Why LendGaurd
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="block px-3 py-2 text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
} 