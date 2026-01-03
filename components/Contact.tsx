import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For now, we'll just log it and clear the form.
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const phoneNumber = '919980856523'; // Including country code for WhatsApp link

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900 text-text-light">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle
          title="Get In Touch"
          subtitle="We're here to help you find the perfect talent."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold text-accent-gold mb-4">Reach Out Directly</h3>
            <p className="flex items-center text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-accent-gold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:restojobs@hariganautomation.digital" className="hover:text-accent-gold transition-colors duration-200">restojobs@hariganautomation.digital</a>
            </p>
            <p className="flex items-center text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-accent-gold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 10.5V12m0 0v1.5m0-1.5c-1.5 0-3-.5-4.5-1.5s-2-2.5-2-4.5" />
              </svg>
              <a href="https://hariganautomation.digital" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors duration-200">hariganautomation.digital</a>
            </p>
            {/* Consolidated Phone/WhatsApp */}
            <div className="flex items-center text-lg group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-accent-gold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.106l-1.4-0.311a1.125 1.125 0 0 1-0.744-1.14l0.306-1.53c0.042-0.207-0.055-0.422-0.24-0.559-0.902-0.671-1.874-1.04-2.862-1.135a48.366 48.366 0 0 0-1.267 0c-1.015 0.1-1.936 0.449-2.792 1.055a1.125 1.125 0 0 1-0.344 1.455l-0.316 0.279a6.74 6.74 0 0 1-1.825-1.554l-.4-.4a6.74 6.74 0 0 1-1.554-1.825l0.279-0.316c0.14-0.162 0.207-0.372 0.2-0.56a48.182 48.182 0 0 0-1.135-2.862c-0.137-0.185-0.352-0.283-0.559-0.24l-1.53 0.306a1.125 1.125 0 0 1-1.14-0.744l-0.311-1.4A2.25 2.25 0 0 0 9.75 2.25H7.5c-8.284 0-15 6.716-15 15v2.25Z" />
              </svg>
              <a href={`tel:+${phoneNumber}`} className="hover:text-accent-gold transition-colors duration-200 mr-2">Call +91 {phoneNumber.substring(2)}</a>
              <span className="text-gray-500"> / </span>
              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center ml-2 text-text-light hover:text-accent-gold transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1">
                  <path d="M12.0007 2.00033C6.48671 2.00033 2.00071 6.48633 2.00071 12.0003C2.00071 13.9743 2.55971 15.8273 3.54771 17.3913L2.07371 22.0003L6.87771 20.5263C8.38471 21.3193 10.1257 21.7203 12.0007 21.7203C17.5147 21.7203 22.0007 17.2343 22.0007 11.7203C22.0007 6.20633 17.5147 2.00033 12.0007 2.00033ZM16.5987 14.7333C16.4027 15.0843 14.9387 15.8153 14.6867 15.9033C14.4357 15.9913 14.2887 16.0353 14.0457 15.9593C13.8017 15.8833 13.1207 15.6583 12.3027 15.1433C11.3327 14.5363 10.6697 13.6843 10.1557 12.8333C9.74371 12.1553 9.47171 11.6913 9.35871 11.4953C9.20071 11.2183 8.16371 9.94733 8.16371 8.52033C8.16371 7.23133 8.71871 6.53633 8.93771 6.30933C9.11271 6.13633 9.34971 6.04633 9.57571 6.04633C9.72971 6.04633 9.87671 6.04733 10.0077 6.05033C10.2227 6.05533 10.4907 6.08833 10.6407 6.44033C10.8367 6.83933 11.3737 8.21633 11.4397 8.35333C11.5067 8.49033 11.5797 8.65133 11.4887 8.82533C11.3977 8.99933 11.3257 9.09033 11.1667 9.27433C11.0297 9.42233 10.5187 10.0293 9.92771 10.5973C9.84571 10.6723 9.77171 10.7413 9.69771 10.8033C10.4687 12.1933 11.6497 13.3133 12.8727 13.9183C13.9037 14.4233 14.6737 14.6733 15.2637 14.8693C15.8567 15.0653 16.1427 15.0213 16.3247 14.8463C16.5057 14.6723 16.6347 14.4603 16.5987 14.7333Z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <p className="flex items-start text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 mt-1 text-accent-gold flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>132, 3rd Floor, Koramanagala, 4th Block, 15th Main Road, Bengaluru - 560034.</span>
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-6 mt-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-accent-gold transition-colors duration-200">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path fillRule="evenodd" d="M19.812 5.4c.15.281.294.606.377.962L21 8.016v9c0 .77-.672 1.385-1.5 1.385h-2.25v-6.075c0-.621-.504-1.125-1.125-1.125H15.75c-.621 0-1.125.504-1.125 1.125v6.075H12V8.016h2.25v1.897c.15-.281.294-.606.377-.962.433-1.894 2.155-2.4 3.373-2.4h2.25Z" clipRule="evenodd" /><path d="M12 5.016h-2.25V18.39H12V5.016Z" /><path fillRule="evenodd" d="M5.625 5.016c.828 0 1.5.615 1.5 1.385s-.672 1.385-1.5 1.385-1.5-.615-1.5-1.385.672-1.385 1.5-1.385ZM3.375 8.016h4.5v10.374H3.375V8.016Z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-accent-gold transition-colors duration-200">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path fillRule="evenodd" d="M12 2.25c-5.32 0-9.75 4.34-9.75 9.75v1.233A9.752 9.752 0 0 0 9 21.75c3.22 0 5.928-1.8 7.236-4.437H18V12.75a6.75 6.75 0 0 0-6-6.75Zm5.25 3h-2.25a.75.75 0 0 0-.75.75v2.25H9.75v-2.25c0-.414-.336-.75-.75-.75H5.25a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h4.5v-3.75h-1.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h2.25v2.25c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-2.25H19.5a.75.75 0 0 0 .75-.75v-3c0-.414-.336-.75-.75-.75h-1.5v-2.25a.75.75 0 0 0-.75-.75Z" clipRule="evenodd" /></svg>
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-accent-gold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold text-text-light"
                  aria-label="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold text-text-light"
                  aria-label="Your Email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold text-text-light"
                  aria-label="Subject of your message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold text-text-light resize-y"
                  aria-label="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent-gold text-primary-dark font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;