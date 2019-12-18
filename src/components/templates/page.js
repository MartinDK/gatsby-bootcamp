import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../layout'
import Head from '../head'

import pageStyles from './page.module.scss'
import TagsList from './taglist'

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

  return (
    <Layout>
      <Head />  
      <div className={pageStyles.pageTitle}>
        <h1>{props.data.mdx.frontmatter.title}</h1>
        <TagsList tagsArray={props.data.mdx.frontmatter.tags} />
        <p>{props.data.mdx.frontmatter.date}</p>
      </div>
      <div className={pageStyles.pageBody}>
        <MDXRenderer className={pageStyles.pageBody}>{props.data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default Page