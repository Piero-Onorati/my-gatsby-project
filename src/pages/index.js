import { graphql } from "gatsby";
import React from "react"
import Layout from "../components/Layout";
import  * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  // console.log(data)
  // const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <header>
        <div className={styles.container}>
          <div className={styles.jumbo_text}>
            immersive experiences that deliver
          </div>
        </div>
      </header>
    </Layout>
  )
}

// Query in the pages: first export the query at the bottom of the page, then denstruct the data of props(see above)
// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `

