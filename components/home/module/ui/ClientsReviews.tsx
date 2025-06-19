'use client'
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ArrowRight, TrendingUp, Zap, Building2, Handshake } from 'lucide-react';

const StatCard = ({ number, label, icon, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/20 border border-gray-800 relative overflow-hidden group"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-3 transition-all duration-300">
        {icon}
      </div>
      
      <div className="relative z-10">
        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-3 flex items-end">
          <CountUp
            end={number.value}
            duration={2.5}
            separator=","
            suffix={number.suffix}
            enableScrollSpy
            scrollSpyOnce
          />
        </div>
        <div className="w-12 h-1 bg-gradient-to-r from-red-400 to-orange-500 rounded-full mb-3 group-hover:w-full transition-all duration-500"></div>
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
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      delay: 0.1
    },
    {
      number: { value: 60, suffix: '%' },
      label: 'Faster Deal Closures',
      icon: <Zap className="w-8 h-8 text-white" />,
      delay: 0.2
    },
    {
      number: { value: 500, suffix: '+' },
      label: 'Shopping Centers',
      icon: <Building2 className="w-8 h-8 text-white" />,
      delay: 0.3
    },
    {
      number: { value: 2000, suffix: '+' },
      label: 'Successful Matches',
      icon: <Handshake className="w-8 h-8 text-white" />,
      delay: 0.4
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Animated dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-red-500/30"
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
          <span className="inline-block px-4 py-1 bg-red-500/10 text-red-400 font-semibold text-sm uppercase tracking-wider rounded-full border border-red-500/20 mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Numbers That <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Speak</span> For Themselves
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
          className="mt-16 text-center"
        >
          <a href="#testimonials" className="group inline-flex items-center px-6 py-3 bg-gray-900/70 backdrop-blur-lg rounded-full border border-gray-700/50 hover:border-red-500/50 shadow-lg transition-all duration-300 hover:shadow-red-500/20">
            <span className="text-gray-300 group-hover:text-red-400 font-medium transition-colors duration-300">See what our clients are saying</span>
            <ArrowRight className="ml-2 w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
    </section>
  );
};

export default ClientsReviews;
