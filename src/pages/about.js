import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'


const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <h2>Hi, my name is Martin</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default AboutPage