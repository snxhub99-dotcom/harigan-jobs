import React from 'react';
import { NavLink } from './NavLink'; // Assuming NavLink component for navigation items

const Header: React.FC = () => {
  return (
    <header className="bg-primary-dark shadow-lg sticky top-0 z-50 py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <img src="https://i.ibb.co/L5hY5M7/Resto-Jobs-logo.png" alt="Resto Jobs Logo" className="h-12 md:h-16" />
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-accent-gold ml-4">Resto Jobs</h1>
      </div>
      <nav className="w-full md:w-auto">
        <ul className="flex flex-wrap justify-center md:space-x-8 space-x-4">
          <li><NavLink href="#hero">Home</NavLink></li>
          <li><NavLink href="#services">Services</NavLink></li>
          <li><NavLink href="#modules">Modules</NavLink></li>
          <li><NavLink href="#terms">Terms</NavLink></li>
          <li><NavLink href="#next-steps">Next Steps</NavLink></li>
          <li><NavLink href="#contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;