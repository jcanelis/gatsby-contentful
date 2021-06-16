if (process.env.NODE_ENV !== "production") {
  console.log("Building in development mode.");
  require("dotenv").config();
}

module.exports = {
  siteMetadata: {
    title: "Gatsby + Contentful",
    siteUrl: "https://johncanelis.com",
  },

  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",

    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-CJNKJBHN0C"],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Contenful",
        short_name: "Gatsby Contenful",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "src/images/icon.png",
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
    "gatsby-plugin-offline",
  ],
};
