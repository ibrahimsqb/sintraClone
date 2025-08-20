import handBot from "../assets/handBot.png";

export const CoWorkerHero = () => {
  return (
    <div className="bg-black min-h-screen flex items-center mb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Phone/Hand Image */}
          <div className="flex-1 lg:max-w-lg">
            <div className="relative">
              <img src={handBot} alt="Hand holding phone with Sophie AI assistant" className="w-full h-auto max-w-md mx-auto lg:mx-0" />
              {/* Fade overlay from all sides */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top fade */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent"></div>
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                {/* Left fade */}
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
                {/* Right fade */}
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 lg:max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-12">A co-worker who's always on the clock.</h1>

            <div className="space-y-8">
              {/* Available 24/7 section */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-3">
                  Available 24/7. <span className="text-gray-400 font-normal">The only helpers who love overtime. Always ready to save your most valuable asset—your time.</span>
                </h2>
              </div>

              {/* Languages section */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-3">
                  Speaks in 100+ languages. <span className="text-gray-400 font-normal">Go global—select, communicate, and complete your work in over 100 languages.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
