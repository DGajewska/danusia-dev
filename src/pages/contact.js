import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
// import SEO from "../components/seo"

const ContactPage = () => (
  <Layout tileMenu={false}>
    <Header headerTxt="Say hi" />
    <section>
        <p>If you'd like to get in touch, please do! Send me an email and say hello :)</p>
        <p>danusia.x <i>[at]</i> outlook.com</p>
    </section>
  </Layout>
)

export default ContactPage