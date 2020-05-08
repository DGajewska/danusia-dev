module.exports = {
  siteMetadata: {
    title: `Dana Gajewska's developer website`,
    description: `My website for trying out different designs and hosting my projects`,
    author: `@DGajewska`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DGajewska-personal-website`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: '', // This path is relative to the root of the site.
      },
    },
  ],
}
