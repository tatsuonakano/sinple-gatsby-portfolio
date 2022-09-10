import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"

const Categories = ({ pageContext, data }) => {
 const { category } = pageContext
 const { edges, totalCount } = data.allMdx
 const categoryHeader = `${category}カテゴリーで${totalCount}個の記事が見つかりました。`
 
 return (
   <Layout>
   <div>
     <hr/>
     <h3>{categoryHeader}</h3>
     <ul>
       {edges.map(({ node }) => {
         const { slug } = node.frontmatter
         const { title } = node.frontmatter
         return (
           <li key={slug}>
             <hr/>
             <Link to={"/post/"+slug}>{title}</Link>
           </li>
         )
       })}
     </ul>
     <hr/>
     <Link to="/category/">カテゴリーページに戻る</Link>
     <hr/>
   </div>
   </Layout>
 )
}

export default Categories

export const pageQuery = graphql`
 query($category: String) {
   allMdx(
     limit: 2000
     sort: { fields: [frontmatter___publication], order: DESC }
     filter: { frontmatter: { category: { in: [$category] } } }
   ) {
     totalCount
     edges {
       node {
         frontmatter {
           title
           slug
         }
       }
     }
   }
 }
`