// src/components/home/AllEditions.jsx
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';

const pastEditions = [
  {
    id: 1,
    title: "KFC Unilag",
    image: "/images/unilag/img-4.jpg",
    date: "March 15-16, 2024",
    location: "University of Lagos",
    attendees: "500+",
    slug: "unilag"
  },
  {
    id: 2,
    title: "KFC FUTO",
    image: "/images/futo/futo-1.jpg",
    date: "November 10-11, 2023",
    location: "Federal University of Technology, Owerri",
    attendees: "450+",
    slug: "futo"
  }
];

const upcomingEditions = [
  {
    id: 3,
    title: "KFC Unibadan",
    image: "/images/ibadan.png",
    date: "Coming Soon: October 2025",
    location: "University of Ibadan",
    slug: "#"
  },
  {
    id: 4,
    title: "KFC UniUyo",
    image: "/images/uyo.png",
    date: "Coming Soon: December 2025",
    location: "University of Uyo",
    slug: "#"
  }
];

const AllEditions = () => {
  return (
    <section id="editions" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Editions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore our past and upcoming conferences across Nigerian universities.
          </p>
        </div>

        {/* Past Editions */}
        <div className="mb-16">
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
                    href={`/editions/${edition.slug}`}
                    className="text-primary font-medium flex items-center hover:text-primary-dark"
                  >
                    View Details <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Editions */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <span className="bg-primary w-2 h-8 inline-block mr-3"></span>
            Upcoming Editions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  
                  <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                    Notify Me When Registration Opens
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllEditions;