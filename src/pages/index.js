import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const { title, presentationstext, bild } = data.contentfulOmMig;

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#333333] mb-6">Malin</h1>
        <div className="prose prose-lg text-[#333333] mx-auto mb-6 max-w-5xl">
          <ReactMarkdown>{presentationstext?.presentationstext}</ReactMarkdown>
        </div>
        <div className="flex justify-center">
          <img
            src={bild.url}
            alt={bild.title || "Bild"}
            className="rounded-lg shadow-md max-w-sm"
          />
        </div>
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
