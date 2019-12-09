// Code in the file gatsby-node.js is run once in the process of building your site. 
// You can use it to create pages dynamically, add nodes in GraphQL, or respond to 
// events during the build lifecycle.

const path = require('path')


// Generate a slug for each markdown post url and add to node field
module.exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

// Create page for each markdown file
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/components/templates/blog.js')
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}
