import React from "react";
import {Link} from "gatsby";
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const BlogPost = ({data}) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <Link to="/blog">Go Back</Link>
                <hr/>
                <h1>{post.title}</h1>
                <h4>Posted by {post.author} on {post.date}</h4>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>

            </div>
        </Layout>
    )
}

export const pageQuery = graphql `
    query getPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html
            frontmatter{
                author
                date
                path
                title
            }
        }
    }

`

export default BlogPost;
