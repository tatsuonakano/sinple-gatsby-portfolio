

const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
 const { createPage } = actions
 
 const categoryTemplate = path.resolve("src/templates/category.js")
 
 const result = await graphql(`
   {
     categoryGroup: allMdx {
       group(field: frontmatter___category) {
         fieldValue
       }
     }
   }
 `)
 
 if (result.errors) {
   reporter.panicOnBuild(`Error while running GraphQL query.`)
   return
 }
 
 const categories = result.data.categoryGroup.group

 categories.forEach(category => {
   createPage({
     path: `/category/${category.fieldValue}/`,
     component: categoryTemplate,
     context: {
       category: category.fieldValue,
     },
   })
 })
}