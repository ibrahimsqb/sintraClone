import laptop from "../assets/laptopClean.png";

const Workspaces = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden mb-32">
      {/* Content overlay */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-12">
                Multiple
                <br />
                workspaces.
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">One AI Team.</span>
              </h1>

              <div className="space-y-8">
                {/* Available 24/7 section */}
                <div>
                  <h2 className="text-lg md:text-xl font-semibold mb-3">
                    Up to 5 profiles. <span className="text-gray-400 font-normal">Create up to 5 business profiles, each customized to your specific goals and powered by AI helpers ready to deliver.</span>
                  </h2>
                </div>

                <div>
                  <h2 className="text-lg md:text-xl font-semibold mb-3">
                    Share workspace with the team. <span className="text-gray-400 font-normal">Collaborate with your team in real-time. Share your workspace to make business insights accessible to everyone involved.</span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Right content - Laptop image */}
            <div className="flex justify-center lg:justify-end ">
              <div className="relative">
                <img src={laptop} alt="Laptop" className="w-full max-w-lg lg:max-w-2xl object-contain opacity-50" />
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top fade */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent"></div>
                  {/* Bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                  {/* Right fade */}
                  <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background effects */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-green-500/20 rounded-full blur-2xl"></div>
    </div>
  );
};

export default Workspaces;
