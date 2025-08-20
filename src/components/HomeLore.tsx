import { useEffect, useRef } from 'react'
import LoreBot from '../assets/LoreBot.jpg'
import LoreBot2 from '../assets/loreBot2.png'

export function HomeLore() {
  const lottieRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let anim: any
    let mounted = true
    ;(async () => {
      try {
        const lottie = await import('lottie-web')
        if (!mounted || !lottieRef.current) return
        anim = lottie.default.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: 'https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67990b231ddfaa0ed9024665_data.lottie',
        })
      } catch (e) {
        // ignore if not installed yet
      }
    })()
    return () => {
      mounted = false
      if (anim) anim.destroy()
    }
  }, [])

  return (
    <section className="bg-black py-20" data-scroll-section="lore">
      <div className="w-full px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-16">
            <div className="relative">
              <img src={LoreBot2} alt="Lore Bot" className="w-full h-auto rounded-lg" />
              <div ref={lottieRef} className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg" />
              <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-medium text-white max-w-4xl mx-auto leading-tight">abc ai. World's first AI helpers, personalized for your business. Making work feel like play.</h1>
          </div>
        </div>
      </div>
    </section>
  );
}


