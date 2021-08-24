import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import  * as styles from "../../styles/project.module.css";
import Img from 'gatsby-image';

export default function Projects({data}) {
  console.log(data);
  const projects = data.projects.nodes;

  return (
    <Layout>
      <div className={styles.page}>
        {/* Header */}
        <div className={styles.header}>
          <Img fluid={ data.banner.childImageSharp.fluid} className={styles.banner_page}/>
        </div>

        {/* Page content */}
        <div className={styles.container}>

          <div className={styles.projects}>
            {projects.map(project => (
              <Link to={"/projects/"+ project.frontmatter.slug} key={project.id}>
                <div className={styles.project}>
                  <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                  <h3>{project.frontmatter.title}</h3>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </Layout>
  );
}

//export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }

    banner: file(relativePath: {eq: "banner-project.jpg"}) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }

`