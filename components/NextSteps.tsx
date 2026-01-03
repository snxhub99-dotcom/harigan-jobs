import React from 'react';
import SectionTitle from './SectionTitle';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => (
  <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="w-12 h-12 flex items-center justify-center bg-accent-gold rounded-full text-primary-dark font-bold text-2xl mb-4" aria-hidden="true">
      {step}
    </div>
    <h3 className="text-xl font-semibold text-text-light mb-3">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </div>
);

const NextSteps: React.FC = () => {
  return (
    <section id="next-steps" className="py-16 md:py-24 bg-primary-dark text-center">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Ready to Transform Your Team?"
          subtitle="Here's how to get started with Resto Jobs."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <StepCard
            step={1}
            title="Initial Consultation"
            description="Share your staffing needs and business goals with our expert consultants."
          />
          <StepCard
            step={2}
            title="Customized Strategy"
            description="We develop a tailored recruitment plan that aligns perfectly with your requirements."
          />
          <StepCard
            step={3}
            title="Seamless Placement"
            description="Receive top-tier candidates and integrate them effortlessly into your operations."
          />
        </div>
        <div className="mt-16">
          <a href="#contact" className="inline-block bg-accent-gold text-primary-dark font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105">
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
