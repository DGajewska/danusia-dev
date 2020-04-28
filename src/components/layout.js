import React from "react"
import layoutStyles from "./layout.module.css"
import Nav from "./nav.js"

const getNav = (displayMenu, props) => {
  if (displayMenu) {
    return <Nav tileMenu={props.tileMenu}/>
  }
}

export default props => (
  <div className={layoutStyles.layout}>
    {getNav(!props.tileMenu, props)}
    <div className={layoutStyles.contentArea}>
      {props.children}
      {getNav(props.tileMenu, props)}
    </div>
  </div>
)
