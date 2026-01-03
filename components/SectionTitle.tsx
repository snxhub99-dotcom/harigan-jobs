import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-bold font-serif text-accent-gold mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-light opacity-80 font-sans max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
