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
    'gatsby-plugin-sass',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1016053,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/img/logo-major.png',
      },
    },
  ],
}
