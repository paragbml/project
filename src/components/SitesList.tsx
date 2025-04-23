import React, { useState } from 'react';
import SiteCard from './SiteCard';
import SiteDetail from './SiteDetail';
import { ReligiousSite } from '../types';

interface SitesListProps {
  sites: ReligiousSite[];
}

const SitesList: React.FC<SitesListProps> = ({ sites }) => {
  const [selectedSite, setSelectedSite] = useState<ReligiousSite | null>(null);

  const handleViewDetails = (site: ReligiousSite) => {
    setSelectedSite(site);
  };

  const handleCloseDetails = () => {
    setSelectedSite(null);
  };

  return (
    <section id="sites" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900 dark:text-white">
            Sacred <span className="text-amber-600 dark:text-amber-500">Sites</span> of India
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore the diverse religious architecture that showcases India's rich spiritual heritage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sites.map((site) => (
            <SiteCard 
              key={site.id} 
              site={site} 
              onViewDetails={handleViewDetails} 
            />
          ))}
        </div>
      </div>
      
      {selectedSite && (
        <SiteDetail 
          site={selectedSite} 
          onClose={handleCloseDetails} 
        />
      )}
    </section>
  );
};

export default SitesList;
