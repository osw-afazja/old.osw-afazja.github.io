import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const GalleryPage = () => {
  return (
    <Layout pageTitle="My Galery Pages">
      <p>My cool galleries will go in here</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Galery Pages" />

export default GalleryPage