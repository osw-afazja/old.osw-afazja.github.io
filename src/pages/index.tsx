import * as React from "react"
import Layout from '../components/layout'

function IndexPage() {
  return (    
    <Layout pageTitle="Home Page">
      <p>Index Page</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
