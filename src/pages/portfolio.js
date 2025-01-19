import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

// Komponent för portfoliosidan
const PortfolioPage = ({ data }) => {
  const projects = data.allContentfulPortfolioItem.nodes;

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">Portfolio</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          // Renderar varje projekt i ett rutnät
          <div key={project.slug} className="bg-white rounded-lg shadow-lg p-4 border-2 border-[#ffe4c4]">
            <h2 className="text-xl font-semibold text-[#333333] mb-2">{project.title}</h2>
            {project.bildbilder && project.bildbilder[0] && (
              // Visar en bild ifrån projektet
              <img
                src={project.bildbilder[0].url}
                alt={project.bildbilder[0].title || "Bild"}
                className="rounded-md shadow-sm border border-[#ffcccb]"
              />
            )}
            {/* Länk till att läsa mer om projektet */}
            <Link
              to={`/portfolio/${project.slug}`}
              className="inline-block mt-4 bg-[#ff9999] text-white px-4 py-2 rounded-md shadow hover:bg-[#ffcccb] transition"
            >
              Läs mer
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

// GraphQL-fråga för att hämta data från Contentful
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
`

export default PortfolioPage
