// src/components/editions/EditionGallery.jsx
import { useState } from 'react';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';

const EditionGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % images.length);
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Relive the memorable moments from this edition of Konoha Financial Conference
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative h-64 overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="eager"
                priority
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                <p className="text-white p-4 font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white p-2 text-3xl hover:text-primary-light"
              onClick={closeLightbox}
            >
              <FiX />
            </button>
            
            <div className="relative w-full max-w-4xl h-[70vh]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                loading="eager"
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            <button 
              className="absolute left-4 text-white p-4 text-4xl hover:text-primary-light"
              onClick={() => navigateImage('prev')}
            >
              &lt;
            </button>
            
            <button 
              className="absolute right-4 text-white p-4 text-4xl hover:text-primary-light"
              onClick={() => navigateImage('next')}
            >
              &gt;
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">{images[selectedImage].caption}</p>
              <p className="text-sm text-gray-300">{selectedImage + 1} of {images.length}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EditionGallery;