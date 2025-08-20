import bot1 from '../assets/bot1.png'
import bot2 from '../assets/bot2.png'
import newBot1 from '../assets/newBot1.jpeg'
import newBot2 from '../assets/yeloBot.png'

export function HomeHelpers() {
  return (
    <section className="bg-black py-20 flex flex-col items-center mb-10" data-scroll-section="helpers">
      <div className="w-full px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Gradient curtains for fade effect */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
              {/* Penn Card */}
              <div className="bg-black-800 p-6 rounded-lg hover:bg-black-700 transition-colors duration-200 relative">
                <a href="/penn" className="block">
                  <div className="flex flex-col">
                    {/* Avatar */}
                    {/* <div className="w-24 h-24 mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-800 rounded-full mx-1"></div>
                          <div className="w-2 h-2 bg-gray-800 rounded-full mx-1"></div>
                        </div>
                      </div>
                    </div> */}
                    <img src={newBot1} alt="" />
                    
                    {/* Name */}
                    <div className="text-white text-2xl font-bold mb-2 mt-4">Penn</div>
                    
                    {/* Description */}
                    <div className="text-gray-400 text-md leading-relaxed">
                      Copywriter. Dedicated to writing compelling copy for your ads, blog posts, and marketing materials.
                    </div>
                  </div>
                </a>
              </div>
              
              {/* Scouty Card */}
              <div className="bg-black-800 p-6 rounded-lg hover:bg-black-700 transition-colors duration-200 relative">
                <a href="/scouty" className="block">
                  <div className="flex flex-col">
                    {/* Avatar */}
                    {/* <div className="w-24 h-24 mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-800 rounded-full mx-1"></div>
                          <div className="w-2 h-2 bg-gray-800 rounded-full mx-1"></div>
                        </div>
                      </div>
                    </div> */}
                    <img src={newBot2} alt="" />
                    
                    {/* Name */}
                    <div className="text-white text-2xl font-bold mb-2 mt-2">Scouty</div>

                    
                    {/* Description */}
                    <div className="text-gray-400 text-md leading-relaxed">
                      Recruiter.Turning hiring challenges into opportunities, crafting magnetic job posts.
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
                  <a 
              href="/pricing" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-3xl text-lg font-medium transition-colors duration-200"
            >
              Get Helpers
            </a>
    </section>
  )
}