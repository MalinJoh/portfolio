import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const { title, presentationstext, bild } = data.contentfulOmMig;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-24">
          {/* Text Section */}
          <div className="prose prose-lg text-[#333333] max-w-xl text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-[#333333] mb-6">Frontend developer</h1>
            </div>
            <ReactMarkdown>{presentationstext?.presentationstext}</ReactMarkdown>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 md:self-start">
            <img
              src={bild.url}
              alt={bild.title || "Bild"}
              className="rounded-lg shadow-md max-w-[150px] md:max-w-[200px]"
            />
          </div>
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
