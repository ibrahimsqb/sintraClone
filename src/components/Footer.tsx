const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 m-[45px]">
          {/* Logo and Copyright */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="text-2xl font-bold text-blue-600 mb-8 block">
              abc ai
            </a>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Copyright © 2025</p>
              <p>PlayOS, Inc.</p>
              <p>All rights reserved</p>
            </div>
          </div>

          {/* Features Column */}
          <div>
            <h3 className="font-medium text-gray-900 text-lg mb-6">Features</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="/helpers" className="hover:text-gray-900 transition-colors">
                  Abc ai Helpers
                </a>
              </li>
              <li>
                <a href="/brain-ai" className="hover:text-gray-900 transition-colors">
                  Brain AI
                </a>
              </li>
              <li>
                <a href="/power-ups" className="hover:text-gray-900 transition-colors">
                  Power-ups
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-medium text-gray-900 text-lg mb-6">Resources</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="/blog" className="hover:text-gray-900 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/case-studies" className="hover:text-gray-900 transition-colors">
                  Case studies
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="font-medium text-gray-900 text-lg mb-6">About Us</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="/affiliate" className="hover:text-gray-900 transition-colors">
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-medium text-gray-900 text-lg mb-6">Support</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="/help" className="hover:text-gray-900 transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/plans" className="hover:text-gray-900 transition-colors">
                  Plans and Payments
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-900 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-16 pt-8 border-t border-gray-300 m-[45px]">
          <h3 className="font-medium text-gray-900 text-lg mb-6">Legal</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-gray-600">
            <a href="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy policy
            </a>
            <a href="/terms" className="hover:text-gray-900 transition-colors">
              Terms and conditions
            </a>
            <a href="/refund" className="hover:text-gray-900 transition-colors">
              Refund policy
            </a>
            <a href="/guarantee" className="hover:text-gray-900 transition-colors">
              Money-Back Guarantee
            </a>
            <a href="/policies" className="hover:text-gray-900 transition-colors">
              Other policies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
