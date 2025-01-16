import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const PortfolioPage = ({ data }) => {
  const projects = data.allContentfulPortfolioItem.nodes;

  return (
    <Layout>
      <h1>Portfolio</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <h2>{project.title}</h2>
            <Link to={`/portfolio/${project.slug}`}>Se projekt</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulPortfolioItem {
      nodes {
        title
        slug
      }
    }
  }
`;

export default PortfolioPage;
