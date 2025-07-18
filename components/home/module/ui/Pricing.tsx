'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles, Star, Zap, Shield } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small retailers looking to expand their reach",
    price: {
      monthly: 99,
      annually: 79
    },
    features: [
      { title: "Up to 5 location searches", included: true },
      { title: "Basic matching algorithm", included: true },
      { title: "Standard analytics dashboard", included: true },
      { title: "Email support", included: true },
      { title: "Advanced market insights", included: false },
      { title: "Custom expansion planning", included: false },
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    icon: <Zap className="w-6 h-6" />,
    bgGradient: "from-blue-500/10 via-cyan-500/5 to-teal-500/10"
  },
  {
    name: "Growth",
    description: "Ideal for growing brands with multiple locations",
    price: {
      monthly: 249,
      annually: 199
    },
    features: [
      { title: "Unlimited location searches", included: true },
      { title: "Advanced AI matching", included: true },
      { title: "Full analytics suite", included: true },
      { title: "Priority email & chat support", included: true },
      { title: "Advanced market insights", included: true },
      { title: "Custom expansion planning", included: false },
    ],
    cta: "Upgrade Now",
    popular: true,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    icon: <Star className="w-6 h-6" />,
    bgGradient: "from-orange-500/10 via-red-500/5 to-pink-500/10"
  },
  {
    name: "Enterprise",
    description: "For established retailers with complex requirements",
    price: {
      monthly: 499,
      annually: 399
    },
    features: [
      { title: "Unlimited location searches", included: true },
      { title: "Premium AI matching", included: true },
      { title: "Full analytics suite + API access", included: true },
      { title: "24/7 dedicated support", included: true },
      { title: "Advanced market insights", included: true },
      { title: "Custom expansion planning", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-purple-500 via-indigo-500 to-blue-600",
    icon: <Shield className="w-6 h-6" />,
    bgGradient: "from-purple-500/10 via-indigo-500/5 to-blue-600/10"
  }
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  return (
    <section id="pricing" className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 font-semibold text-sm uppercase tracking-wider rounded-full border border-orange-500/30 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Pricing Plans
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-white leading-tight"
          >
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Choose the perfect plan for your business needs with no hidden fees and transparent pricing
          </motion.p>
          
          {/* Enhanced billing toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex items-center justify-center"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
              <div className="flex items-center">
                <span className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${!annual ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setAnnual(!annual)}
                  className={`relative inline-flex h-10 w-20 cursor-pointer items-center rounded-xl transition-all duration-300 mx-2 ${annual ? 'bg-gradient-to-r from-orange-500 to-red-500 shadow-lg shadow-orange-500/25' : 'bg-gray-700'}`}
                >
                  <span className={`inline-block h-6 w-6 transform rounded-lg bg-white transition-transform duration-300 shadow-lg ${annual ? 'translate-x-12' : 'translate-x-2'}`} />
                </button>
                <span className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${annual ? 'text-white' : 'text-gray-400'}`}>
                  Annual
                </span>
              </div>
            </div>
            <div className="ml-4 bg-green-500/20 text-green-400 text-sm px-4 py-2 rounded-xl border border-green-500/30">
              <span className="font-semibold">Save 20%</span>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group rounded-3xl border overflow-hidden transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'border-orange-500/50 bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-2xl shadow-orange-500/10' 
                  : 'border-gray-700/50 bg-gradient-to-br from-gray-900/60 to-gray-800/60 hover:border-gray-600/50'
              } backdrop-blur-xl`}
            >
              {/* Enhanced popular badge */}
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              )}
              
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${plan.gradient} text-white shadow-lg`}>
                    {plan.icon}
                  </div>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-4 py-2 text-xs font-bold text-white flex items-center shadow-lg">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-end mb-2">
                    <span className="text-4xl lg:text-5xl font-bold text-white">
                      ${annual ? plan.price.annually : plan.price.monthly}
                    </span>
                    <span className="text-gray-400 ml-2 mb-2 text-lg">/month</span>
                  </div>
                  {annual && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30"
                    >
                      <span className="font-semibold">
                        Save ${(plan.price.monthly - plan.price.annually) * 12} annually
                      </span>
                    </motion.div>
                  )}
                </div>
                
                <button
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 cursor-pointer group/btn ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105' 
                      : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500 shadow-lg hover:shadow-xl'
                  } flex items-center justify-center`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              <div className="relative z-10 border-t border-gray-700/50 p-8 lg:p-10">
                <h4 className="text-sm font-bold text-gray-300 mb-6 uppercase tracking-wider">What's included:</h4>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-start group/feature"
                    >
                      <div className={`p-1 rounded-full mr-4 flex-shrink-0 ${
                        feature.included 
                          ? plan.popular 
                            ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                            : 'bg-gradient-to-r from-green-500 to-emerald-500'
                          : 'bg-gray-600'
                      }`}>
                        {feature.included ? (
                          <Check className="w-3 h-3 text-white" />
                        ) : (
                          <X className="w-3 h-3 text-gray-400" />
                        )}
                      </div>
                      <span className={`leading-relaxed transition-colors duration-300 ${
                        feature.included 
                          ? 'text-gray-300 group-hover/feature:text-white' 
                          : 'text-gray-500'
                      }`}>
                        {feature.title}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Enhanced hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
              
              {/* Border glow effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                plan.popular 
                  ? 'shadow-2xl shadow-orange-500/20' 
                  : 'shadow-xl shadow-blue-500/10'
              }`}></div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional trust section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg mb-4">
            Trusted by over 10,000+ retailers worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-500 text-sm">✓ No setup fees</div>
            <div className="text-gray-500 text-sm">✓ Cancel anytime</div>
            <div className="text-gray-500 text-sm">✓ 14-day free trial</div>
            <div className="text-gray-500 text-sm">✓ Money-back guarantee</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;