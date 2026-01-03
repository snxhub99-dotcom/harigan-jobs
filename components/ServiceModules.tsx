import React from 'react';
import SectionTitle from './SectionTitle';

interface ModuleItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ModuleItem: React.FC<ModuleItemProps> = ({ title, description, icon }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
    <div className="text-accent-gold mb-4 text-4xl">{icon}</div>
    <h3 className="text-2xl font-semibold text-text-light mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

const ServiceModules: React.FC = () => {
  return (
    <section id="modules" className="py-16 md:py-24 bg-primary-dark text-center">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Our Specialized Service Modules"
          subtitle="Tailored approaches to meet every aspect of your staffing needs."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          <ModuleItem
            title="Candidate Assessment"
            description="In-depth evaluation of skills, experience, and cultural fit to ensure perfect matches."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3m-3 3h3m-6 4.5h18a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 18 4.5H6a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 6 19.5Z" />
              </svg>
            }
          />
          <ModuleItem
            title="Interview Coordination"
            description="Seamless scheduling and logistics management for all interview stages, both virtual and in-person."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5V6a7.5 7.5 0 0 1 7.5 7.5v1.375c0 .621-.504 1.125-1.125 1.125h-1.375a.625.625 0 0 1-.625-.625V13.5m1.5-3V9a2.25 2.25 0 0 0-2.25-2.25H12c-.621 0-1.125.504-1.125 1.125v1.375m-3-3V7.5A2.25 2.25 0 0 1 9 5.25h1.5A2.25 2.25 0 0 1 12.75 7.5v1.5m-3.75-3V9m-3-6H7.5M21 12.75V15a2.25 2.25 0 0 1-2.25 2.25h-1.5a.75.75 0 0 0-.75.75c0 .414.336.75.75.75H16.5M3 12.75a7.5 7.5 0 0 1 7.5-7.5h1.5A2.25 2.25 0 0 1 13.25 7.5v1.5m-3-3a7.5 7.5 0 0 1-7.5 7.5v1.375c0 .621.504 1.125 1.125 1.125H5.25c.621 0 1.125-.504 1.125-1.125V13.5M3 12.75a7.5 7.5 0 0 1 7.5-7.5h1.5a2.25 2.25 0 0 1 2.25 2.25v1.5m-3-3a7.5 7.5 0 0 1-7.5 7.5v1.375c0 .621.504 1.125 1.125 1.125H5.25c.621 0 1.125-.504 1.125-1.125V13.5" />
              </svg>
            }
          />
          <ModuleItem
            title="Post-Placement Support"
            description="Follow-up and support to ensure successful integration and satisfaction for both employers and candidates."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            }
          />
          <ModuleItem
            title="Payroll & Compliance Assistance"
            description="Guidance on payroll processing and adherence to labor laws and regulations."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.794 0V21.75H2.25A2.25 2.25 0 0 0 0 24v-5.25Zm16.5-12.247c.504.095 1.05.163 1.603.201.76.049 1.545.074 2.333.074H24v-5.25a2.25 2.25 0 0 0-2.25-2.25h-5.46a2.25 2.25 0 0 0-2.25 2.25v2.852Z" />
              </svg>
            }
          />
          <ModuleItem
            title="Customized HR Solutions"
            description="Develop bespoke HR strategies and policies to optimize your workforce management."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 17.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            }
          />
          <ModuleItem
            title="Temporary Staffing"
            description="Flexible solutions for short-term staffing needs, seasonal rushes, or special events."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceModules;
