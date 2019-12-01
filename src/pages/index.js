import React from 'react'

import Layout from '../components/layout'
import Library from '../components/library'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Library />
  </Layout>
)

export default IndexPage
