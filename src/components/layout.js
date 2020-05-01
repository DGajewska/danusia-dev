import React from "react"
import layoutStyles from "./layout.module.css"
import Header from "./header.js"
import Nav from "./nav.js"

const getNav = (displayMenu, props) => {
  if (displayMenu) {
    return <Nav tileMenu={props.tileMenu}/>
  }
}

const Layout = props => {
  return (
  <div className={layoutStyles.layout}>
    {getNav(!props.tileMenu, props)}
    <div className={layoutStyles.contentArea}>
      {props.children}
      {getNav(props.tileMenu, props)}
    </div>
  </div>
)}

export default Layout