import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const AboutPage = () => (
  <Layout tileMenu={false}>
    <h1>Dana</h1>
    <p>I am a full stack developer based in Bristol, UK.</p>
    <p>I love being a developer; I love solving problems and implementing solutions. I don't like to sit still, so
    the culture of continuous learning is also something that suits me well. Software development and I are a 
    match made in heaven, at least, I think so!</p>
    <p>All that being said, I do have a long list of things that I'd like to learn about or improve on. I'm currently
    	working on a few different things: 
    	<ul>
			<li>improving my working knowledge of Gatsby.js and React.js through working on this website,</li>
			<li>working on my sudoku solver prject, hosting it and developing it to handle more complicated puzzles,</li>
			<li>brushing up on my statistics, a stepping stone to getting involved in data analysis, and </li>
			<li>inbetween all of that, I'm learning more about JS in the frontend, undertaking <a href="https://javascript30.com/">JavaScript30 by Wes Bos</a></li>
		</ul>
	</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
