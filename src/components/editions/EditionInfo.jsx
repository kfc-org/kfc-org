import React from 'react';
import { FiUsers, FiMic, FiAward, FiClock } from 'react-icons/fi';

const EditionInfo = ({ description, stats }) => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container-custom px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* About This Edition */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">About This Edition</h2>
            <div className="w-16 md:w-20 h-1 bg-primary mb-4 md:mb-6"></div>
            <div className="text-gray-700 space-y-3 md:space-y-4">
              {description.map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base">{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Edition Highlights */}
          <div className="bg-gray-50 p-5 md:p-6 lg:p-8 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Edition Highlights</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Attendees Stat Card */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <FiUsers className="text-primary text-lg md:text-xl" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stats.attendees}</p>
                </div>
                <h4 className="text-lg md:text-xl font-semibold ml-3">Attendees</h4>
              </div>
              
              {/* Speakers Stat Card */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <FiMic className="text-primary text-lg md:text-xl" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stats.speakers}</p>
                </div>
                <h4 className="text-lg md:text-xl font-semibold ml-3">Speakers</h4>
              </div>
              
              {/* Workshops Stat Card */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <FiAward className="text-primary text-lg md:text-xl" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stats.workshops}</p>
                </div>
                <h4 className="text-lg md:text-xl font-semibold ml-3">Workshops</h4>
              </div>
              
              {/* Hours Stat Card */}
              {/* <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <FiClock className="text-primary text-lg md:text-xl" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stats.hours}</p>
                </div>
                <h4 className="text-lg md:text-xl font-semibold ml-3">Hours</h4>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditionInfo;