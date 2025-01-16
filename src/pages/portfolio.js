import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const PortfolioPage = ({ data }) => {
  const projects = data.allContentfulPortfolioItem.nodes;

  return (
    <Layout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Portfolio</h1>
        <p className="text-gray-600">Utforska mina projekt nedan.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            {/* Projektbild */}
            <div className="mb-4">
              <img
                src={
                  project.bildbilder && project.bildbilder.length > 0
                    ? project.bildbilder[0].url // Använd första bilden från Contentful
                    : "https://via.placeholder.com/300x200" // Standardbild
                }
                alt={project.bildbilder && project.bildbilder[0]?.title || "Projektbild"}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>

            {/* Projektinformation */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {project.title}
            </h2>
            <Link
              to={`/portfolio/${project.slug}`}
              className="text-blue-500 hover:underline font-medium"
            >
              Se projekt
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulPortfolioItem {
      nodes {
        title
        slug
        bildbilder {
          url
          title
        }
      }
    }
  }
`;

export default PortfolioPage;
