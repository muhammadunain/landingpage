import React from 'react';
import { ArrowRight, Play, Sparkles, Building2, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/40 rotate-45 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-400/30 rotate-12 animate-float-delay"></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-blue-400/50 animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-cyan-300/20 rotate-45 animate-float-delay"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 lg:px-12 pt-32 pb-20">
        {/* Badge */}
       

        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl  font-bold bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent leading-tight mb-8 animate-fade-in-up">
            The Future of
            <br />
            <span className="relative text-white">
              Commercial Real Estate
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-expand"></div>
            </span>
            <br />
            Matching
          </h1>

          <p className="text-xl  text-white/70 leading-relaxed max-w-4xl mx-auto mb-12 animate-fade-in-up delay-300">
            Connect brands with perfect retail spaces instantly. Locentrix
            revolutionizes how retailers find locations and shopping centers
            fill vacancies through intelligent matching technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-up delay-500">
            <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Matching Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>

            <button className="group relative border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md hover:bg-white/5">
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Feature Icons */}
          <div className="flex items-center justify-center gap-12 opacity-60 animate-fade-in-up delay-700">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-cyan-400" />
              <span className="text-sm font-medium text-white/80 hidden sm:block">Smart Matching</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-purple-400" />
              <span className="text-sm font-medium text-white/80 hidden sm:block">Location Intelligence</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-sm font-medium text-white/80 hidden sm:block">AI Powered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 fill-slate-900/20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;