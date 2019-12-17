module.exports = {
  siteMetadata: {
    title:'MDK',
    author:'Martin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: `${__dirname}/src/project`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-copy-images'
        ],
      },
    },
  ],
}