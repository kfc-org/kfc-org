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
    "Over 400 students attended this groundbreaking event, which featured keynote speeches, panel discussions, and interactive workshops from leading financial experts and entrepreneurs.",
    "The KFC Unilag edition focused on introducing students to personal finance basics, investment opportunities for young Nigerians, and entrepreneurship in the digital age. Participants received resource kits with valuable materials to continue their financial education journey."
  ];

  const stats = {
    attendees: "400+",
    speakers: "8",
    workshops: "2",
  };

  const gallery = [
    {
      src: "/images/unilag/img-1.jpg",
      alt: "Opening ceremony of KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-2.jpg",
      alt: "Panel discussion at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-21.jpg",
      alt: "Panel discussion at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-3.jpg",
      alt: "Workshop session at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-4.jpg",
      alt: "Networking session at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-5.jpg",
      alt: "Award ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-6.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-7.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-8.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-9.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-10.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-11.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-12.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-13.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-14.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-15.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-16.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-17.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-18.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-19.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
    {
      src: "/images/unilag/img-20.jpg",
      alt: "Closing ceremony at KFC Unilag",
      caption: ""
    },
  ];

  const speakers = [
    /* {
      name: "XeusTheGreat",
      title: "Web3 Business Developer",
      image: "/images/speakers/onlyoneapril.jpg",
    },
    {
      name: "Cracky Brown",
      title: "Founder, Billionaires Club",
      image: "/images/speakers/onlyoneapril.jpg",
    }, */
    {
      name: "OnlyOneApril",
      title: "Trader and Block-chain Developer.",
      image: "/images/speakers/onlyoneapril.jpg",
    },
    {
      name: "Frank Samuel",
      title: "Founder, Financial Fitness Clinic.",
      image: "/images/speakers/frank-samuel.png",
    },
    {
      name: "Soropuchukwu",
      title: "Serial Investor and Trader",
      image: "/images/speakers/sopuruchukwu.png",
    },
    {
      name: "Defi Princess",
      title: "Web3 Business Developer",
      image: "/images/speakers/princess.jpg",
    },
    /* {
      name: "Defi Queen",
      title: "Web3 Business Developer",
      image: "/images/speakers/onlyoneapril.jpg",
    }, */
    {
      name: "Witty Prince",
      title: "Founder Konoha University, KFC and Uniscope.",
      image: "/images/speakers/prince.png",
    },
   
  ];

  return (
    <>
      <Head>
        <title>KFC Unilag Edition | Konoha Financial Conference</title>
        <meta name="description" content="First edition of the Konoha Financial Conference at University of Lagos." />
      </Head>

     
      
      <main>
        <EditionHero 
          title="KFC Unilag: Young and Abundant"
          date="Fri 22nd Nov, 2024"
          location="FFS Lecture Theatre"
          time="9:00 AM"
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