/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <div class="bg-body bg-cover flex flex-col">
    <div class="flex-grow flex-shrink-0">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div class="my-0 mx-auto max-w-5xl py-6 px-4">

          <main class="overflow-hidden">{children}</main>
        </div>
    </div>
    <footer class="bg-accent-1 border-t border-accent-2 bg-footer flex-shrink-0 py-4 text-center tracking-tight">
      © Omid Shahidi, {new Date().getFullYear()}. Built with <a rel="noreferrer" target="_blank" href="https://gatsbyjs.com">Gatsby</a> + 
       <a rel="noreferrer" target="_blank" href="https://tailwindcss.com/"> TailwindCSS</a>
    </footer>
  </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
