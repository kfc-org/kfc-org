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
            The Konoha Financial Conference (KFC) is more than just an event—it’s a movement. Founded by Witty Prince, KFC was born from a deep passion to help young people gain financial independence.
            </p>
            <p className="text-gray-700 mb-8">
            We bring together students, entrepreneurs, and finance experts to discuss a topic often ignored—money management and financial success. With over 71 virtual sessions and major in-person events, KFC is dedicated to closing the financial literacy gap and helping young Africans take charge of their future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition">
                <FiTarget className="text-primary text-3xl mb-3" />
                <h4 className="font-semibold text-lg mb-2">Our Mission</h4>
                <p className="text-center text-gray-600 text-sm">To equip young Africans with the financial knowledge and skills needed to thrive</p>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition">
                <FiUsers className="text-primary text-3xl mb-3" />
                <h4 className="font-semibold text-lg mb-2">Our Audience</h4>
                <p className="text-center text-gray-600 text-sm">Young professionals, aspiring entrepreneurs, and anyone eager to take control of their financial future</p>
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
                loading="eager"
                priority
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