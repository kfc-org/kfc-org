// src/components/home/SponsorLogoSlide.jsx
"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInFrom = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});

const sponsors = [
  {
    id: 1,
    name: "Nibridge",
    logo: "/images/sponsors/nibridge.png",
  },
  {
    id: 2,
    name: "Jurix Solutions",
    logo: "/images/sponsors/jurist.png",
  },
  {
    id: 3,
    name: "Konoha",
    logo: "/images/sponsors/konnoha.png",
  },
  {
    id: 4,
    name: "Palremit",
    logo: "/images/sponsors/palremit.jpg",
  },
  {
    id: 5,
    name: "ReplyGuys",
    logo: "/images/sponsors/replyguy.png",
  },
  {
    id: 6,
    name: "Blockchain Club",
    logo: "/images/sponsors/club.png",
  },
  {
    id: 7,
    name: "Orthodox",
    logo: "/images/sponsors/ortho.png",
  },
];

const SponsorLogo = () => {
  
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];
  
  return (
    <section id="partners" className="section bg-white">
      <div className="container-custom">
        <motion.div 
        variants={fadeInFrom("left")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }}
        className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sponsors and Partners</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            We're grateful to these organizations for making KFC events possible across Nigeria.
          </p>
        </motion.div>
        
        {/* Logo Slider */}
        <div className="relative overflow-hidden mb-8">
          <motion.div 
            className="flex items-center py-6 no-scrollbar"
            initial={{ x: 0 }}
            animate={{ 
              x: [0, -1000], 
              transition: { 
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear"
              }
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <div 
                key={`${sponsor.id}-${index}`} 
                className="flex-shrink-0 mx-8 w-40 h-28 relative"
              >
                <Image 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  fill
                  style={{ objectFit: 'contain' }}
                  className="grayscale hover:grayscale-0 transition duration-300"
                  loading="eager"
                  priority
                />
              </div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
        
        {/* Become a Sponsor CTA */}
        <motion.div 
        variants={fadeInFrom("right")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }}
        className="text-center mt-8">
          <a 
            href="mailto:program@kfconference.org?subject=Request%20for%20Sponsorship%20Deck&body=Hello%2C%0A%0AI%20would%20like%20to%20request%20the%20sponsorship%20deck%20for%20your%20upcoming%20event.%0A%0AThank%20you%2C%0A" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
      
      {/* CSS for hiding scrollbar */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
};

export default SponsorLogo;