module.exports = {
  siteMetadata: {
    title: 'UnicornMark',
    author: 'Ankit Chauhan',
    description: 'Brand and marketing science, for Sales and ROI',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Sans:300,400,400i`,
          `Nunito:300,300i`, // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'UnicornMark',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1016053,
        sv: 6,
      },
    },
  ],
}
