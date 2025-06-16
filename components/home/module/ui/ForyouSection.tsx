import { audiences } from '@/constant';
import React from 'react';

interface ForYouCardProps {
  icon: string;
  title: string;
  description: string;
}

const ForYouCard = ({ icon, title, description }:ForYouCardProps) => {
  return (
    <div className="bg-slate-100 rounded-3xl p-8 hover:bg-white hover:border-2 hover:border-blue-500  transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
      <div className="w-20 h-20 bg-custom-gradient rounded-2xl flex items-center justify-center mb-8 shadow-lg mx-auto">
        <span className="text-4xl">
          {icon}
        </span>
      </div>
      
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed text-lg text-center">
        {description}
      </p>
    </div>
  );
};

const ForYouSection = () => {
 

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
Built for Every Player in Commercial Real Estate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're expanding your brand, filling spaces, or closing deals, Locentrix provides tailored solutions for your specific needs.
          </p>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <ForYouCard
              key={index}
              icon={audience.icon}
              title={audience.title}
              description={audience.description}
            />
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default ForYouSection;