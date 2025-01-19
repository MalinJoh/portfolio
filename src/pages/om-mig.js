import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

//Komponent för Om-mig sidan
const AboutPage = ({ data }) => {
  const { title, presentationstext, bild } = data.contentfulOmMig;

  return (
    <Layout>
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      </div>

      {/* Presentationstext */}
      <div className="max-w-3xl mx-auto mb-12">
        <ReactMarkdown className="prose prose-lg text-gray-700 leading-relaxed">
          {presentationstext?.presentationstext || "Ingen presentationstext tillgänglig."}
        </ReactMarkdown>
      </div>

      {/* Bild */}
      <div className="flex justify-center">
        <img
          src={bild.url}
          alt={bild.title || "Bild"}
          className="rounded-lg shadow-lg max-w-xs sm:max-w-md"
        />
      </div>
    </Layout>
  )
}

// GraphQL-fråga för att hämta data från Contentful
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
`

export default AboutPage;
