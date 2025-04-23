import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSites = () => {
    const sitesSection = document.getElementById('sites');
    if (sitesSection) {
      sitesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" 
           style={{ 
             backgroundImage: 'url(https://images.pexels.com/photos/6521718/pexels-photo-6521718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
             backgroundPosition: 'center 30%'
           }}>
        <div className="absolute inset-0 bg-black opacity-50 dark:opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
          Religious <span className="text-amber-400">Harmony</span> in India
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
          Explore the diverse sacred sites that showcase India's rich tapestry of faiths and traditions.
        </p>
        <button 
          onClick={scrollToSites}
          className="px-8 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition duration-300 animate-fade-in-delay-2"
        >
          Discover Sacred Sites
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
        onClick={scrollToSites}
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </div>
  );
};

export default Hero;