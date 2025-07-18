'use client'
import React from 'react';
import { Play, Target, Shield, BarChart3, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20"></div>
      
      {/* Professional Geometric Animation */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500/60 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-orange-500/60 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-red-400/40 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Floating cards animation */}
        <div className="absolute top-1/4 right-1/4 opacity-20">
          <div className="w-32 h-20 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-lg backdrop-blur-sm border border-red-500/20 transform rotate-12 animate-pulse hover:rotate-6 transition-transform duration-1000"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-20">
          <div className="w-28 h-16 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-lg backdrop-blur-sm border border-orange-500/20 transform -rotate-12 animate-pulse hover:-rotate-6 transition-transform duration-1000" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto my-10 px-6 text-center transition-all duration-1000 text-white">
        {/* Status Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-gray-900/70 backdrop-blur-lg rounded-full mb-8 border border-gray-700/50 shadow-lg">
          <div className="flex items-center mr-3">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1" style={{animationDelay: '0.5s'}}></span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1" style={{animationDelay: '1s'}}></span>
          </div>
          <span className="text-sm text-gray-300 font-medium">Revolutionizing Commercial Real Estate</span>
        </div>
        
        {/* Main Heading with Typing Effect */}
        <h1 className="text-5xl font-bold mb-5">
          The Future of 
          
          <span className="bg-gradient-to-r px-2 from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
             Commercial Real Estate
          </span>
          <br />
          <span className="inline-block">Matching</span>
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Connect brands with perfect retail spaces instantly. Locentrix revolutionizes how retailers find 
          locations and shopping centers fill vacancies through intelligent matching technology.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
               <Link  href={"https://locentrix.hellorovamo.com/"} target='_blank'>
          <button className="group cursor-pointer relative bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center">
              Start Matching Today
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 animate-pulse rounded-full"></div>
          </button>
              </Link>
          <button className="group flex cursor-pointer items-center px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:border-red-500 hover:bg-red-500/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 text-white ml-0.5" />
            </div>
            Watch Demo
          </button>
        </div>
        
        {/* Feature Tags */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
          <div className="flex items-center bg-gray-900/50 px-6 py-3 rounded-full border border-gray-700/50 cursor-pointer backdrop-blur-sm hover:border-red-500/50 transition-colors group">
            <Target className="w-5 h-5 mr-2 text-red-500 group-hover:animate-spin" />
            <span className="text-gray-300">Smart Matching</span>
          </div>
          <div className="flex items-center bg-gray-900/50 px-6 py-3 rounded-full border border-gray-700/50 cursor-pointer backdrop-blur-sm hover:border-orange-500/50 transition-colors group">
            <BarChart3 className="w-5 h-5 mr-2 text-orange-500 group-hover:animate-bounce" />
            <span className="text-gray-300">Location Intelligence</span>
          </div>
          <div className="flex items-center bg-gray-900/50 px-6 py-3 rounded-full border border-gray-700/50 cursor-pointer backdrop-blur-sm hover:border-red-500/50 transition-colors group">
            <Shield className="w-5 h-5 mr-2 text-red-500 group-hover:animate-pulse" />
            <span className="text-gray-300">AI Powered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
