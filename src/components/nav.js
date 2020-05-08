import React from "react"
import "./nav.css"
import { Link } from "gatsby"

const getClasses = props => {
	if (props.tileMenu) {
		return { ulClass: "menu__tile", ilClass: "menu-item__tile" }
	}

	return { ulClass: "menu", ilClass: "menu-item" }
}


const ListLink = props => {
	return (
	<li className={props.className} tabindex="0">
		<Link to={props.to}>{props.children}</Link>
	</li>
)}

const Nav = props => {
	const { ulClass, ilClass } = getClasses(props);
	return (
		<nav>
			<ul className={ulClass} tabindex="0">
				<ListLink to="/" className={ilClass}>Home</ListLink>
				<ListLink to="/about/" className={ilClass}>About</ListLink>
				<ListLink to="/contact/" className={ilClass}>Contact</ListLink>
			</ul>
		</nav>
	)

}

export default Nav