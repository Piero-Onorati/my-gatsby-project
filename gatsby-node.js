// THIS PAGE IS FOR FETCH DATA AND THEN CREATE PAGES BASED ON TEMPLATES
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {   
    // we use the method  createpage of action to generate the page with 3 properties
    actions.createPage({
      path: '/projects/'+ node.frontmatter.slug,
    //   to use path.resolve we need to import at the top
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug }
    })
  })

}