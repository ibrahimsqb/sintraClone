import { useState, useCallback, useEffect } from "react";

import newBot1 from "../assets/updatedBot1.jpeg";
import newBot2 from "../assets/updatedBot2.jpeg";
import newBot3 from "../assets/updatedBot3.jpeg";

export function HomeHelpers() {
  const cards = [
    {
      href: "/penn",
      img: newBot1,
      title: "Penn",
      desc: "Copywriter. Dedicated to writing compelling copy for your ads, blog posts, and marketing materials.",
    },
    {
      href: "/scouty",
      img: newBot2,
      title: "Scouty",
      desc: "Recruiter. Turning hiring challenges into opportunities, crafting magnetic job posts.",
    },
    {
      href: "/scouty",
      img: newBot3,
      title: "Scouty",
      desc: "Recruiter. Turning hiring challenges into opportunities, crafting magnetic job posts.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSingleView, setIsSingleView] = useState(false);

  // Determine if we should show single-card carousel (< 1024px)
  useEffect(() => {
    const update = () => setIsSingleView(window.innerWidth < 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = cards.length;
  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  return (
    <section className="bg-black py-20 flex flex-col items-center mb-10" data-scroll-section="helpers">
      <div className="w-full px-6 max-w-5xl mx-auto relative">
        {/* Gradient curtains */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent"></div>
        </div>

        {isSingleView ? (
          <>
            {/* Mobile/Tablet: Single card carousel with arrows */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                aria-label="Previous"
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M15.78 4.22a.75.75 0 010 1.06L9.06 12l6.72 6.72a.75.75 0 11-1.06 1.06l-7.25-7.25a.75.75 0 010-1.06l7.25-7.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Track */}
              <div className="overflow-hidden w-full max-w-md mx-auto">
                <div
                  className="flex transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {cards.map((card, i) => (
                    <div key={i} className="min-w-full px-0">
                      <div className="bg-black-800 p-6 rounded-lg hover:bg-black-700 transition-colors duration-200 relative">
                        <a href={card.href} className="block">
                          <div className="flex flex-col">
                            <img className="border rounded-xl" src={card.img} alt={card.title} />
                            <div className="text-white text-2xl font-bold mb-2 mt-4">{card.title}</div>
                            <div className="text-gray-400 text-md leading-relaxed">{card.desc}</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                aria-label="Next"
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M8.22 19.78a.75.75 0 010-1.06L14.94 12 8.22 5.28a.75.75 0 011.06-1.06l7.25 7.25a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-white" : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          // Desktop: 3-card static grid, no arrows
          <div className="grid grid-cols-3 gap-5">
            {cards.map((card, i) => (
              <div key={i} className="bg-black-800 p-6 rounded-lg hover:bg-black-700 transition-colors duration-200">
                <a href={card.href} className="block">
                  <div className="flex flex-col">
                    <img className="border rounded-xl" src={card.img} alt={card.title} />
                    <div className="text-white text-2xl font-bold mb-2 mt-4">{card.title}</div>
                    <div className="text-gray-400 text-md leading-relaxed">{card.desc}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Button */}
      <a href="/pricing" className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-3xl text-lg font-medium transition-colors duration-200">
        Get Helpers
      </a>
    </section>
  );
}
