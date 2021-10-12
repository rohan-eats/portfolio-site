module.exports = {
  siteMetadata: {
    siteUrl: "https://hittites.com",
    title: "Hittites",
    description: ``,
    author: `Subhendu Maji`,
    siteTitle: '',
    tagline: '',
    siteDescription: '',
    siteKeywords:
      '',
    siteLanguage: 'en_US',
    name: '',
    location: 'Bangalore, IN',

  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#00BFA6",
        },
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-111111111-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: `Hittites Technology India Limited`,
        description: `hello`,
        short_name: `Hittites`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#d84e18`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-sharp",

  ],
};
