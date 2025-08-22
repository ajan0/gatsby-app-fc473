import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv"

if (process.env.NODE_ENV === "development") {
  dotenv.config({
    path: `.env.development`,
  })
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Résidence des Oliviers`,
    siteUrl: process.env.GATSBY_SITE_URL || "http://localhost:8000"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"]
};

export default config;
