// src/components/layout/Navbar.jsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="KFC Logo" width={50} height={50} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`${scrolled ? 'text-white' : 'text-gray-900'} hover:text-primary-light font-medium`}>
              Home
            </Link>
            <Link href="/#about" className={`${scrolled ? 'text-white' : 'text-gray-900'} hover:text-primary-light font-medium`}>
              About
            </Link>
            <Link href="/#editions" className={`${scrolled ? 'text-white' : 'text-gray-900'} hover:text-primary-light font-medium`}>
              Editions
            </Link>
            <Link href="/#speakers" className={`${scrolled ? 'text-white' : 'text-gray-900'} hover:text-primary-light font-medium`}>
              Speakers
            </Link>
            <Link href="/#partners" className={`${scrolled ? 'text-white' : 'text-gray-900'} hover:text-primary-light font-medium`}>
              Partners
            </Link>
          
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`text-2xl ${scrolled ? 'text-primary' : 'text-white'}`}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link href="/" 
                className="text-white hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link href="/#about" 
                className="text-white hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link href="/#editions" 
                className="text-white hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Editions
              </Link>
              <Link href="/#speakers" 
                className="text-white hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Speakers
              </Link>
              <Link href="/#partners" 
                className="text-white hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Partners
              </Link>
             
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;