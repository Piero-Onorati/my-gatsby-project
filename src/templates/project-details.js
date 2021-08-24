import React from "react"
import Layout from "../components/Layout";
import Img from "gatsby-image"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby";

export default function ProjectDetails({data}) {
  const { html } = data.markdownRemark
  const { title, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>

        {/* Header Image */}
        <div className={styles.featured_wrapper}>
          <Img 
            fluid= {featuredImg.childImageSharp.fluid} 
            className ={styles.featured_image}
          />
        </div>

        {/* Content */}
        <div className={styles.content_text}>
          <h2>{title}</h2>
          {/* output HTML dymamically in react */}
          <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }}/>
        </div>

      </div>
    </Layout>
  );
}

// we add a variable at the query($slug) and then we say that we want the element with the slug that is equal to the variable ($slug) 
export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`