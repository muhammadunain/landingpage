import { features } from '@/constant';
import React from 'react';

interface FeatureCardProps {
  icon: string | any;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }:FeatureCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="w-16 h-16 bg-custom-gradient rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <span className="text-3xl">
          {icon}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
 
  return (
    <section className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
Why Leading Brands Choose Locentrix
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           Our platform eliminates the friction in commercial real estate deals, making expansion faster, smarter, and more profitable for everyone involved.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default FeaturesSection;