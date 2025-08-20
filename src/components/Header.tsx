import { useEffect, useState } from "react";

export function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    // Lock/unlock body scroll on mobile menu open
    if (isBurgerOpen) {
      const scrollY = window.scrollY;
      document.documentElement.style.overflowY = "scroll";
      document.documentElement.style.height = "100vh";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflowY = "";
      document.documentElement.style.height = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
    }
    return () => {
      document.documentElement.style.overflowY = "";
      document.documentElement.style.height = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
    };
  }, [isBurgerOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full bg-black bg-opacity-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-white text-2xl font-semibold">
              abc ai
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-1 cursor-pointer group">
                <span className="text-white hover:text-gray-300 transition-colors">Products</span>
                <svg className="w-4 h-4 text-white group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer group">
                <span className="text-white hover:text-gray-300 transition-colors">Features</span>
                <svg className="w-4 h-4 text-white group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <a href="/pricing" className="text-white hover:text-gray-300 transition-colors">
                Pricing
              </a>
              <div className="flex items-center space-x-1 cursor-pointer group">
                <span className="text-white hover:text-gray-300 transition-colors">Resources</span>
                <svg className="w-4 h-4 text-white group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <a href="/careers" className="text-white hover:text-gray-300 transition-colors">
                Careers
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="/login" className="text-white hover:text-gray-300 transition-colors font-medium">
                Log in
              </a>
              <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer" onClick={() => setIsBurgerOpen((v) => !v)} role="button" aria-label="Toggle menu">
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isBurgerOpen ? "rotate-45 translate-y-1" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isBurgerOpen ? "-rotate-45 -translate-y-1" : ""}`}></div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden mt-4 transition-all duration-300 ${isBurgerOpen ? "opacity-100 visible max-h-96" : "opacity-0 invisible max-h-0 overflow-hidden"}`}>
            <div className="space-y-4 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-white">Products</span>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Features</span>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <a href="/pricing" className="block text-white">
                Pricing
              </a>
              <div className="flex items-center justify-between">
                <span className="text-white">Resources</span>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <a href="/careers" className="block text-white">
                Careers
              </a>
              <div className="pt-4 border-t border-gray-700 space-y-4">
                <a href="/login" className="block text-white font-medium">
                  Log in
                </a>
                <a href="/pricing" className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-center transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
