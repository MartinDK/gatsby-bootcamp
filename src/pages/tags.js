import React from "react"
// import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import tagStyles from "./tags.module.scss"


const TagsPage = ({
  data: {
    allMdx: { group }
  },
}) => (
  <Layout >
    <Head title="Tags" />
    <div>
      <h1>Tags</h1>
      <ul className={tagStyles.tags}>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue} [{tag.totalCount}]
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`