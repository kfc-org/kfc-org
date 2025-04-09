// src/components/home/AllEditions.jsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';
import {motion} from "framer-motion";

const fadeInFrom = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});

const pastEditions = [
  {
    id: 1,
    title: "KFC Unilag",
    image: "/images/unilag/img-4.jpg",
    date: "Fri Nov 22nd, 2024",
    location: "University of Lagos",
    attendees: "400+",
    slug: "unilag"
  },
  {
    id: 2,
    title: "KFC FUTO",
    image: "/images/futo/futo-1.jpg",
    date: "Sat 6th April, 2024",
    location: "Federal University of Technology, Owerri",
    attendees: "1100+",
    slug: "futo"
  }
];

const upcomingEditions = [
  {
    id: 3,
    title: "KFC UI",
    image: "/images/ibadan.png",
    date: "Coming Soon: July 2025",
    location: "University of Ibadan",
    slug: "#"
  },
  {
    id: 4,
    title: "KFC UNIYO",
    image: "/images/uyo.png",
    date: "Coming Soon: Nov 2025",
    location: "University of Uyo",
    slug: "#"
  }
];

const AllEditions = () => {
  return (
    <section id="editions" className="section bg-white">
      <div className="container-custom">
        <motion.div
        variants={fadeInFrom("left")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }} 
        className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Editions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore our past and upcoming conferences across Nigerian universities.
          </p>
        </motion.div>

        {/* Past Editions */}
        <motion.div 
        variants={fadeInFrom("right")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }}
        className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <span className="bg-primary w-2 h-8 inline-block mr-3"></span>
            Past Editions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEditions.map((edition) => (
              <div 
                key={edition.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition border border-gray-100"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={edition.image} 
                    alt={edition.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition duration-500"
                    loading="eager"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-3">{edition.title}</h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FiCalendar className="mr-2 text-primary" />
                      <span>{edition.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiMapPin className="mr-2 text-primary" />
                      <span>{edition.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiUsers className="mr-2 text-primary" />
                      <span>{edition.attendees} Attendees</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/${edition.slug}`}
                    className="text-primary font-medium flex items-center hover:text-primary-dark"
                  >
                    View Details <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Editions */}
        <div>
          <motion.h3 
          variants={fadeInFrom("left")} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false }}
          className="text-2xl font-semibold mb-8 flex items-center">
            <span className="bg-primary w-2 h-8 inline-block mr-3"></span>
            Upcoming Editions
          </motion.h3>
          
          <motion.div 
          variants={fadeInFrom("right")} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEditions.map((edition) => (
              <div 
                key={edition.id} 
                className="bg-gray-50 rounded-xl overflow-hidden border border-dashed border-gray-300 hover:border-primary transition"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">Coming Soon</span>
                  </div>
                  <Image 
                    src={edition.image} 
                    alt={edition.title} 
                    fill
                    style={{ objectFit: 'cover', opacity: 0.5 }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-3">{edition.title}</h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FiCalendar className="mr-2 text-primary" />
                      <span>{edition.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiMapPin className="mr-2 text-primary" />
                      <span>{edition.location}</span>
                    </div>
                  </div>
                  
                  <a href="mailto:program@kfconference.org?subject=KF%20Conference%20Registration%20Notification&body=Hello,%0A%0APlease%20notify%20me%20when%20registration%20opens%20for%20the%20upcoming%20conference.%0A%0AThank%20you!" className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium inline-block no-underline">
                   Notify Me When Registration Opens
                   </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AllEditions;