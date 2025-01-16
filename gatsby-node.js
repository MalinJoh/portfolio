const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulPortfolioItem {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error("Failed to fetch portfolio items");
  }

  const portfolioTemplate = path.resolve("./src/templates/portfolio-item.js");

  result.data.allContentfulPortfolioItem.nodes.forEach((node) => {
    createPage({
      path: `/portfolio/${node.slug}`,
      component: portfolioTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
