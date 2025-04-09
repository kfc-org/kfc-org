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
    "The KFC FUTO edition welcomed over 1000 students from engineering, technology, and business programs, offering specialized financial education tailored to tech-oriented careers and entrepreneurship.",
    "This edition focused on tech entrepreneurship, investment in technology startups, and financial management for tech professionals."
  ];

  const stats = {
    attendees: "1100+",
    speakers: "9",
    workshops: "7",
  };

  const gallery = [
    {
      src: "/images/futo/futo-1.jpg",
      alt: "Opening ceremony of KFC FUTO",
      caption: ""
    },
    {
      src: "/images/futo/futo-2.jpg",
      alt: "session at KFC FUTO",
      caption: ""
    },
    {
      src: "/images/futo/futo-3.jpg",
      alt: "Workshop session at KFC FUTO",
      caption: ""
    },
    {
      src: "/images/futo/futo-4.jpg",
      alt: "Panel discussion at KFC FUTO",
      caption: ""
    },
    {
      src: "/images/futo/futo-5.jpg",
      alt: "Networking event at KFC FUTO",
      caption: ""
    },
    {
      src: "/images/futo/futo-6.jpg",
      alt: "Closing ceremony at KFC FUTO",
      caption: ""
    },
    {
      src: "/images/futo/futo-7.jpg",
      alt: "Closing ceremony at KFC FUTO",
      caption: ""
    },
    {
      src: "/images/futo/futo-8.jpg",
      alt: "Closing ceremony at KFC FUTO",
      caption: ""
    },
    {
      src: "/images/futo/futo-9.jpg",
      alt: "Closing ceremony at KFC FUTO",
      caption: ""
    },
    {
      src: "/images/futo/futo-10.jpg",
      alt: "Closing ceremony at KFC FUTO",
      caption: ""
    },

    {
      src: "/images/futo/futo-12.jpg",
      alt: "Closing ceremony at KFC FUTO",
      caption: ""
    },
    {
      src: "/images/futo/futo-13.jpg",
      alt: "Closing ceremony at KFC FUTO",
      caption: ""
    },

  ];

  const speakers = [
    {
      name: "OnlyOneApril",
      title: "Trader and Block-chain Developer.",
      bio: "Tech leader with expertise in building financial solutions for underserved communities.",
      image: "/images/speakers/onlyoneapril.jpg",
     
    },
    {
      name: "Emmazy",
      title: "Serial Investor, 2022/2023 FUTO SUG Director of Welfare.",
      bio: "Investor in early-stage tech startups across Nigeria and West Africa.",
      image: "/images/speakers/emmazy.png",
      
    },
    {
      name: "The Cryto Doyen",
      title: " Founder, Doyen CV.",
      bio: "FUTO alumni who built a successful fintech company now valued at $10M.",
      image: "/images/speakers/doyen.png",

    },
    {
      name: "Frank Samuel",
      title: "Founder, Financial Fitness Clinic.",
      bio: "Leading academic in financial inclusion through technology solutions.",
      image: "/images/speakers/frank-samuel.png",
     
    },
    {
      name: "Soropuchukwu",
      title: "Serial Investor",
      bio: "Expert in developing blockchain solutions for financial services.",
      image: "/images/speakers/sopuruchukwu.png",
    
    },
    {
      name: "Manifest",
      title: "Serial Investor and Trader",
      bio: "Pioneer in bringing digital banking innovations to rural communities.",
      image: "/images/speakers/manifest.png",
      
    },
    {
      name: "Jago Emmanuel",
      title: "Head of Growth, Palmremit",
      image: "/images/speakers/palremit.jpg", 
    },
    {
      name: "Elisha David",
      title: "Blockchain Developer and Technical Writer",
      bio: "Founder of platform connecting farmers with financial services and markets.",
      image: "/images/speakers/elisha-david.png",
    },
    {
      name: "Witty Prince",
      title: "Founder Konoha University, KFC and Uniscope.",
      image: "/images/speakers/prince.png", 
    },
  ];

  return (
    <>
      <Head>
        <title>KFC FUTO Edition | Konoha Financial Conference</title>
        <meta name="description" content="Konoha Financial Conference at Federal University of Technology, Owerri." />
      </Head>

      
      <main>
        <EditionHero 
          title="KFC FUTO: The Financial Kulture"
          date="Sat 6th April, 2024"
          location="Sops  Theatre"
          time="9:00 AM"
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