// Code in the file gatsby-node.js is run once in the process of building your site. 
// You can use it to create pages dynamically, add nodes in GraphQL, or respond to 
// events during the build lifecycle.

const path = require('path')


// Generate a slug for each markdown post url and add to node field
module.exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions

  // Create mdx file type from folder
  if (node.internal.type === 'Mdx') {
    
    const slug = path.basename(node.fileAbsolutePath, '.mdx')
    const pathsArray = node.fileAbsolutePath.split(path.sep)
    const pathCurrent = pathsArray[pathsArray.length - 2]

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    createNodeField({
      node,
      name: 'type',
      value: pathCurrent
    })
  }
}

// Create page for each markdown file
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('./src/components/templates/page.js')
  const tagTemplate = path.resolve("./src/components/templates/tags.js")
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
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  res.data.allMdx.edges.forEach((edge) => {
    if (edge.node.fields.type  === 'project') {
      createPage({
        component: pageTemplate,
        path: `/project/${edge.node.fields.slug}`,
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

  // Extract tag data from query
  res.data.tagsGroup.group.forEach(tag => {
  	createPage({
  		path: `/tags/${tag.fieldValue}/`,
  		component: tagTemplate,
  		context: {
  			tag: tag.fieldValue,
  		},
  	})
  })
}
