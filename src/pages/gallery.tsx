import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const GalleryPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allMdx.nodes.map((node) => (
          <li key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted {node.frontmatter.date}</p>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Gallery" />

export default GalleryPage