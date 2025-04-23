import React, { useEffect, useRef } from 'react';
import { ReligiousSite } from '../types';
import { X, MapPin, Cuboid as Cube } from 'lucide-react';

interface SiteDetailProps {
  site: ReligiousSite | null;
  onClose: () => void;
}

const SiteDetail: React.FC<SiteDetailProps> = ({ site, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  if (!site) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fade-in">
      <div 
        ref={modalRef}
        className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-scale-in"
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        {/* Image section */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${site.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-black opacity-40"></div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="w-full md:w-3/5 p-6 overflow-y-auto">
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">{site.name}</h2>
            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{site.location}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">About</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {site.detailedInfo}
            </p>
          </div>
          
          <div className="flex justify-center mt-4">
            <a 
              href={site.threeDViewLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
            >
              <Cube className="h-5 w-5 mr-2" />
              Explore in 3D
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDetail;