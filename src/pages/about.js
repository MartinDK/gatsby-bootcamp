import React from 'react'
import {Link} from 'gatsby'

import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <h2>Hi, my name is Martin</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
      <Footer></Footer>
    </div>
  )
}

export default AboutPage