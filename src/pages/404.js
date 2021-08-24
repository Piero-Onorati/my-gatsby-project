import React from "react"
import Layout from "../components/Layout";
import * as styles from "../styles/error-page.module.css"

export default function ErrorPage() {
  return (
    <Layout>
      {/* Header */}
      <div className={styles.header}></div>

      <div className={styles.wrap}>
        {/* 404 */}
        <div className={styles._404text} data-text="404">404</div>
        {/* text_404 */}
        <h2 className={styles.error_text}>Page not found!</h2>
      </div>
    </Layout>
  );
}
