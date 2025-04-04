// src/components/editions/EditionInfo.jsx
import React from 'react';
import { FiUsers, FiMic, FiAward, FiClock } from 'react-icons/fi';

const EditionInfo = ({ description, stats }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Edition</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <div className="text-gray-700 space-y-4">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Edition Highlights</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FiUsers className="text-primary text-xl" />
                  </div>
                  <p className="text-3xl font-bold text-primary">{stats.attendees}</p>
                </div>
               
                <h4 className="text-xl font-semibold ml-3">Attendees</h4>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FiMic className="text-primary text-xl" />
                  </div>
                  <p className="text-3xl font-bold text-primary">{stats.speakers}</p>
                </div>
                <h4 className="text-xl font-semibold ml-3">Speakers</h4>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FiAward className="text-primary text-xl" />
                  </div>
                  <p className="text-3xl font-bold text-primary">{stats.workshops}</p>
                </div>
                <h4 className="text-xl font-semibold ml-3">Workshops</h4>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FiClock className="text-primary text-xl" />
                  </div>
                  <p className="text-3xl font-bold text-primary">{stats.hours}</p>
                </div>
                <h4 className="text-xl font-semibold ml-3">Hours</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditionInfo;