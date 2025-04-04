// src/components/home/EventByNumbers.jsx
"use client";
import { FiUsers, FiBookOpen, FiMic, FiTrendingUp } from 'react-icons/fi';
import {motion} from "framer-motion";

const fadeInFrom = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});

const stats = [
  {
    icon: <FiUsers className="text-3xl text-primary-light" />,
    number: "3000+",
    label: "Attendees"
  },
  {
    icon: <FiBookOpen className="text-3xl text-primary-light" />,
    number: "20+",
    label: "Workshops Conducted"
  },
  {
    icon: <FiMic className="text-3xl text-primary-light" />,
    number: "30+",
    label: "Expert Speakers"
  },
  {
    icon: <FiTrendingUp className="text-3xl text-primary-light" />,
    number: "3.5M+",
    label: "Social Media Impression"
  }
];

const EventByNumbers = () => {
  return (
    <section className="section bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div 
        variants={fadeInFrom("left")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }}
        className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">KFC By The Numbers</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            The impact we've made since our inception in empowering Nigeria's youth with financial knowledge.
          </p>
        </motion.div>

        <motion.div 
        variants={fadeInFrom("right")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 rounded-lg p-8 text-center border-b-4 border-primary flex flex-col items-center"
            >
              <div className="bg-gray-700/50 rounded-full p-4 mb-4 inline-block">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div 
        variants={fadeInFrom("left")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }}
        className="mt-16 text-center">
          <p className="text-xl italic text-gray-300 max-w-3xl mx-auto">
            "Our goal is to empower the next generation of financial leaders by providing them with the tools, knowledge, and community they need to succeed."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventByNumbers;