/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Vanta Construction - 'Quality comes standard.'`,
    siteUrl: `https://www.vantaconstruction.ca`,
    description: `Local-Ottawa general contractor, Ryan Hannah's company Vanta Construction. Get your free quote today.`,
    image: `/VantaConstruction.png`
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.ico"
    }
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-JZ0DK9V7L8", // Google Analytics / GA
        "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Defaults to https://www.googletagmanager.com
        origin: "https://www.googletagmanager.com/",
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      },
    },
  },
]
};