import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout/layout"
const CategoryList = ({ data }) => {
 const { categories } = data.allMdx
 return (
   <Layout>
   <div>
     <hr/>
     <h1>カテゴリ一覧</h1>
     <ul>
       {categories.map( category => {
         return (
           <li key={category.fieldValue}>
             <hr/>
             <Link to={category.fieldValue}>{category.fieldValue}</Link>
           </li>
         )
       })}
     </ul>
     <hr/>
   </div>
   </Layout>
 )
}
export default CategoryList
export const pageQuery = graphql`
 query{
   allMdx{
     categories: group (field: frontmatter___category){
       fieldValue
     }
   }
 }
`