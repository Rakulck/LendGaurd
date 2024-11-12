export default function FooterSection() {
  return (
    <footer className="relative z-10 mt-20">
      <div className="backdrop-blur-md bg-gradient-to-b from-black/80 to-black/90 text-white py-8 shadow-2xl">
        <div className="container mx-auto px-6">
          {/* Main Footer Content - Horizontal Layout */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8 mb-8">
            {/* Company Info */}
            <div className="flex items-center space-x-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
                Company Name
              </h3>

              {/* Quick Links */}
              <nav>
                <ul className="flex items-center space-x-6">
                  <li>
                    <a
                      href="/"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Contact and Social */}
            <div className="flex items-center space-x-8">
              {/* Contact Info */}
              <div className="flex items-center space-x-6">
                <a
                  href="tel:(123)456-7890"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-5 h-5 text-blue-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (123) 456-7890
                </a>
                <a
                  href="mailto:info@company.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-5 h-5 text-blue-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@company.com
                </a>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="group">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-200">
                    <svg
                      className="h-4 w-4 text-gray-300 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                  <span className="sr-only">Twitter</span>
                </a>
                {/* Add more social media icons as needed */}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>
              &copy; {new Date().getFullYear()} Company Name. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
