import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import imgMaisonRouge from "../images/michael-savin-zkeyYEP4dkQ-unsplash-1024x683.jpg"
import imgFormation from "../images/dylan-gillis-KdeqA3aTnBY-unsplash-1024x683.jpg"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <section id="about" className="mx-auto w-full max-w-screen-xl grid items-center gap-10 lg:grid-cols-2 py-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">About Us</h2>
            <p className="text-[1.1rem] leading-6 text-gray-800 text-justify">
              Résidence Des Oliviers is a Medical-Social Establishment Dedicated to Supporting the Elderly. Our Mission is to Provide a Safe, Comfortable, and Humane Living Environment, where each Resident is Welcomed with Respect and Dignity. We Combine Quality Care with a Personalized Approach, Attentive to the Physical, Psychological, and Social Needs of each Individual.
            </p>
          </div>

          <div>
            <img
              src={imgMaisonRouge}
              alt="Bâtiment de la Résidence des Oliviers"
              className="w-full h-64 rounded-md shadow-sm object-cover"
            />
          </div>
        </section>
        <section id="formation" className="mx-auto w-full max-w-screen-xl grid items-center gap-10 lg:grid-cols-2 py-20">
          <div>
            <img
              src={imgFormation}
              alt=""
              className="w-full h-64 rounded-md shadow-sm object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Training</h2>
            <p className="text-[1.1rem] leading-6 text-gray-800 text-justify">
              Résidence Des Oliviers Encourages and Supports Continuous Training and the Professional Development of its Staff. The Diversity of Professions and Generations within our Facility Drives the Continuous Training Program.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center min-h-screen bg-white">
          <div className="text-center max-w-3xl px-6">
            <p className="text-sm font-semibold text-gray-600 mb-2">
              A New Chapter Begins
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-8">
              Admission to<br className="hidden md:block" />
              Résidence Des Oliviers
            </h1>

            <a
              href="/admission"
              className="inline-block bg-black text-white font-semibold px-10 py-3 w-full rounded-full text-sm tracking-wide hover:bg-gray-800 transition"
            >
              GET STARTED
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Résidence des Oliviers</title>
