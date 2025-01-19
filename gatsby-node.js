const path = require("path");

// Exporterar en funktion för att skapa sidor
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Kör en GraphQL-fråga för att hämta alla portfolio-objekt
  const result = await graphql(`
    query {
      allContentfulPortfolioItem {
        nodes {
          slug
        }
      }
    }
  `)

  // Om det uppstår fel vid hämtningen
  if (result.errors) {
    throw new Error("Failed to fetch portfolio items")
  }

  // Sökvägen till mallfilen för portfolio-objekt
  const portfolioTemplate = path.resolve("./src/templates/portfolio-item.js")

  // Skapa en sida för varje portfolio-objekt
  result.data.allContentfulPortfolioItem.nodes.forEach((node) => {
    createPage({
      path: `/portfolio/${node.slug}`,
      component: portfolioTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
