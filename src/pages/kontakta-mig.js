import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// Kontakt komponenten
const ContactPage = ({ data }) => {
  const { title, ePost, github, linkedIn, bild } = data.contentfulKontaktuppgifter

  return (

    <Layout>
      <div className="text-center">
        {/* Titel */}
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">{title}</h1>
        <div className="flex justify-center mb-6">
          {/* Bild */}
          <img
            src={bild.url}
            alt={bild.title || "Bild"}
            className="rounded-lg shadow-lg max-w-xs sm:max-w-md border-4 border-[#ffcccb]"
          />
        </div>
        <div className="space-y-6 text-[#555555]">
          {/* e-postadress med ikon */}
          <div className="flex items-center justify-center space-x-4">
            <FaEnvelope className="text-[#ff9999] text-2xl" />
            <a
              href={`mailto:${ePost}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#ff6666] transition"
            >
              {ePost}
            </a>
          </div>

          {/* GitHub-länk med ikon */}
          <div className="flex items-center justify-center space-x-4">
            <FaGithub className="text-gray-800 text-2xl" />
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#555555] transition"
            >
              GitHub
            </a>
          </div>

          {/* LinkedIn-länk med ikon */}
          <div className="flex items-center justify-center space-x-4">
            <FaLinkedin className="text-[#0077b5] text-2xl" />
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#005f8c] transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// GraphQL-fråga för att hämta uppgifter från Contentful
export const query = graphql`
  query {
    contentfulKontaktuppgifter(slug: { eq: "kontakta-mig" }) {
      title
      bild {
        url
      }
      ePost
      github
      linkedIn
    }
  }
`

export default ContactPage;
