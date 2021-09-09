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
        <p>I work as a front end web developer. When I am not coding I enjoy training for cycling events.</p>
      </div>
    </Layout>
  )
}

export default AboutPage