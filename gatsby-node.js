const path = require("path");

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;
    const postTemplate = path.resolve('src/templates/blog-post.js');

    return graphql(`
    {
        allMarkdownRemark {
          nodes {
            id
            html
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
    `).then(res => {
        if(res.errors){
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.nodes.forEach(post => {
            createPage({
                path: post.frontmatter.path,
                component: postTemplate
            })
        })
    })
}