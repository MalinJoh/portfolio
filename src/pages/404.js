import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = ({ data }) => {
  const { pageNotFound, information } = data.contentful404Sida;

  return (
    <Layout>
      <h1>{pageNotFound}</h1>
      <p>{information}</p>
      <p>
        <Link to="/">Gå tillbaka till startsidan</Link>
      </p>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentful404Sida(slug: { eq: "sidan-hittades-ej" }) {
      pageNotFound
      information
    }
  }
`;

export default NotFoundPage;
