const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Bill Tracking',
    description: 'Bill Tracking Web Application',
    author: 'Darren Corbett',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        models: path.join(__dirname, 'src/models'),
        state: path.join(__dirname, 'src/state'),
        theme: path.join(__dirname, 'src/theme'),
        views: path.join(__dirname, 'src/views'),
      },
    },
  ],
};
