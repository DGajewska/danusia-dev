import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
// import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout tileMenu={false}>
	  <Header headerTxt="Page not found" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
