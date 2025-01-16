import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

const AboutPage = ({ data }) => {
  const { title, presentationstext, bild } = data.contentfulOmMig;

  return (
    <Layout>
      <h1>{title}</h1>

      {/* Rendera markdown-innehåll */}
      <div>
        <ReactMarkdown>
          {presentationstext?.presentationstext || "Ingen presentationstext tillgänglig."}
        </ReactMarkdown>
      </div>

      {/* Rendera bild */}
      <div>
        <img
          src={bild.url}
          alt={bild.title || "Bild"}
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulOmMig(slug: { eq: "om-mig" }) {
      title
      presentationstext {
        presentationstext
      }
      bild {
        url
        title
      }
    }
  }
`;

export default AboutPage;
