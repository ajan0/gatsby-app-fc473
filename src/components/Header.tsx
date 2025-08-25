import * as React from "react"
import Logo from "../images/Logo.png"
import { useTranslation } from "react-i18next"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

const Header: React.FC = () => {
  const { t } = useTranslation()
  const { languages, language, changeLanguage } = useI18next()

    return (
        <header className="mx-auto w-full max-w-screen-xl flex items-center justify-between py-2">
            <img src={Logo} alt="Logo" className="h-24 w-auto" />
            <nav>
                <ul className="flex gap-6">
                    <li><Link to="/">{t("nav.home")}</Link></li>
                    <li><Link to="/#about">{t("nav.about")}</Link></li>
                    <li><Link to="/#formation">{t("nav.training")}</Link></li>
                    <li><Link to="/admission">{t("nav.admission")}</Link></li>
                    <li><Link to="/#contact">{t("nav.contact")}</Link></li>
                    <li className="ms-4">
                        <ul className="flex space-x-2">
                            {languages.map(l => (
                                <li key={l}>
                                    <button
                                        onClick={() => changeLanguage(l)}
                                        className={l === language ? "underline" : ""}
                                    >
                                        {l}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
