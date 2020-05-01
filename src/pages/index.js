import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout  tileMenu={true}>
  <Header headerTxt="Welcome" captionTxt="I'm Dana and I'm a full stack developer" />
  	<section>
	  	<p>
	  		I'm at the start of my software development career with just over a year 
	  		of experience under my belt. Visit the About page if you'd like to find out more.
	  	</p>
	  	<p>
	  		My website is in its infancy, but I have grand plans! I'm looking forward to hosting my projects here 
	  		and continuing to improve the design as I learn and develop my design skills.
	  	</p>
	  	<p className="large-text">Thanks for visiting :)</p>
  	</section>
  </Layout>
)

export default IndexPage
