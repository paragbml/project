import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Compass className="h-8 w-8 text-amber-600 dark:text-amber-500" />
            <h1 className={`ml-2 text-xl md:text-2xl font-serif font-bold transition-colors ${scrolled ? 'text-white text-white' : 'text-white text-white'}`}>
              Religious <span className="text-amber-600 dark:text-amber-500">Harmony</span>
            </h1>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full mr-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? 
                <Sun className="h-5 w-5 text-amber-500" /> : 
                <Moon className="h-5 w-5 text-gray-700" />
              }
            </button>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a href="#" className={`font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-500 ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-700 dark:text-white'}`}>Home</a>
                </li>
                <li>
                  <a href="#sites" className={`font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-500 ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-700 dark:text-white'}`}>Sacred Sites</a>
                </li>
                <li>
                  <a href="#about" className={`font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-500 ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-700 dark:text-white'}`}>About</a>
                </li>
              </ul>
            </nav>
            
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 
                <X className={`h-6 w-6 ${scrolled ? 'text-gray-800 dark:text-white' : 'text-gray-800 dark:text-white'}`} /> : 
                <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800 dark:text-white' : 'text-gray-800 dark:text-white'}`} />
              }
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <ul className="py-4 px-6 space-y-4">
            <li>
              <a 
                href="#" 
                className="block font-medium text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#sites" 
                className="block font-medium text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Sacred Sites
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="block font-medium text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
