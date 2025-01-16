import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({ data }) => {
  const { title, ePost, github, linkedIn } = data.contentfulKontaktuppgifter;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>
        <strong>E-post:</strong>{" "}
        <a href={`mailto:${ePost}`} target="_blank" rel="noopener noreferrer">
          {ePost}
        </a>
      </p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a href={github} target="_blank" rel="noopener noreferrer">
          {github}
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          {linkedIn}
        </a>
      </p>
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
