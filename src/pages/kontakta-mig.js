import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage = ({ data }) => {
  const { title, ePost, github, linkedIn } = data.contentfulKontaktuppgifter;

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="space-y-6">
          {/* E-post */}
          <div className="flex items-center justify-center space-x-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <a
              href={`mailto:${ePost}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-blue-500"
            >
              {ePost}
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-center space-x-4">
            <FaGithub className="text-gray-900 text-2xl" />
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-gray-900"
            >
              GitHub
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center space-x-4">
            <FaLinkedin className="text-blue-700 text-2xl" />
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-blue-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulKontaktuppgifter(slug: { eq: "kontakta-mig" }) {
      title
      ePost
      github
      linkedIn
    }
  }
`;

export default ContactPage;
