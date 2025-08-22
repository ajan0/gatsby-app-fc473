import * as React from "react"
import Background from '../images/12261b91fba359867.64939140-scaled.jpg'

class Hero extends React.Component {
  render() {
    return (
        <section
        className="relative isolate w-full py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
        aria-label="Hero"
      >
        {/* Overlay BEHIND content */}
        <div className="absolute inset-0 bg-black/50 -z-10 pointer-events-none"></div>
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-screen-xl h-full flex items-center">
          <div className="max-w-4xl text-white">
            {/* big title */}
            <h1 className="font-bold uppercase leading-[0.9] text-5xl md:text-7xl xl:text-8xl tracking-tight">
              UN LIEU DE VIE,<br />
              DE SOINS ET<br />
              DE SÉRÉNITÉ
            </h1>

            {/* CTA */}
            <a
              href="/admission"
              className="mt-10 inline-flex items-center justify-center px-10 py-4 rounded-full
                         border-2 border-white text-white hover:bg-white hover:text-black
                         transition-colors duration-200"
            >
              ADMISSION
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero