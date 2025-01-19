import React, { useState } from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

// Komponent för att visa ett portfolio-item
const PortfolioItem = ({ data }) => {
  const { title, beskrivningLong, bildbilder, link } = data.contentfulPortfolioItem;

  // State för att hantera overlay
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Funktion för att öppna bildöverlägg
  const openOverlay = (image) => {
    setCurrentImage(image);
    setOverlayOpen(true);
  };

  // Funktion för att stänga overlay
  const closeOverlay = () => {
    setCurrentImage(null);
    setOverlayOpen(false);
  };

  return (
    <Layout>
      {/* Titel */}
      <h1 className="text-center text-4xl font-bold mb-8 text-[#333333]">{title}</h1>

      {/* Beskrivning */}
      <div className="prose mx-auto text-[#555555] leading-relaxed mb-12">
        <ReactMarkdown>{beskrivningLong?.beskrivningLong}</ReactMarkdown>
      </div>

      {/* Bilder */}
      {bildbilder && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bildbilder.map((bild) => (
            <div
              key={bild.url}
              className="rounded-lg shadow-md cursor-pointer border border-[#ffcccb]"
              onClick={() => openOverlay(bild)}
            >
              <img
                src={bild.url}
                alt={bild.title || "Bild"}
                className="rounded-md shadow-sm hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      )}

      {/* Overlay */}
      {isOverlayOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeOverlay}
        >
          <img
            src={currentImage.url}
            alt={currentImage.title || "Bild"}
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Länk till projekt */}
      {link && (
        <div className="text-center mt-8">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff9999] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#ffcccb] transition"
          >
            Besök projektet
          </a>
        </div>
      )}
    </Layout>
  )
}

// GraphQL-fråga för att hämta uppgifter från Contentful
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
      }
      link
    }
  }
`

export default PortfolioItem;
