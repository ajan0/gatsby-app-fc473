import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Résidence des Oliviers`,
    siteUrl: process.env.GATSBY_SITE_URL || "http://localhost:8001",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`, 
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // <-- must match the "name" above
        languages: ["fr", "en", "de"],
        defaultLanguage: "fr",
        siteUrl: process.env.GATSBY_SITE_URL || "http://localhost:8001",
        i18nextOptions: {
          fallbackLng: "fr",
          interpolation: { escapeValue: false },
          keySeparator: ".", // you use keys like "nav.home"
        },
      },
    },
  ],
};

export default config;
