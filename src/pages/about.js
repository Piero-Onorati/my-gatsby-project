import React from "react"
import { graphql } from "gatsby";
import Img from "gatsby-image"
import Layout from "../components/Layout";
import * as styles from '../styles/about.module.css';
import cx from 'classnames';


export default function About({data}) {

  const { title, description } = data.info.siteMetadata;

  return (
    <Layout>
      <div className={styles.page}>

        {/* Header */}
        <div className={styles.header}>
          <Img fluid={ data.banner.childImageSharp.fluid} className={styles.banner_page}/>
        </div>

        {/* Content */}
        <div className={styles.wrapper}>
          {/* item 1 */}
          <div className={cx(styles.item, styles.item1)}>
            <Img fluid={data.image.childImageSharp.fluid} className={styles.image}/>
          </div>
          {/* item 2 */}
          <div className={cx(styles.item, styles.item2)}>
            <h2 className={styles.title}>{title}</h2>
            <p>{description}</p>
          </div>
        </div>

      </div>  
    </Layout>
  );
}

export const query = graphql`
  query AboutPage {
    info: site {
      siteMetadata {
        description
        title
      }
    }
    
    banner: file(relativePath: {eq: "banner-project.jpg"}) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image: file(relativePath: {eq: "image-interactive.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
 `

