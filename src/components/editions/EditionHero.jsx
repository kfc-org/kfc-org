// src/components/editions/EditionHero.jsx
import React from 'react';
import { FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';

const EditionHero = ({ title, date, location, time, backgroundImage }) => {
  return (
    <div className="relative min-h-[60vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 mt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mb-8">
            <div className="flex items-center text-white">
              <FiCalendar className="mr-2 text-primary-light" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-white">
              <FiMapPin className="mr-2 text-primary-light" />
              <span>{location}</span>
            </div>
            <div className="flex items-center text-white">
              <FiClock className="mr-2 text-primary-light" />
              <span>{time}</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg inline-block">
            <h2 className="text-white text-xl font-semibold mb-2">Event Completed</h2>
            <p className="text-white/90">
              Thank you to all attendees, speakers, and sponsors who made this edition a great success!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditionHero;