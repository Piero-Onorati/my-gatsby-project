import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import '../styles/global.css';

export default function Navbar() {
    // Example of query inside a component: we need to use the hook 'useStaticQuery'; this hook can only be used one time in the componet, and the component must have a Capitalized Name
    // const data = useStaticQuery(graphql`
    //     {
    //     site {
    //         siteMetadata {
    //         title
    //         }
    //     }
    //     }
    // `)
//   const { title } = data.site.siteMetadata
  return (
        <nav>
            <div className="nav_container">
                <div className="logo">
                    <img src="/logo.svg" alt="logo" />
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}
