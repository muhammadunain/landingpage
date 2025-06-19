'use client';
import { audiences } from '@/constant';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const ForYouSection = () => {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-black to-gray-900/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
        <div className="absolute top-1/3 -left-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-red-500/10 text-red-400 font-semibold text-sm uppercase tracking-wider rounded-full border border-red-500/20 mb-4">
            Tailored Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Built for Every Player in{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Commercial Real Estate
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're expanding your brand, filling spaces, or closing deals, Locentrix provides{' '}
            <span className="text-red-400 font-semibold">tailored solutions</span> for your specific needs.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10 relative overflow-hidden"
            >
              {/* Card highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative corner accent */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-orange-500/20">
                <player.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors duration-300">
                {player.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {player.description}
              </p>
              
              <div className="mt-8 pt-4 border-t border-gray-800 group-hover:border-orange-500/20 transition-colors duration-300">
                <button className="text-red-400 font-semibold flex items-center group-hover:text-red-300 transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
