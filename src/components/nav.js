import React from "react"
import navStyles from "./nav.module.css"
import { Link } from "gatsby"


const ListLink = props => {
	console.log(props.classPrefix + 'Item')
	return (
	<li className={props.class} tabindex="0">
		<Link to={props.to}>{props.children}</Link>
	</li>
)}

const Nav = props => {
	const ulClass = props.tileMenu ? navStyles.tileMenu : navStyles.menu;
	const ilClass = props.tileMenu ? navStyles.tileMenuItem : navStyles.menuItem;
	console.log(props)
	console.log('ulClass', ulClass)
	console.log('ilClass', ilClass)
	return (
		<nav>
			<ul className={ulClass} tabindex="0">
				<ListLink to="/" class={ilClass}>Home</ListLink>
				<ListLink to="/about/" class={ilClass}>About</ListLink>
				<ListLink to="/contact/" class={ilClass}>Contact</ListLink>
			</ul>
		</nav>
	)

}

export default Nav