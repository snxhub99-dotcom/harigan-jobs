import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-primary-dark py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=5')" }}></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold font-serif text-accent-gold leading-tight mb-6 animate-fade-in-up">
          Your Trusted Partner for Hospitality Staffing
        </h2>
        <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto mb-8 animate-fade-in-up delay-100">
          We specialize in providing end-to-end staffing solutions for restaurants and cafés,
          ensuring you have the right manpower for smooth and efficient operations.
          
        </p>
        <a href="#services" className="inline-block bg-accent-gold text-primary-dark font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-200">
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;