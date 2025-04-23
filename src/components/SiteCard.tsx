import React, { useState } from 'react';
import { ReligiousSite } from '../types';
import { Cuboid as Cube, Info } from 'lucide-react';

interface SiteCardProps {
  site: ReligiousSite;
}

const SiteCard: React.FC<SiteCardProps> = ({ site }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getReligionColor = (religion: string) => {
    switch(religion.toLowerCase()) {
      case 'hinduism': return 'bg-orange-600';
      case 'islam': return 'bg-green-600';
      case 'sikhism': return 'bg-yellow-600';
      case 'buddhism': return 'bg-amber-600';
      case 'christianity': return 'bg-blue-600';
      case 'jainism': return 'bg-red-600';
      default: return 'bg-purple-600';
    }
  };

  return (
    <div 
      className="relative h-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 group bg-white/30 dark:bg-gray-800/30 backdrop-blur-md"
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Religion Tag */}
      <div className={`absolute top-4 left-4 z-10 ${getReligionColor(site.religion)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
        {site.religion}
      </div>
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${site.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-serif font-bold mb-2 text-gray-900 dark:text-white">{site.name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{site.location}</p>
        <p className="text-sm line-clamp-3 mb-4 text-gray-700 dark:text-gray-300">{site.description}</p>
        
        {/* Buttons */}
        <div className="flex space-x-2">
          <a 
            href={site.detailsLink} // Direct link to details page
            className="flex-1 flex items-center justify-center py-2 px-4 bg-amber-600/90 hover:bg-amber-700 text-white text-sm font-medium rounded-md transition-colors backdrop-blur-sm"
          >
            <Info className="h-4 w-4 mr-2" />
            View Details
          </a>
          <a 
            href={site.threeDViewLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center py-2 px-4 bg-gray-200/80 hover:bg-gray-300 dark:bg-gray-700/80 dark:hover:bg-gray-600 text-gray-700 dark:text-white text-sm font-medium rounded-md transition-colors backdrop-blur-sm"
          >
            <Cube className="h-4 w-4 mr-2" />
            3D View
          </a>
        </div>
      </div>
      
      {/* Hover Overlay with Location */}
      <div 
        className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <h3 className="text-2xl font-bold text-white">{site.name}</h3>
        <p className="text-amber-400 mb-4">{site.location}</p>
      </div>
    </div>
  );
};

export default SiteCard;
