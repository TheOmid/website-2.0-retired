import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import P5 from "../components/p5"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 class="text-primary text-4xl md:text-6xl text-center px-2 mt-10 mb-10 tracking-tight">Hey! I'm Omid.</h1>
    <P5/>
    <p class="text-secondary text-2xl md:text-4xl text-center px-2 mt-10 mb-10 tracking-tight">
    podcaster, music enthusiast, coder, and that dude who makes every conversation philosophical
    </p>
  </Layout>
)

export default IndexPage
