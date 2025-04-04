// src/components/home/Highlights.jsx
"use client"
import Image from 'next/image';
import { useState } from 'react';
import {motion} from "framer-motion";

const fadeInFrom = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});

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
        <motion.div 
        variants={fadeInFrom("left")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }}
        className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Highlights from Recent Editions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Take a glimpse into our vibrant conferences where youths learn, engage, and transform their financial futures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
          variants={fadeInFrom("left")} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false }} 
          className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image 
              src={images[activeImage]} 
              alt="KFC Event Highlight" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl transition duration-500"
              loading="eager"
              priority
            />
          </motion.div>

          <div>
            <motion.div 
            variants={fadeInFrom("right")} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: false }}
            className="grid grid-cols-3 gap-4 mb-8">
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
                    loading="eager"
                    priority
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;