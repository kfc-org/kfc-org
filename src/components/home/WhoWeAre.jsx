// src/components/home/WhoWeAre.jsx
import Image from 'next/image';
import { FiTarget, FiUsers, FiBookOpen } from 'react-icons/fi';

const WhoWeAre = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Bridging the Financial Knowledge Gap
            </h3>
            <p className="text-gray-700 mb-6">
              Konoha Financial Conference (KFC) was founded with a clear mission: to empower young Nigerians with essential financial knowledge and skills that school curricula often overlook. We believe that financial literacy is a fundamental right that everyone deserves, regardless of their background or field of study.
            </p>
            <p className="text-gray-700 mb-8">
              By bringing together industry experts, successful entrepreneurs, and financial gurus to university campuses across Nigeria, we create an interactive platform where students can learn, network, and gain practical financial skills that will serve them throughout their lives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition">
                <FiTarget className="text-primary text-3xl mb-3" />
                <h4 className="font-semibold text-lg mb-2">Our Mission</h4>
                <p className="text-center text-gray-600 text-sm">To democratize financial education among Nigerian youth</p>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition">
                <FiUsers className="text-primary text-3xl mb-3" />
                <h4 className="font-semibold text-lg mb-2">Our Audience</h4>
                <p className="text-center text-gray-600 text-sm">University students across all disciplines</p>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition">
                <FiBookOpen className="text-primary text-3xl mb-3" />
                <h4 className="font-semibold text-lg mb-2">Our Approach</h4>
                <p className="text-center text-gray-600 text-sm">Practical, interactive and campus-focused</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
              <Image 
                src="/images/unilag/img-1.jpg" 
                alt="Students at KFC event" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl">
              <p className="text-2xl font-bold">2+</p>
              <p className="text-sm">Years of Impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;