'use client';
import { features } from '@/constant';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';


const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
       <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Why Leading Brands Choose{' '}
            <span className="bg-orange-600 bg-clip-text text-transparent">
              Locentrix
            </span>
          </h2>
          <p className='text-white '>Our platform eliminates the friction in <br />commercial real estate deals, making expansion faster, smarter, and more profitable for everyone involved.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-brand-orange/50 transition-all duration-300 h-full backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-6`}>
                    {typeof feature.icon === 'string' ? (
                      <span className="text-2xl text-white">{feature.icon}</span>
                    ) : (
                      React.createElement(feature.icon, {
                        className: "h-8 w-8 text-white"
                      })
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-brand-orange to-brand-red mt-6 rounded-full transform origin-left group-hover:w-24 transition-all duration-300"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
