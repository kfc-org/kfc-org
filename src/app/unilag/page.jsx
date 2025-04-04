// src/app/unilag/page.jsx
"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import EditionHero from '../../components/editions/EditionHero';
import EditionInfo from '../../components/editions/EditionInfo';
import EditionGallery from '../../components/editions/EditionGallery';
import EditionSpeakers from '../../components/editions/EditionSpeakers';

export default function UnilagEdition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const description = [
    "The inaugural edition of Konoha Financial Conference took place at the University of Lagos, bringing together students from various departments to learn essential financial skills and knowledge.",
    "Over 500 students attended this groundbreaking event, which featured keynote speeches, panel discussions, and interactive workshops from leading financial experts and entrepreneurs.",
    "The KFC Unilag edition focused on introducing students to personal finance basics, investment opportunities for young Nigerians, and entrepreneurship in the digital age. Participants received resource kits with valuable materials to continue their financial education journey."
  ];

  const stats = {
    attendees: "500+",
    speakers: "12",
    workshops: "5",
    hours: "16"
  };

  const gallery = [
    {
      src: "/images/unilag/img-1.jpg",
      alt: "Opening ceremony of KFC Unilag",
      caption: "Opening ceremony with packed auditorium"
    },
    {
      src: "/images/unilag/img-2.jpg",
      alt: "Panel discussion at KFC Unilag",
      caption: "Industry experts discussing investment opportunities"
    },
    {
      src: "/images/unilag/img-3.jpg",
      alt: "Workshop session at KFC Unilag",
      caption: "Students participating in hands-on financial workshop"
    },
    {
      src: "/images/unilag/img-4.jpg",
      alt: "Networking session at KFC Unilag",
      caption: "Networking session between students and professionals"
    },
    {
      src: "/images/unilag/img-5.jpg",
      alt: "Award ceremony at KFC Unilag",
      caption: "Winners of the financial literacy competition"
    },
    {
      src: "/images/unilag/img-6.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: "Group photo with all participants and speakers"
    }
  ];

  const speakers = [
    {
      name: "Dr. Adebayo Johnson",
      title: "Chief Economist, Konoha Bank",
      bio: "Expert in macroeconomics with over 15 years of experience in the Nigerian financial sector.",
      image: "/images/speakers/onlyoneapril.jpg",
      
    },
    {
      name: "Sarah Okonkwo",
      title: "Founder, FinTech Academy",
      bio: "Serial entrepreneur and educator passionate about making financial knowledge accessible to all.",
      image: "/images/speakers/manifest.png",
     
    },
    {
      name: "Tunde Bakare",
      title: "Investment Analyst, Leaf Capital",
      bio: "Specializes in emerging markets and investment opportunities for young professionals.",
      image: "/images/speakers/iwuju.png",
      
    },
   /*  {
      name: "Amina Hassan",
      title: "Personal Finance Coach",
      bio: "Dedicated to helping students and young professionals achieve financial independence.",
      image: "/images/speakers/speaker1.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Victor Olatunji",
      title: "Tech Entrepreneur",
      bio: "Founder of three successful startups with expertise in digital innovation and funding.",
      image: "/images/speakers/speaker2.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Grace Egwu",
      title: "Crypto & Blockchain Specialist",
      bio: "Educator on digital currencies and blockchain technology for beginners.",
      image: "/images/speakers/speaker3.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Emeka Nduka",
      title: "Stock Market Analyst",
      bio: "Expert in Nigerian Stock Exchange with focus on opportunities for small investors.",
      image: "/images/speakers/speaker1.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Folake Adeniran",
      title: "Financial Literacy Advocate",
      bio: "Founder of 'Money Matters for Youth' initiative with national recognition.",
      image: "/images/speakers/speaker2.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    } */
  ];

  return (
    <>
      <Head>
        <title>KFC Unilag Edition | Konoha Financial Conference</title>
        <meta name="description" content="First edition of the Konoha Financial Conference at University of Lagos." />
      </Head>

     
      
      <main>
        <EditionHero 
          title="KFC Unilag: Financial Literacy for All"
          date="March 15-16, 2023"
          location="University of Lagos Main Auditorium"
          time="9:00 AM - 5:00 PM"
          backgroundImage="/images/unilag/img-4.jpg"
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