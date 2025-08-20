import phone from "../assets/phone.png";
import tools from "../assets/tools.png";

const Tools = () => {
  return (
    <div className="bg-black min-h-screen flex items-center mb-40">
      <div className="container mx-auto px-6 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Content */}
          <div className="flex-1 lg:max-w-2xl text-white px-12">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight mb-12">Integrates with your favorite tools.</h1>

            <div className="space-y-8">
              {/* Available 24/7 section */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-3">
                  Integrations. <span className="text-gray-400 font-normal">Streamline business processes by bringing your favorite tools and AI helpers together. AI for business makes working with integrations easier than ever.</span>
                </h2>
              </div>
            </div>
            <img src={tools} alt="" />
          </div>

          {/* Right side - Phone Image */}
          <div className="flex-1 lg:max-w-lg">
            <div className="relative">
              <img src={phone} alt="Hand holding phone with Sophie AI assistant" className="w-full h-auto max-w-md mx-auto lg:mx-0" />
              {/* Fade overlay from all sides */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
