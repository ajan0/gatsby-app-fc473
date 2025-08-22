import * as React from "react"
import Logo from '../images/Logo.png'

class Header extends React.Component {
  render() {
    return (
        <header className="mx-auto w-full max-w-screen-xl flex items-center justify-between py-2">
            <img src={Logo} alt="Logo" className="h-24 w-auto" />
            <nav className="flex items-center justify-self-end">
                <ul className="flex gap-6">
                    <li>
                        <a href={`${process.env.GATSBY_SITE_URL}/`}>Accueil</a>
                    </li>
                    <li>
                        <a href={`${process.env.GATSBY_SITE_URL}/#about`}>A propos</a>
                    </li>
                    <li>
                        <a href={`${process.env.GATSBY_SITE_URL}/#formation`}>Formation</a>
                    </li>
                    <li>
                        <a href={`${process.env.GATSBY_SITE_URL}/admission`}>Admission</a>
                    </li>
                    <li>
                        <a href={`${process.env.GATSBY_SITE_URL}/#contact`}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
  }
}

export default Header