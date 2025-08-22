import * as React from "react"

const Footer : React.FC = () => {
    return (
    <footer className="bg-black text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Address */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Adresse</h3>
          <p className="text-gray-400">
            Avenue de la Gare 1 <br />
            1814 Montreux <br />
            Vaud, Suisse
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Accueil</a></li>
            <li><a href="/#about" className="hover:text-white">A propos</a></li>
            <li><a href="/#formation" className="hover:text-white">Formation</a></li>
            <li><a href="/admission" className="hover:text-white">Admission</a></li>
            <li><a href="/#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Réseaux sociaux</h3>
          <div className="flex flex-col justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
    )
}

export default Footer;