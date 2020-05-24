// Gatsby supports TypeScript natively!
import React from "react"
import {Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <div>
      {data.allMarkdownRemark.nodes.map(post => (
        <div key={post.id}>
          <h3>{post.frontmatter.title}</h3>
          <small>Posted by {post.frontmatter.author} on {post.frontmatter.date}</small>
          <br/>
          <br/>
          <Link to={post.frontmatter.path}>Read More</Link>
          <br/>
          <br/>
          <hr/>
        </div>
      ))}
    </div>
    <Link to="/">Home</Link>
  </Layout>
)

export const pageQuery = graphql`
  query getAllPostsMetadata {
  allMarkdownRemark {
    nodes {
      id
      frontmatter {
        author
        date
        path
        title
      }
      html
    }
  }
}
`

export default Blog
