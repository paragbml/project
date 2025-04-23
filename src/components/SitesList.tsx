import React, { useState } from 'react';
import { ReligiousSite } from '../types';
import SiteCard from './SiteCard';
import { Filter } from 'lucide-react';

interface SitesListProps {
  sites: ReligiousSite[];
}

const SitesList: React.FC<SitesListProps> = ({ sites }) => {
  const [selectedReligion, setSelectedReligion] = useState<string>('all');
  const [filteredSites, setFilteredSites] = useState<ReligiousSite[]>(sites);
  
  React.useEffect(() => {
    const filtered = sites.filter(site => {
      const matchesReligion = selectedReligion === 'all' || site.religion.toLowerCase() === selectedReligion.toLowerCase();
      return matchesReligion;
    });
    
    setFilteredSites(filtered);
  }, [selectedReligion, sites]);
  
  const getReligions = () => {
    const religionsSet = new Set(sites.map(site => site.religion));
    return Array.from(religionsSet);
  };
  
  const religions = getReligions();

  return (
    <section id="sites" className="py-20 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-3 text-gray-900 dark:text-white">
          Sacred <span className="text-amber-600 dark:text-amber-500">Sites</span> of India
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Explore the diverse religious landmarks that showcase India's rich cultural heritage and spiritual traditions.
        </p>
        
        {/* Filter */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-10 py-3 border border-gray-300/50 dark:border-gray-700/50 rounded-lg bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none"
              value={selectedReligion}
              onChange={(e) => setSelectedReligion(e.target.value)}
            >
              <option value="all">All Religions</option>
              {religions.map(religion => (
                <option key={religion} value={religion.toLowerCase()}>
                  {religion}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Sites Grid */}
        {filteredSites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSites.map(site => (
              <div 
                key={site.id} 
                className="h-full transform transition-transform duration-300 hover:-translate-y-2"
              >
                <SiteCard site={site} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-300 text-lg">No sacred sites found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SitesList;
