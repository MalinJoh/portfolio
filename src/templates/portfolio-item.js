import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

const PortfolioItem = ({ data }) => {
  const { title, beskrivningLong, bildbilder, link } = data.contentfulPortfolioItem;

  return (
    <Layout>
      <h1>{title}</h1>

      {/* Rendera markdown i beskrivningLong */}
      <div>
        <strong>Beskrivning:</strong>
        {beskrivningLong?.beskrivningLong ? (
          <ReactMarkdown>{beskrivningLong.beskrivningLong}</ReactMarkdown>
        ) : (
          <p>Ingen beskrivning tillgänglig.</p>
        )}
      </div>

      {/* Rendera bilder */}
      {bildbilder && bildbilder.length > 0 && (
        <div>
          <h2>Bilder</h2>
          {bildbilder.map((bild, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <p>{bild.description}</p>
              <img
                src={bild.url}
                alt={bild.title || "Bild"}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Rendera länk */}
      {link && (
        <p>
          <strong>Länk:</strong>{" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            Besök projektet
          </a>
        </p>
      )}
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolioItem(slug: { eq: $slug }) {
      title
      beskrivningLong {
        beskrivningLong
      }
      bildbilder {
        url
        title
        description
      }
      link
    }
  }
`;

export default PortfolioItem;
