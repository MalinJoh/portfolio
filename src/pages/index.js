import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const { title, presentationstext, bild } = data.contentfulOmMig;

  return (
    <Layout>
      <h1>{title}</h1>
      <div className="bg-blue-500 text-white p-4">
        <ReactMarkdown>{presentationstext?.presentationstext || "Ingen presentationstext tillgänglig."}</ReactMarkdown>
      </div>
      <div>
        <img
          src={bild.url}
          alt={bild.title || "Bild"}
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
        />
        {bild.title && <p>{bild.title}</p>}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulOmMig(slug: { eq: "startsida" }) {
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

export default IndexPage;
