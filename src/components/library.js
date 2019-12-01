import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const LIBRARY_LIST_QUERY = graphql`
  query LibraryQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const Library = () => (
  <StaticQuery
    query={LIBRARY_LIST_QUERY}
    render={({ allMarkdownRemark }) => (
      <aside>
        <h3>Library</h3>
        <ul>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/notes${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    )}
  />
)

export default Library
