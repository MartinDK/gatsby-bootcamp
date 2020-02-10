import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={aboutStyles.aboutPage}>
        <h1>About Page</h1>
        <h2>Hi, my name is Martin</h2>
        <p>I am a front end developer.</p>
        <p>Need a developer? <Link to="/contact">Contact me</Link></p>
      </div>
    </Layout>
  )
}

export default AboutPage