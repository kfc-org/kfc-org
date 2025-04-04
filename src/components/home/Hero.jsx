// src/components/home/Hero.jsx
"use client";
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Empowering Young Minds for Financial Freedom
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
          KFC (Konoha Financial Conference) is here to equip the next generation with the right knowledge and tools to take control of their financial future.
          </p>
          <div className="flex flex-wrap gap-4">
          <button 
          className="btn-primary"
           onClick={() => window.location.href = 'mailto:sponsors@example.com?subject=Request%20for%20Sponsorship%20Deck&body=Hello%2C%0A%0AI%20would%20like%20to%20request%20the%20sponsorship%20deck%20for%20your%20upcoming%20event.%0A%0AThank%20you%2C%0A'}
          >
          Request Sponsorship Deck <FiArrowRight className="ml-2" />
          </button>
            <Link href="/#editions" className="btn-outline text-white border-white hover:border-primary">
              Explore Our Editions
            </Link>
          </div>
          
          {/* Stats */}
{/*           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">2+</h3>
              <p className="text-white/80">Editions</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">1000+</h3>
              <p className="text-white/80">Attendees</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">20+</h3>
              <p className="text-white/80">Speakers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="text-white/80">Sponsors</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;