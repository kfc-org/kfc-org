// src/components/home/PartnerWithUs.jsx
"use client";
import { FiArrowRight, FiUsers, FiBriefcase, FiBarChart2 } from 'react-icons/fi';

const PartnerWithUs = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-white/90 mb-8 text-lg">
              Join our mission to empower the next generation with essential financial knowledge. As a partner, you'll gain access to thousands of engaged students across Nigeria's top universities.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <FiUsers className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Brand Visibility</h3>
                  <p className="text-white/80">
                    Showcase your brand to thousands of university students, Nigeria's future leaders and decision makers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <FiBriefcase className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Talent Recruitment</h3>
                  <p className="text-white/80">
                    Connect with promising students for internships and future employment opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <FiBarChart2 className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Social Impact</h3>
                  <p className="text-white/80">
                    Contribute to a meaningful cause that addresses a critical gap in Nigeria's educational system.
                  </p>
                </div>
              </div>
            </div>

            <button 
          className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold inline-flex items-center"
           onClick={() => window.location.href = 'mailto:sponsors@example.com?subject=Request%20for%20Sponsorship%20Deck&body=Hello%2C%0A%0AI%20would%20like%20to%20request%20the%20sponsorship%20deck%20for%20your%20upcoming%20event.%0A%0AThank%20you%2C%0A'}
          >
          Request Sponsorship Deck <FiArrowRight className="ml-2" />
          </button>
            
           
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-primary text-2xl font-bold mb-6">Get In Touch</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your full name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email address" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  placeholder="Enter your company name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Tell us about your partnership interests" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;