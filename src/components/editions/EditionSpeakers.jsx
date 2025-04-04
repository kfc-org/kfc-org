// src/components/editions/EditionSpeakers.jsx
import Image from 'next/image';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';

const EditionSpeakers = ({ speakers }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Speakers</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the industry experts and thought leaders who shared their knowledge and insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  loading="eager"
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                <p className="text-gray-500 mb-3">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditionSpeakers;