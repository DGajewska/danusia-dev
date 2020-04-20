import React from "react"
import navStyles from "./nav.module.css"
import { Link } from "gatsby"


const ListLink = props => (
	<li className={navStyles.menuItem} tabindex="0">
		<Link to={props.to}>{props.children}</Link>
	</li>
)

const Nav = () => {
	return (
		<nav>
			<ul className={navStyles.menu} tabindex="0">
				<ListLink to="/">Home</ListLink>
				<ListLink to="/about/">About</ListLink>
				<ListLink to="/contact/">Contact</ListLink>
			</ul>
		</nav>
	)

}

export default Nav