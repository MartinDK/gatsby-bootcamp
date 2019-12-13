// Code in the file gatsby-node.js is run once in the process of building your site. 
// You can use it to create pages dynamically, add nodes in GraphQL, or respond to 
// events during the build lifecycle.

const path = require('path')


// Generate a slug for each markdown post url and add to node field
module.exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions

  if (node.internal.type === 'Mdx') {
    
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    createNodeField({
      node,
      name: 'type',
      value: node.frontmatter.type.toLowerCase()
    })
  }
}

// Create page for each markdown file
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('./src/components/templates/page.js')
  const res = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
              type
            }
          }
        }
      }
    }
  `)

  res.data.allMdx.edges.forEach((edge) => {
    if (edge.node.fields.type  === 'project') {
      createPage({
        component: pageTemplate,
        path: `/projects/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug
        }
      })

    } else if (edge.node.fields.type === 'blog') {
      createPage({
        component: pageTemplate,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug
        }
      })
    }

  })
}
