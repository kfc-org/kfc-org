// src/components/home/Speakers.jsx
import Image from 'next/image';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';

const speakers = [
  {
    name: "Naruto Uzumaki",
    role: "CEO, Konoha Investment Partners",
    image: "/images/speakers/manifest.png",
    linkedin: "#",
    twitter: "#",
    bio: "Financial expert with over 15 years of experience in investment banking and wealth management."
  },
  {
    name: "Sakura Haruno",
    role: "Financial Literacy Advocate",
    image: "/images/speakers/onlyoneapril.jpg",
    linkedin: "#",
    twitter: "#",
    bio: "Award-winning financial educator passionate about making finance accessible to young people."
  },
  {
    name: "Sasuke Uchiha",
    role: "Founder, Sharingan Capital",
    image: "/images/speakers/iwuju.png",
    linkedin: "#",
    twitter: "#",
    bio: "Serial entrepreneur who has built three successful fintech startups focused on financial inclusion."
  },
  
];

const Speakers = () => {
  return (
    <section id="speakers" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Speakers</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Learn from the best minds in finance, entrepreneurship, and financial education who share their knowledge and experience at our conferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image 
                  src={speaker.image} 
                  alt={speaker.name} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                <p className="text-primary mb-3">{speaker.role}</p>
               {/*  <p className="text-gray-600 text-sm mb-4">{speaker.bio}</p> */}
{/*                 <div className="flex space-x-3">
                  <a 
                    href={speaker.linkedin} 
                    className="bg-gray-100 hover:bg-primary hover:text-white text-gray-600 p-2 rounded-full transition"
                  >
                    <FiLinkedin />
                  </a>
                  <a 
                    href={speaker.twitter} 
                    className="bg-gray-100 hover:bg-primary hover:text-white text-gray-600 p-2 rounded-full transition"
                  >
                    <FiTwitter />
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-outline">
            View All Speakers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;