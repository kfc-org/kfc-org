// src/components/home/EventFeatures.jsx
import { FiMessageCircle, FiBookOpen, FiUsers, FiAward, FiTrendingUp, FiGift } from 'react-icons/fi';

const features = [
  {
    icon: <FiMessageCircle className="text-4xl text-primary" />,
    title: "Expert Talks",
    description: "Learn from industry leaders and financial experts through keynote speeches and panel discussions."
  },
  {
    icon: <FiBookOpen className="text-4xl text-primary" />,
    title: "Workshops",
    description: "Participate in hands-on workshops focused on practical financial skills and tools."
  },
  {
    icon: <FiUsers className="text-4xl text-primary" />,
    title: "Networking",
    description: "Connect with professionals, mentors, and like-minded peers interested in finance."
  },
  {
    icon: <FiAward className="text-4xl text-primary" />,
    title: "Competitions",
    description: "Test your knowledge and skills in exciting financial literacy competitions with prizes."
  },
  {
    icon: <FiTrendingUp className="text-4xl text-primary" />,
    title: "Career Opportunities",
    description: "Discover internship and job opportunities with our partner organizations."
  },
  {
    icon: <FiGift className="text-4xl text-primary" />,
    title: "Resource Kits",
    description: "Take home valuable resources and materials to continue your financial education journey."
  }
];

const EventFeatures = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Our Events Special</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Each KFC edition offers a comprehensive experience designed to make financial education engaging, practical, and impactful for university students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventFeatures;