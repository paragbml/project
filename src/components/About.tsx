import React from 'react';
import { Heart, Globe, Compass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
            About This <span className="text-amber-600 dark:text-amber-500">Project</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            This website showcases India's religious diversity and the beautiful harmony that exists between various faiths.
            It is a college project of IKS Group 12 dedicated to highlighting the importance of unity in diversity through the lens of sacred architecture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg text-center transform transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                <Heart className="h-8 w-8 text-amber-600 dark:text-amber-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Celebrating Diversity</h3>
            <p className="text-gray-600 dark:text-gray-300">
              India's strength lies in its diversity of religions, languages, and cultures that coexist harmoniously.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg text-center transform transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                <Globe className="h-8 w-8 text-amber-600 dark:text-amber-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Religious Tolerance</h3>
            <p className="text-gray-600 dark:text-gray-300">
              India has been a beacon of religious tolerance for centuries, where people of different faiths live and worship freely.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg text-center transform transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                <Compass className="h-8 w-8 text-amber-600 dark:text-amber-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Architectural Marvels</h3>
            <p className="text-gray-600 dark:text-gray-300">
              The sacred sites featured here represent not only spiritual significance but also showcase incredible architectural achievements.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400 italic">
            "In diversity there is beauty and there is strength." - Maya Angelou
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;