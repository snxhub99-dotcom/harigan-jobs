import React from 'react';
import Header from './components/Header';
import { Services } from './components/Services';
import Hero from './components/Hero';
import ServiceModules from './components/ServiceModules';
import TermsAndConditions from './components/TermsAndConditions';
import NextSteps from './components/NextSteps';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <ServiceModules />
        <TermsAndConditions />
        <NextSteps />
      </main>
      <Contact />
    </div>
  );
};

export default App;
