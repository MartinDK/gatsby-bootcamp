import React from "react"

// Components
import { Link, graphql } from "gatsby"

import Layout from "../layout"
import Head from "../head"
import tagStyles from "../../pages/tags.module.scss"

const Tags = ({ pageContext, data }) => {
  
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with`

  return (
    <Layout className={tagStyles.body}>
      <Head title={tag}/>
      <h1 className={tagStyles.header}>{tagHeader} <span className={tagStyles.tagName}>{tag}</span></h1>
      <ul className={tagStyles.tags}>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { type } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={`${type}/${slug}`} className={tagStyles.link}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/tags" className={tagStyles.link}>All tags</Link>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            type
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`