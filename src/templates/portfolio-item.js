import React, { useState } from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

const PortfolioItem = ({ data }) => {
  const { title, beskrivningLong, bildbilder, link } = data.contentfulPortfolioItem;

  // State för att hantera vilken bild som visas i overlay
  const [overlayImage, setOverlayImage] = useState(null);

  // Stäng overlay
  const closeOverlay = () => setOverlayImage(null);

  return (
    <Layout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      </div>

      {/* Beskrivning */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Beskrivning</h2>
        {beskrivningLong?.beskrivningLong ? (
          <ReactMarkdown className="prose prose-lg text-gray-700 leading-relaxed">
            {beskrivningLong.beskrivningLong}
          </ReactMarkdown>
        ) : (
          <p className="text-gray-600">Ingen beskrivning tillgänglig.</p>
        )}
      </div>

      {/* Bilder */}
      {bildbilder && bildbilder.length > 0 && (
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bilder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bildbilder.map((bild, index) => (
              <div
                key={index}
                className="shadow-md rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setOverlayImage(bild)}
              >
                <img
                  src={bild.url}
                  alt={bild.title || "Bild"}
                  className="w-full h-auto"
                />
                {bild.description && (
                  <p className="p-4 text-sm text-gray-600">{bild.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Länk */}
      {link && (
        <div className="text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Besök projektet
          </a>
        </div>
      )}

      {/* Overlay för förstoring av bild */}
      {overlayImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeOverlay}
        >
          <div className="relative">
            <img
              src={overlayImage.url}
              alt={overlayImage.title || "Bild"}
              className="max-w-full max-h-screen rounded-lg"
            />
            {overlayImage.title && (
              <p className="text-white text-center mt-4">{overlayImage.title}</p>
            )}
            {/* Stäng-knapp */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              onClick={closeOverlay}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolioItem(slug: { eq: $slug }) {
      title
      beskrivningLong {
        beskrivningLong
      }
      bildbilder {
        url
        title
        description
      }
      link
    }
  }
`;

export default PortfolioItem;
