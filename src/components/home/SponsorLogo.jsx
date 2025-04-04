// src/components/home/SponsorLogoSlide.jsx
"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const sponsors = [
  {
    id: 1,
    name: "TechCorp Nigeria",
    logo: "/images/sponsors/nibridge.png",
  },
  {
    id: 2,
    name: "DevHub Solutions",
    logo: "/images/sponsors/jurist.png",
  },
  {
    id: 3,
    name: "InnovateLabs",
    logo: "/images/sponsors/nibridge.png",
  },
  {
    id: 4,
    name: "CloudNative Nigeria",
    logo: "/images/sponsors/jurist.png",
  },
  {
    id: 5,
    name: "CodeAfrica",
    logo: "/images/sponsors/nibridge.png",
  },
  {
    id: 6,
    name: "AI Solutions",
    logo: "/images/sponsors/jurist.png",
  }
];

const SponsorLogo = () => {
  const sliderRef = useRef(null);
  
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;
    
    // Auto-scroll function
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (slider) {
          // If we've scrolled to the end, quickly reset to the start
          if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 10)) {
            slider.scrollLeft = 0;
          } else {
            // Otherwise, continue scrolling smoothly
            slider.scrollLeft += 1;
          }
        }
      }, 20);
    };
    
    // Start auto-scrolling
    startAutoScroll();
    
    // Pause on hover/touch
    slider.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    slider.addEventListener('touchstart', () => clearInterval(scrollInterval));
    
    // Resume on mouse leave/touch end
    slider.addEventListener('mouseleave', startAutoScroll);
    slider.addEventListener('touchend', startAutoScroll);
    
    return () => {
      clearInterval(scrollInterval);
      // Clean up event listeners if component unmounts
      if (slider) {
        slider.removeEventListener('mouseenter', () => clearInterval(scrollInterval));
        slider.removeEventListener('touchstart', () => clearInterval(scrollInterval));
        slider.removeEventListener('mouseleave', startAutoScroll);
        slider.removeEventListener('touchend', startAutoScroll);
      }
    };
  }, []);
  
  return (
    <section id="sponsors" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sponsors</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            We're grateful to these organizations for making KFC events possible across Nigeria.
          </p>
        </div>
        
        {/* Logo Slider */}
        <div className="relative overflow-hidden mb-8">
          <div 
            ref={sliderRef}
            className="flex items-center overflow-x-auto py-6 no-scrollbar"
            style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
          >
            {/* Display sponsors twice to create seamless loop effect */}
            {[...sponsors, ...sponsors].map((sponsor, index) => (
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
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent"></div>
        </div>
        
        {/* Become a Sponsor CTA */}
        <div className="text-center mt-8">
          <a 
            href="/become-sponsor" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition"
          >
            Become a Sponsor
          </a>
        </div>
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