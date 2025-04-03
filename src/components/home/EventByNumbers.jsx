// src/components/home/EventByNumbers.jsx
import { FiUsers, FiBookOpen, FiMic, FiTrendingUp } from 'react-icons/fi';

const stats = [
  {
    icon: <FiUsers className="text-3xl text-primary-light" />,
    number: "1000+",
    label: "Students Educated"
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
    number: "2",
    label: "Universities Reached"
  }
];

const EventByNumbers = () => {
  return (
    <section className="section bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">KFC By The Numbers</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            The impact we've made since our inception in empowering Nigeria's youth with financial knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl italic text-gray-300 max-w-3xl mx-auto">
            "Our goal is to reach 10,000 students across 10 universities by 2027, creating a generation of financially savvy young Nigerians."
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventByNumbers;