import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const { title, presentationstext, bild } = data.contentfulOmMig;

  return (
    <Layout>
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="prose max-w-lg mx-auto text-[#333333] leading-relaxed">
          <ReactMarkdown>{presentationstext?.presentationstext}</ReactMarkdown>
        </div>
        <div className="max-w-xs mx-auto">
          <img
            src={bild.url}
            alt={bild.title || "Bild"}
            className="rounded-full shadow-lg"
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
