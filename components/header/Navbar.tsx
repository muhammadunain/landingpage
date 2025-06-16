'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);


useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
   <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#687ee8] backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="text-2xl font-bold text-cyan-400">
          Locentrix
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#" className="text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#" className="text-white/80 hover:text-white transition-colors">
            For You
          </Link>
          <Link href="/#" className="text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        
        <button className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
          isScrolled
            ? 'bg-cyan-400 hover:bg-cyan-500 text-white shadow-lg'
            : 'bg-cyan-400 hover:bg-cyan-500 text-white'
        }`}>
          Get Started
        </button>
      </nav>
  );
};

export default Header;
