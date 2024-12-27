import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'

function IndexPage() {
  return (    
    <Layout pageTitle="Home Page">
      <p>Index Page</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />
