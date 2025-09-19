import cardPic1 from "../assets/cardPic1.png";
import cardPic2 from "../assets/cardPic2.png";

export const Cards = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-6 md:p-10 bg-black min-h-screen mb-20">
      {/* Card 1*/}
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl overflow-hidden w-full max-w-md text-white flex flex-col min-h-[500px]">
        {/* Content with padding only on top and sides */}
        <div className="px-8 md:px-10 pt-8 md:pt-10 pb-6 text-center flex-shrink-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Soshie, schedule social media posts for me</h2>
          <p className="text-blue-100 text-base md:text-lg leading-relaxed">Automate your social media game with AI for marketing. Write, create, and post content effortlessly with AI-powered solutions.</p>
        </div>

        {/* Character illustration aligned to bottom with no bottom padding */}
        <div className="flex justify-center items-end">
          <img className="w-56 md:w-72 h-auto object-contain" src={cardPic1} alt="Soshie character" />
        </div>
      </div>

      {/* Card 2*/}
      <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl overflow-hidden w-full max-w-md text-white flex flex-col min-h-[500px]">
        {/* Content with padding only on top and sides */}
        <div className="px-8 md:px-10 pt-8 md:pt-10 pb-6 text-center flex-shrink-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Vizzy, help me prepare for today's meetings</h2>
          <p className="text-orange-100 text-base md:text-lg leading-relaxed">Boost productivity with AI. Streamline business processes with daily summaries based on your email and calendar to keep your schedule on track.</p>
        </div>

        {/* Character illustration aligned to bottom with no bottom padding */}
        <div className="flex justify-center items-end">
          <img className="w-56 md:w-72 h-auto object-contain" src={cardPic2} alt="Vizzy character" />
        </div>
      </div>
    </div>
  );
};
