import React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
    	allMdx(
    		sort: { order: DESC, fields: [frontmatter___date] }
    		filter: { fields: { type: { eq: "blog" } } }
    	) {
    		edges {
    			node {
    				frontmatter {
    					title
    					date
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
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMdx.edges.map((edge) => {
          return (
            <li key={edge.node.fields.slug} className={blogStyles.post}>
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