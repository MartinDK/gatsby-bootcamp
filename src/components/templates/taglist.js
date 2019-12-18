import React from 'react'
import { Link } from 'gatsby'

const TagList = (props) => {
 
  let tags = ""

  if (props.tagsArray) {
    tags = props.tagsArray.map( tag => 
      <span key={tag}><Link to={`/tags/${tag}`}>{tag}</Link> </span>
    )
  }
  return (tags)
}

export default TagList