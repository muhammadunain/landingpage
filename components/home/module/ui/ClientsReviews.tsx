'use client'
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const StatCard = ({ number, label, icon, delay }:any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20 border border-slate-600/50 relative overflow-hidden group"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon */}
      <div className="absolute -right-4 -top-4 text-cyan-500/20 text-6xl opacity-30 group-hover:opacity-50 transition-all duration-500">
        {icon}
      </div>
      
      <div className="relative z-10">
        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-3 flex items-end">
          <CountUp 
            end={number.value} 
            duration={2.5} 
            separator="," 
            suffix={number.suffix} 
            enableScrollSpy 
            scrollSpyOnce
          />
        </div>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-3 group-hover:w-full transition-all duration-500"></div>
        <div className="text-sm md:text-base text-gray-300 font-medium">{label}</div>
      </div>
    </motion.div>
  );
};

const ClientsReviews = () => {
  const stats = [
    { 
      number: { value: 95, suffix: '%' }, 
      label: 'Average Occupancy Rate',
      icon: '📈',
      delay: 0.1
    },
    { 
      number: { value: 60, suffix: '%' }, 
      label: 'Faster Deal Closures',
      icon: '⚡',
      delay: 0.2
    },
    { 
      number: { value: 500, suffix: '+' }, 
      label: 'Shopping Centers',
      icon: '🏬',
      delay: 0.3
    },
    { 
      number: { value: 2000, suffix: '+' }, 
      label: 'Successful Matches',
      icon: '🤝',
      delay: 0.4
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-slate-800 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('/grid-pattern.svg')]"></div>
      </div>
      
      {/* Animated particles/dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-500/20"
            style={{
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Results</span> That Speak for Themselves
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform has consistently delivered exceptional outcomes for clients across the commercial real estate industry.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              number={stat.number} 
              label={stat.label} 
              icon={stat.icon}
              delay={stat.delay}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="#testimonials" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">
            <span>See what our clients are saying</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
      
     
    </section>
  );
};

export default ClientsReviews;
