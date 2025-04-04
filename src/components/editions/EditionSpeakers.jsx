import Image from 'next/image';

const EditionSpeakers = ({ speakers }) => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container-custom px-4 mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Event Speakers</h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Meet the industry experts and thought leaders who shared their knowledge and insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
              <div className="relative w-full pt-[125%]">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition duration-300"
                  loading="lazy"
                  
                />
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-1">{speaker.name}</h3>
                <p className="text-gray-500 text-sm md:text-base mb-2 md:mb-3">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditionSpeakers;