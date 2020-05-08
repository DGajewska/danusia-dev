import React from "react"
import "./layout.css"
import Header from "./header.js"
import Nav from "./nav.js"

const getNav = (displayMenu, props) => {
  if (displayMenu) {
    return <Nav tileMenu={props.tileMenu}/>
  }
}

const Layout = props => {
  return (
    <div className="layout">
      {getNav(!props.tileMenu, props)}
      <Header headerTxt={props.headerTxt} captionTxt={props.captionTxt} />
      <div className="content-area">
        {props.children}
        {getNav(props.tileMenu, props)}
      </div>
    </div>
)}

export default Layout