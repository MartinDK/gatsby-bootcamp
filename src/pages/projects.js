import React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/head'
import projectStyles from './project.module.scss'

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        sort: {order: DESC, fields: [frontmatter___date]}
        filter: {frontmatter: {type: {eq: "project"}}}
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
      <Head title="Projects" />
      <h1>Projects</h1>
      <p>Things I'm currently working on.</p>
      <ol className={projectStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li key={edge.node.fields.slug} className={projectStyles.post}>
              <Link to={`/projects/${edge.node.fields.slug}`}>
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

export default ProjectPage