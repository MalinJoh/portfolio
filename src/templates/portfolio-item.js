import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const PortfolioItem = ({ data }) => {
  const { title, beskrivningLong, bildbilder, link } =
    data.contentfulPortfolioItem;

  return (
    <Layout>
      <h1>{title}</h1>
      <p><strong>Beskrivning:</strong> {beskrivningLong?.beskrivningLong || "Ingen beskrivning tillgänglig."}</p>

      {bildbilder && bildbilder.length > 0 && (
        <div>
          <h2>Bilder</h2>
          {bildbilder.map((bild, index) => (
            <div key={index}>
              <p>{bild.description}</p>
              <img
                src={bild.url}
                alt={bild.title || "Bild"}
                style={{ maxWidth: "100%", marginBottom: "1rem" }}
              />
            </div>
          ))}
        </div>
      )}
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
