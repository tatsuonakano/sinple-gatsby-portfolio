/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"
import Header from "./header"
import Hero from "./hero"
import FirstSubColumn from "./firstSubColumn"
import ThirdSubColumn from "./thirdSubColumn"
import Footer from "./footer"
import '../../styles/layout.scss';



const Layout = ({ children }) => {

  return (
    <>
      <body>
        <Header />
        <Hero />
        <div className="pt-3 container-fluid background-image">
          <div className="row">
            <FirstSubColumn />
            <div className="col-12 col-sm-8 col-xl-6 glass-base glass-white-bg opacity-lv-055">
              <div className="mainColumnBoxStyle">
                {children}
              </div>
              <div className="copyright">
                <small>中野達雄-All Rights Reserved</small>
                <hr/>
              </div>
            </div>
            <ThirdSubColumn />
          </div>
        <Footer />
          </div >
      </body>
    </>
  )
}


export default Layout

