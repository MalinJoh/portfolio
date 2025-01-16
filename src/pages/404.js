import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = ({ data }) => {
  const { pageNotFound, information } = data.contentful404Sida;

  return (
    <Layout>
      <div className="text-center min-h-screen flex flex-col justify-center items-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">{pageNotFound}</h1>
        <p className="text-lg text-gray-700">{information}</p>
        <Link
          to="/"
          className="bg-[#ff9999] text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-[#ffcccb] transition"
        >
          Gå tillbaka till startsidan
        </Link>
      </div>
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
