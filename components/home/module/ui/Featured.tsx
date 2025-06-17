'use client';
import { features } from '@/constant';
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string | any;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden group"
    >
      {/* Decorative background element */}
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
      
      <div className="w-20 h-20 bg-custom-gradient rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-3 transition-all duration-300">
        <span className="text-4xl text-white">
          {icon}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed text-lg">
        {description}
      </p>
      
      <div className="w-12 h-1 bg-blue-500 mt-6 rounded-full transform origin-left group-hover:w-full transition-all duration-300"></div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full"></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-yellow-200 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-green-200 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Why Leading Brands Choose <span className="text-blue-600">Locentrix</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our platform eliminates the friction in commercial real estate deals, making expansion 
            <span className="text-blue-600 font-semibold"> faster</span>, 
            <span className="text-green-600 font-semibold"> smarter</span>, and 
            <span className="text-purple-600 font-semibold"> more profitable</span> for everyone involved.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
        
      
      </div>
    </section>
  );
};

export default FeaturesSection;
