import * as React from "react"
import type { HeadProps } from "gatsby"
import Layout from '../components/layout'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function IndexPage() {
  return (
    <>
      <Navigation></Navigation>
      <Layout pageTitle="Home Page">
      </Layout>
      <Footer></Footer>
    </>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page2</title>

export function Head(props: HeadProps) {
  return (
    <>
      <link rel="stylesheet" href="/css/normalize.css" />
      <title>Hello World</title>
    </>
  )
}