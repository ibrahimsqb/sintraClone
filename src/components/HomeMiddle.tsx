import middle from '../assets/middle.jpg'

export const HomeMiddle = () => {
  return (
    <div className="relative w-full mb-40">
      {/* Background Image */}
      <div className="image">
        <img 
        src={middle} 
        alt="" 
        className="w-full h-[600px] object-cover"
      />

      {/* Black Fade at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 mb-[-100px]">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Automates work.
          <br />
          Even while you sleep.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mt-5">
          Automate tasks with business automation tools—create social media posts, 
          respond to comments, and more.
        </p>
      </div>
    </div>
  )
}
