import map from "../assets/map.png";
import antennaBot from "../assets/antBot.png";

const BusinessHero = () => {
  return (
    <div className="container mb-32">
      {/* Text Section */}
      <div className="text-center flex flex-col items-center px-4">
        <p className="text-3xl md:text-[4.5rem] text-white font-medium max-w-4xl mx-auto leading-tight">They learn your business. Just like real helpers.</p>
        <p className="text-gray-300 opacity-50 text-lg md:text-lg max-w-2xl mt-5">Answer questions about your brand, add files, instructions, and your website for more unique results. The more information they have, the better the outcome.</p>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center mt-12">
        {/* Map */}
        <img src={map} alt="map" className="w-full max-w-5xl h-auto" />

        {/* Bot - centered overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <img src={antennaBot} alt="bot" className="w-32 sm:w-40 md:w-72" />
        </div>
      </div>
    </div>
  );
};

export default BusinessHero;
