import React from "react"
import { Link } from "gatsby"

import tagListStyles from "./tag-list.module.scss"

const TagList = (props) => {
  let tags = ""

  if (props.tagsArray) {
    tags = props.tagsArray.map((tag) => (
      <span key={tag} className={tagListStyles.tags}>
        <Link to={`/tags/${tag}`} className={tagListStyles}>
          {tag}
        </Link>
      </span>
    ))
  }
  return tags
}

export default TagList
