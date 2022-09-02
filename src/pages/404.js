import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Lottie404NotFound  from "../components/parts/lottie-404-notfound"




const NotFoundPage = () => {
  return (
  <Layout>
  <hr/>
  <h1>404 Not Found</h1>
  <h2>ページが見つかりませんでした。</h2>
  <hr/>
  <Lottie404NotFound />
  <hr/>
  <Link to="/">トップへ戻る</Link>
  <hr/>
  </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
