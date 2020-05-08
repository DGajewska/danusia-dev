import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
// import SEO from "../components/seo"

const AboutPage = () => (
  <Layout tileMenu={false}>
    <Header headerTxt="Dana" captionTxt="pronounced DAY-nah" />
    <section>
        <p>I am a full stack developer based in Bristol, UK.</p>
        <p>Software development is my dream job. I love solving problems and implementing solutions. 
        I'm not one for sitting still, so
        the culture of continuous learning is also something that suits me well.</p>
    </section>

  </Layout>
)

export default AboutPage
