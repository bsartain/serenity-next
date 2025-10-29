"use client";

import React, { useState } from "react";
import { Gallery } from "../models";

const MassageGallery: React.FC<{ gallery: Array<Gallery> }> = ({ gallery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    "https://placehold.co/400x300",
    "https://placehold.co/400x500",
    "https://placehold.co/400x400",
    "https://placehold.co/400x600",
    "https://placehold.co/300x400",
    "https://placehold.co/400x300",
    "https://placehold.co/400x500",
    "https://placehold.co/400x400",
    "https://placehold.co/400x600",
    "https://placehold.co/300x400",
  ];

  const openModal = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 mt-12">Our Facility</h2>
      <section className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 m-5">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg cursor-pointer break-inside-avoid mb-4" onClick={() => openModal(img)}>
            <img src={img} alt={`Image ${index + 1}`} className="w-full h-auto object-cover transition duration-300 hover:scale-105" />
          </div>
        ))}

        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center" onClick={closeModal}>
            <span className="text-white text-3xl cursor-pointer absolute top-4 right-4" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Modal Image" className="max-w-90% max-h-90%" onClick={(e) => e.stopPropagation()} />
          </div>
        )}
      </section>
    </>
  );
};

export default MassageGallery;
