import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../layout'
import Head from '../head'

import pageStyles from './page.module.scss'

// YouTube explanation 2:53:16 https://youtu.be/8t0vNu2fCCM?t=10396
export const query = graphql`
  query ($slug: String!) {
    mdx (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
      }
      body
    }
  }
`

const Page = (props) => {

  let tags = ""

  if (props.data.mdx.frontmatter.tags) {
    tags = props.data.mdx.frontmatter.tags.map( (tag) => 
      <span key={tag}><Link to={`/tags/${tag}`}>{tag}</Link> </span>
    )
  }


  return (
    <Layout>
      <Head />  
      <div className={pageStyles.pageTitle}>
        <h1>{props.data.mdx.frontmatter.title}</h1>
        <p className={pageStyles.tags}>{tags}</p>
        <p>{props.data.mdx.frontmatter.date}</p>
      </div>
      <div className={pageStyles.pageBody}>
        <MDXRenderer className={pageStyles.pageBody}>{props.data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default Page