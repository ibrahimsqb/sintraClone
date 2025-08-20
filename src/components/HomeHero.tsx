export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background video/3D scene */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="relative w-full h-full">
  <video 
    className="w-full h-full object-cover transform -scale-x-100" 
    autoPlay 
    loop 
    muted 
    playsInline
  >
    <source src="https://d1oil5daeuar1j.cloudfront.net/vizzy_waving.mp4" />
    <source src="https://d1oil5daeuar1j.cloudfront.net/vizzy_waving.webm" />
  </video>

  {/* Gradient overlay */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
</div>

      </div>
      
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your helpers that never sleep.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg">
              Build, grow, and scale your business with a team of AI helpers.
            </p>
            <a 
              href="/pricing" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-3xl text-lg font-medium transition-colors duration-200"
            >
              Get abc ai
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}


