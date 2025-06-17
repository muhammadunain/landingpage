import { audiences } from '@/constant';
import React from 'react';

interface ForYouCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const ForYouCard = ({ icon, title, description, index }: ForYouCardProps) => {
  return (
    <div 
      className="group relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 hover:from-white hover:to-blue-50 transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Background gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <span className="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center leading-tight group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-slate-600 leading-relaxed text-base text-center group-hover:text-slate-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-20 transition-all duration-500 rounded-full"></div>
      </div>
    </div>
  );
};

const ForYouSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Tailored Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent mb-6 leading-tight">
            Built for Every Player in
            <br />
            <span className="relative text-black">
              Commercial Real Estate
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're expanding your brand, filling spaces, or closing deals, Locentrix provides 
            <span className="font-semibold text-blue-700"> tailored solutions</span> for your specific needs.
          </p>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-300">
          {audiences.map((audience:any, index:any) => (
            <ForYouCard
              key={index}
              icon={audience.icon}
              title={audience.title}
              description={audience.description}
              index={index}
            />
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default ForYouSection;