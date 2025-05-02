export default function FooterSection() {
  return (
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
                    href="mailto:info@crevolt.com"
                    className="hover:text-blue-400"
                  >
                    info@crevolt.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} CREvolt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
