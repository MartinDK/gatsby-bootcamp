import React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'

import Layout from '../components/Layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
    	allMarkdownRemark(
    		sort: { order: DESC, fields: [frontmatter___date] }
    		filter: { frontmatter: { type: { eq: "Blog" } } }
    	) {
    		edges {
    			node {
    				frontmatter {
    					title
    					date
    					type
    				}
    				fields {
    					slug
    					type
    				}
    			}
    		}
    	}
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
      })}
      </ol>
    </Layout>
  )
}

export default BlogPage