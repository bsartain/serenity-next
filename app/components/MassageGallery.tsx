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

// import React, { useState } from "react";
// import Image from "next/image";
// import { galleryImages } from "../data";
// import { Gallery } from "../models";

// const MassageGallery: React.FC<{ gallery: Array<Gallery> }> = ({ gallery }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
//   console.log(selectedImageIndex);

//   const openModal = (index: number) => {
//     setSelectedImageIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImageIndex(null);
//   };

//   const nextImage = () => {
//     setSelectedImageIndex((prevIndex) => {
//       if (prevIndex === null) return 0;
//       return prevIndex === gallery.length - 1 ? 0 : prevIndex + 1;
//     });
//   };

//   const prevImage = () => {
//     setSelectedImageIndex((prevIndex) => {
//       if (prevIndex === null) return gallery.length - 1;
//       return prevIndex === 0 ? gallery.length - 1 : prevIndex - 1;
//     });
//   };

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Facility</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {gallery.map((image, index) => (
//             <div
//               key={image.id}
//               className="relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
//               onClick={() => openModal(index)}
//             >
//               <Image src={image.src} alt={image.alt} width={300} height={200} className="object-cover w-full h-48" />
//             </div>
//           ))}
//         </div>

//         {isModalOpen && selectedImageIndex !== null && (
//           <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//             <div className="relative max-w-3xl w-full">
//               <button className="absolute top-4 right-4 text-white text-2xl font-bold" onClick={closeModal}>
//                 &times;
//               </button>
//               <button
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-gray-800 bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
//                 onClick={prevImage}
//               >
//                 &larr;
//               </button>
//               <button
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-gray-800 bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
//                 onClick={nextImage}
//               >
//                 &rarr;
//               </button>
//               <Image
//                 src={galleryImages[selectedImageIndex].src}
//                 alt={galleryImages[selectedImageIndex].alt}
//                 width={800}
//                 height={600}
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default MassageGallery;
