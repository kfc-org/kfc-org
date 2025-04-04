"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const speakers = [
  {
    name: "Frank Samuel",
    role: "Founder Financial Fitness Clinic.",
    image: "/images/speakers/frank-samuel.png",
    },
    {
      name: "Sarah Idahosa",
      role: "Founder, Women In DeFi",
      image: "/images/speakers/sarah.jpg",
      },
  {
    name: "Jago Emmanuel",
    role: "Head of Growth, Palremit",
    image: "/images/speakers/palremit.jpg",
    },
  {
    name: "Witty Prince",
    role: "Founder Konoha University, KFC and Uniscope",
    image: "/images/speakers/prince.png",
    },
    {
      name: "The Crypto Doyen",
      role: "Founder, Doyen CV",
      image: "/images/speakers/doyen.png",
      },
        {
      name: "King Manifest",
      role: "Serial Investor",
      image: "/images/speakers/manifest.png",
      },
];

const Speakers = () => {
  const [width, setWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Get the width of the carousel container
    if (sliderRef.current) {
      setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
    }
  }, []);

  // Create duplicate arrays for infinite scrolling effect
  const duplicatedSpeakers = [...speakers, ...speakers, ...speakers];

  const SpeakerCard = ({ speaker }) => (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group min-w-[280px] mx-4">
      <div className="relative w-full pt-[125%]">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-1">{speaker.name}</h3>
        <p className="text-gray-500 text-sm md:text-base mb-2 md:mb-3">{speaker.role}</p>
      </div>
    </div>
  );

  return (
    <section id="speakers" className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Speakers</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Learn from the best minds in finance, entrepreneurship, and financial education who share their knowledge and experience at our conferences.
          </p>
        </div>

        <div className="overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex"
            initial={{ x: 0 }}
            animate={{ 
              x: [-width/3, 0], 
              transition: { 
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear"
              }
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedSpeakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </motion.div>
        </div>

        {/* <div className="mt-12 text-center">
          <button className="btn-outline">
            View All Speakers
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Speakers;