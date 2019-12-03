import React from 'react'
import {Link} from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1><Link className={headerStyles.title} to="/">GatsbyJS Boot Camp</Link></h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header