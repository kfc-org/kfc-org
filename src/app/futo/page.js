// src/futo/page.js
"use client"
import { useEffect } from 'react';
import Head from 'next/head';
import EditionHero from '@/components/editions/EditionHero';
import EditionGallery from '../../components/editions/EditionGallery';
import EditionInfo from '@/components/editions/EditionInfo';
import EditionSpeakers from '../../components/editions/EditionSpeakers';

export default function FutoEdition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const description = [
    "Following the success of our inaugural event, the Konoha Financial Conference expanded to the Federal University of Technology, Owerri (FUTO), reaching students in Eastern Nigeria.",
    "The KFC FUTO edition welcomed over 600 students from engineering, technology, and business programs, offering specialized financial education tailored to tech-oriented careers and entrepreneurship.",
    "This edition focused on tech entrepreneurship, investment in technology startups, and financial management for tech professionals. The event featured a hackathon where students worked on fintech solutions to local financial challenges."
  ];

  const stats = {
    attendees: "600+",
    speakers: "15",
    workshops: "7",
    hours: "20"
  };

  const gallery = [
    {
      src: "/images/futo/futo-1.jpg",
      alt: "Opening ceremony of KFC FUTO",
      caption: "Welcome address at the FUTO Sports Complex"
    },
    {
      src: "/images/futo/futo-2.jpg",
      alt: "Hackathon session at KFC FUTO",
      caption: "Students collaborating during the fintech hackathon"
    },
    {
      src: "/images/futo/futo-3.jpg",
      alt: "Workshop session at KFC FUTO",
      caption: "Interactive session on tech entrepreneurship"
    },
    {
      src: "/images/futo/futo-4.jpg",
      alt: "Panel discussion at KFC FUTO",
      caption: "Tech founders sharing their financial journey"
    },
    {
      src: "/images/futo/futo-5.jpg",
      alt: "Networking event at KFC FUTO",
      caption: "Students connecting with industry professionals"
    },
    {
      src: "/images/futo/futo-6.jpg",
      alt: "Closing ceremony at KFC FUTO",
      caption: "Award presentation to hackathon winners"
    }
  ];

  const speakers = [
    {
      name: "Engineer Chidi Okafor",
      title: "CTO, Ninja Fintech",
      bio: "Tech leader with expertise in building financial solutions for underserved communities.",
      image: "/images/speakers/iwuju.png",
     
    },
    {
      name: "Dr. Ngozi Obi",
      title: "Venture Capitalist",
      bio: "Investor in early-stage tech startups across Nigeria and West Africa.",
      image: "/images/speakers/iwuju.png",
      
    },
    {
      name: "Felix Adamu",
      title: "Founder, TechWallet",
      bio: "FUTO alumni who built a successful fintech company now valued at $10M.",
      image: "/images/speakers/manifest.png",

    },
   /*  {
      name: "Prof. Chinwe Okoro",
      title: "Financial Technology Researcher",
      bio: "Leading academic in financial inclusion through technology solutions.",
      image: "/images/speakers/speaker1.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Michael Eze",
      title: "Blockchain Developer",
      bio: "Expert in developing blockchain solutions for financial services.",
      image: "/images/speakers/speaker2.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Blessing Nwafor",
      title: "Digital Banking Specialist",
      bio: "Pioneer in bringing digital banking innovations to rural communities.",
      image: "/images/speakers/speaker3.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "John Okeke",
      title: "Financial Inclusion Advocate",
      bio: "Working on technology-driven solutions to improve financial literacy.",
      image: "/images/speakers/speaker1.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Chioma Ndukwe",
      title: "AgriTech Entrepreneur",
      bio: "Founder of platform connecting farmers with financial services and markets.",
      image: "/images/speakers/speaker2.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    } */
  ];

  return (
    <>
      <Head>
        <title>KFC FUTO Edition | Konoha Financial Conference</title>
        <meta name="description" content="Konoha Financial Conference at Federal University of Technology, Owerri." />
      </Head>

      
      <main>
        <EditionHero 
          title="KFC FUTO: Tech Meets Finance"
          date="October 5-7, 2023"
          location="FUTO Sports Complex"
          time="9:00 AM - 6:00 PM"
          backgroundImage="/images/futo/futo-2.jpg"
        />
        
        <EditionInfo 
          description={description}
          stats={stats}
        />
        
        <EditionGallery 
          images={gallery}
        />
        
        <EditionSpeakers 
          speakers={speakers}
        />
      </main>

    </>
  );
}