import React from "react"
import "./navbar.css"

const Navbar = () => {
      return  (
                  <div className="navbar">
                        <ul className="nav nav-menu">
                              <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="/">Service</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="/">News</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="/">Blog</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
                              </li>
                        </ul>
                  </div>
      )
}

export default Navbar