// src/components/layout/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="/images/logo.png" alt="KFC Logo" width={40} height={40} />
              {/* <span className="ml-2 font-bold text-lg">KFC</span> */}
            </div>
            <p className="text-gray-300 mb-6">
              Empowering young people with financial knowledge and skills to build a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-light text-xl">
                <FiInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light text-xl">
                <FiTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light text-xl">
                <FiLinkedin />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light text-xl">
                <FiFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-primary-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#editions" className="text-gray-300 hover:text-primary-light">
                  Editions
                </Link>
              </li>
              <li>
                <Link href="/#speakers" className="text-gray-300 hover:text-primary-light">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/#partners" className="text-gray-300 hover:text-primary-light">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Editions */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Editions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/editions/unilag" className="text-gray-300 hover:text-primary-light">
                  KFC Unilag
                </Link>
              </li>
              <li>
                <Link href="/editions/futo" className="text-gray-300 hover:text-primary-light">
                  KFC FUTO
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-light">
                  KFC Unibadan (Upcoming)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-light">
                  KFC UniUyo (Upcoming)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMail className="text-primary-light mt-1 mr-3" />
                <span className="text-gray-300">info@kfcglobal.org</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="text-primary-light mt-1 mr-3" />
                <span className="text-gray-300">+234 905 961 2256</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="text-primary-light mt-1 mr-3" />
                <span className="text-gray-300">+234 907 521 1799</span>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Konoha Financial Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;