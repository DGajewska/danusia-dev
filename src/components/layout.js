import React from "react"
import layoutStyles from "./layout.module.css"
import Nav from "./nav.js"

export default ({ children }) => (
  <div className={layoutStyles.layout}>
    <div className={layoutStyles.contentArea}>
      {children}
      <Nav />
    </div>
  </div>
)
