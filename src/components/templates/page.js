import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../layout'
import pageStyles from './page.module.scss'

// YouTube explanation 2:53:16 https://youtu.be/8t0vNu2fCCM?t=10396
export const query = graphql`
  query ($slug: String!) {
    mdx (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`

const Page = (props) => {
  return (
    <Layout>
      <h1>{props.data.mdx.frontmatter.title}</h1>
      <p>{props.data.mdx.frontmatter.date}</p>
      <div className={pageStyles.pageBody}>
        <MDXRenderer className={pageStyles.pageBody}>{props.data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default Page