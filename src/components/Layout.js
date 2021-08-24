import React from "react";
import Navbar from "./Navbar";
import { Link } from "gatsby";
import '../styles/global.css';

export default function Layout({children}) {
  return (
      <div className="layout">
            {/* NAVBAR */}
            <Navbar/>

            {/* CONTENT OF EACH PROJECT */}
            <div className="content">
                {children}
            </div>

            {/* FOOTER */}
            <footer>
                <div className="footer_container">
                    {/* Left part */}
                    <div className="left_nav">
                        {/* Logo_footer */}
                        <div className="logo_footer">
                            <img src="/logo.svg" alt="logo" />
                        </div>
                        {/* Footer nav_links */}
                        <div className="footer_links">
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
                    
                    {/* Right part */}
                    <div className="right_nav">
                        {/* Social icons */}
                        <div className="social_icons">
                            <div className="item_social_icon">
                                <img src="/icon-facebook.svg" alt="" />
                            </div>
                            <div className="item_social_icon">
                                <img src="/icon-twitter.svg" alt="" />
                            </div>
                            <div className="item_social_icon">
                                <img src="/icon-pinterest.svg" alt="" />
                            </div>
                            <div className="item_social_icon">
                                <img src="/icon-instagram.svg" alt="" />
                            </div>
                        </div>
                        {/* Copyright */}
                        <p> &#169; 2021 Loopstudio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
      </div>
  )
}
