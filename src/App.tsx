import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SitesList from './components/SitesList';
import About from './components/About';
import Footer from './components/Footer';
import { religiousSites } from './data/sites';

function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SitesList sites={religiousSites} />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;