'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/3 -left-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 mb-6">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with{' '}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Locentrix
                </span>
              </h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest industry insights, product updates, and exclusive content delivered straight to your inbox.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                  <span>Weekly Updates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                  <span>Market Trends</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                  <span>Success Stories</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                  <span>No Spam</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={`w-full px-6 py-4 bg-gray-800/50 border ${
                      status === 'error' ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300`}
                    disabled={status === 'loading' || status === 'success'}
                  />
                  {status === 'error' && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                
                {message && (
                  <div className={`text-sm ${status === 'error' ? 'text-red-500' : 'text-green-500'} flex items-center`}>
                    {status === 'error' ? (
                      <AlertCircle className="h-4 w-4 mr-2" />
                    ) : (
                      <CheckCircle className="h-4 w-4 mr-2" />
                    )}
                    {message}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full group relative bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.02] ${
                    status === 'loading' ? 'opacity-80' : ''
                  } ${status === 'success' ? 'bg-green-500' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    {status === 'loading' ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : status === 'success' ? (
                      <CheckCircle className="h-5 w-5 mr-2" />
                    ) : null}
                    {status === 'loading'
                      ? 'Subscribing...'
                      : status === 'success'
                      ? 'Subscribed!'
                      : 'Subscribe to Newsletter'}
                    {status === 'idle' && (
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By subscribing, you agree to our{' '}
                  <a href="#" className="text-red-400 hover:text-red-300 underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-red-400 hover:text-red-300 underline">
                    Terms of Service
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
