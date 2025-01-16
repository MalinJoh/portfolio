import React, { useState } from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

const PortfolioItem = ({ data }) => {
  const { title, beskrivningLong, bildbilder, link } = data.contentfulPortfolioItem;
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openOverlay = (image) => {
    setCurrentImage(image);
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setCurrentImage(null);
    setOverlayOpen(false);
  };

  return (
    <Layout>
      <h1 className="text-center text-4xl font-bold mb-8">{title}</h1>
      <div className="prose mx-auto text-[#333333] leading-relaxed mb-12">
        <ReactMarkdown>{beskrivningLong?.beskrivningLong}</ReactMarkdown>
      </div>
      {bildbilder && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bildbilder.map((bild) => (
            <div
              key={bild.url}
              className="rounded-lg shadow-md cursor-pointer"
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

      {link && (
        <div className="text-center mt-8">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ffe4c4] text-[#333333] px-6 py-3 rounded-lg shadow-lg hover:bg-[#ffcccb] transition"
          >
            Besök projektet
          </a>
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
      }
      link
    }
  }
`;

export default PortfolioItem;
