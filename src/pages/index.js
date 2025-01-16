import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const { title, presentationstext, bild } = data.contentfulOmMig;

  return (
    <Layout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
      </div>
      <div className="max-w-3xl mx-auto mb-12">
        <ReactMarkdown className="prose prose-lg text-gray-700 leading-relaxed">
          {presentationstext?.presentationstext || "Ingen presentationstext tillgänglig."}
        </ReactMarkdown>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={bild.url}
          alt={bild.title || "Bild"}
          className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg mb-6"
        />
        {bild.title && <p className="text-gray-600 text-lg italic">{bild.title}</p>}
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
