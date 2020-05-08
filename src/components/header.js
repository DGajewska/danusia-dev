import React from "react"
import "./header.css"

const getCaption = caption => {
	if (caption) {
	   return <p className="caption">{caption}</p>
	}
}

const Header = props => (
	<header>
	    <h1>{props.headerTxt}</h1>
	    {getCaption(props.captionTxt)}
   </header>
)

export default Header
