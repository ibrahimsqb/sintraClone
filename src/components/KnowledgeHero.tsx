import handPhone from "../assets/handPhone.png";

const KnowledgeHero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient with blue fade at top */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0a0a23] via-[#0f2d52] to-[#1a4a7a]" />

      <div className="absolute inset-0 pointer-events-none">
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="w-full">
        {/* Main content area */}
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center min-h-screen">
          {/* Left side - Text */}
          <div className="flex-1 lg:max-w-2xl text-white z-10 pt-20 px-12">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight mb-6 mt-6">Your new team with infinite knowledge.</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mb-8">AI for business has never been this personal—meet your new team, working hard so you don't have to.</p>

            {/* CTA Button */}
            <a href="/pricing" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-3xl text-lg font-medium transition-colors duration-200">
              Get abc ai
            </a>
          </div>

          {/* Right side - Phone positioned at bottom */}
          <div className="flex-1 flex justify-center lg:justify-end items-end lg:absolute lg:bottom-0 lg:right-12 xl:right-12">
            <div className="relative">
              <img src={handPhone} alt="Hand holding phone" className="w-full max-w-sm lg:max-w-md xl:max-w-lg drop-shadow-2xl transform -mb-4 lg:-mb-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHero;
