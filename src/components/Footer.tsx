import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-serif font-bold flex items-center">
              Religious <span className="text-amber-500 mx-1">Harmony</span> India
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Exploring diversity through sacred architecture
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">Home</a>
            <a href="#sites" className="text-gray-300 hover:text-amber-500 transition-colors">Sacred Sites</a>
            <a href="#about" className="text-gray-300 hover:text-amber-500 transition-colors">About</a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for IKS Group 12 {new Date().getFullYear()}
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-gray-400 hover:text-amber-500 transition-colors"
          >
            Back to Top <ArrowUp className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;