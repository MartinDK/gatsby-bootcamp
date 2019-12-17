import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

console.log("zzzz")
const TagsList = (title) => {
  console.log(title)
  
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: {
        title: {
          eq: "Nutrition"
        }
      }) {
        frontmatter {
          tags
        }
      }
    }
  `)
  return (
    <footer>
      <p>tagss: {data.mdx.frontmatter.tags}</p>
    </footer>
  )
}

export default TagsList