// src/components/home/Highlights.jsx
"use client"
import Image from 'next/image';
import { useState } from 'react';

const images = [
  "/images/unilag/img-6.jpg",
  "/images/unilag/img-2.jpg",
  "/images/unilag/img-3.jpg",
  "/images/futo/futo-2.jpg",
  "/images/futo/futo-3.jpg",
  "/images/futo/futo-4.jpg",
];

const Highlights = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Highlights from Recent Editions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Take a glimpse into our vibrant conferences where students learn, engage, and transform their financial futures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image 
              src={images[activeImage]} 
              alt="KFC Event Highlight" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl transition duration-500"
            />
          </div>

          <div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {images.slice(0, 6).map((image, index) => (
                <div 
                  key={index}
                  className={`relative h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === index ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>

            {/* <h3 className="text-2xl font-semibold mb-4">A Hub of Learning & Networking</h3>
            <p className="text-gray-700 mb-6">
              Each KFC edition creates a vibrant atmosphere where students not only learn essential financial concepts but also connect with professionals and peers who share their interests.
            </p>
            <p className="text-gray-700 mb-6">
              Our events feature engaging workshops, thought-provoking panel discussions, and interactive sessions designed to make financial education accessible and practical for university students.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-primary mb-1">1000+</p>
                <p className="text-gray-600">Students Reached</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-primary mb-1">20+</p>
                <p className="text-gray-600">Hours of Learning</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;