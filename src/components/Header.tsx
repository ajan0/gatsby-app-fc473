import * as React from "react"
import Logo from "../images/Logo.png"
import { useTranslation } from "react-i18next"

const Header: React.FC = () => {
    const { t } = useTranslation()

    return (
        <header className="mx-auto w-full max-w-screen-xl flex items-center justify-between py-2">
            <img src={Logo} alt="Logo" className="h-24 w-auto" />
            <nav className="flex items-center justify-self-end">
                <ul className="flex gap-6">
                    <li>
                        <a href={`${process.env.GATSBY_SITE_URL}/`}>{t("Accueil")}</a>
                    </li>
                    <li>
                        <a href={`${process.env.GATSBY_SITE_URL}/#about`}>{t("À propos")}</a>
                    </li>
                    <li>
                        <a href={`${process.env.GATSBY_SITE_URL}/#formation`}>{t("Formation")}</a>
                    </li>
                    <li>
                        <a href={`${process.env.GATSBY_SITE_URL}/admission`}>{t("Admission")}</a>
                    </li>
                    <li>
                        <a href={`${process.env.GATSBY_SITE_URL}/#contact`}>{t("Contact")}</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
