// src/components/home/Hero.jsx
"use client";
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import {motion} from "framer-motion";

const fadeInFrom = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 mt-16">
        <div className="max-w-3xl">

          <motion.h1 
          variants={fadeInFrom("left")} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Empowering Young Minds for Financial Freedom
          </motion.h1>

          <motion.p 
          variants={fadeInFrom("left")} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false }}
          className="text-xl text-white/90 mb-8 max-w-2xl">
          KFC (Konoha Financial Conference) is here to equip the next generation with the right knowledge and tools to take control of their financial future.
          </motion.p>

          <motion.div 
          variants={fadeInFrom("left")} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false }}
          className="flex flex-wrap gap-4">
          <button 
          className="btn-primary"
           onClick={() => window.location.href = 'mailto:program@kfconference.org?subject=Request%20for%20Sponsorship%20Deck&body=Hello%2C%0A%0AI%20would%20like%20to%20request%20the%20sponsorship%20deck%20for%20your%20upcoming%20event.%0A%0AThank%20you%2C%0A'}
          >
          Request Sponsorship Deck <FiArrowRight className="ml-2" />
          </button>
            <Link href="/#editions" className="btn-outline text-white border-white hover:border-primary">
              Explore Our Editions
            </Link>
          </motion.div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Hero;