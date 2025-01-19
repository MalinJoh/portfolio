import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

// Definierar en komponent för 404-sidan
const NotFoundPage = ({ data }) => {
  const { pageNotFound, information } = data.contentful404Sida;

  return (
    <Layout>
      <div className="text-center min-h-screen flex flex-col justify-center items-center space-y-6">
        {/* Visar rubrik med texten "sidan hittades ej" */}
        <h1 className="text-5xl font-bold text-gray-900">{pageNotFound}</h1>
        {/* Visar ytterligare information om 404-felet */}
        <p className="text-lg text-gray-700">{information}</p>
        {/* Länk tillbaka till startsidan */}
        <Link
          to="/"
          className="bg-[#ff9999] text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-[#ffcccb] transition"
        >
          Gå tillbaka till startsidan
        </Link>
      </div>
    </Layout>
  )
}

// GraphQL-fråga för att hämta data från Contentful
export const query = graphql`
  query {
    contentful404Sida(slug: { eq: "sidan-hittades-ej" }) {
      pageNotFound
      information
    }
  }
`

export default NotFoundPage;
