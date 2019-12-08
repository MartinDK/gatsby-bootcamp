import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import blogStyles from './blog.module.scss'

// YouTube explanation 2:53:16 https://youtu.be/8t0vNu2fCCM?t=10396
export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div className={blogStyles.postBody} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>

      </div>
    </Layout>
  )
}

export default Blog