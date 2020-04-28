import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const ContactPage = () => (
  <Layout tileMenu={false}>
    <h1>Get in touch</h1>
    <p>
        If you'd like to get in touch, please do! Send me an email and say hello :)
    </p>
    <p> danusia<i>[at]</i>outlook.com </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage