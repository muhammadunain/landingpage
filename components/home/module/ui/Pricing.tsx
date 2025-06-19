'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small retailers looking to expand",
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
    gradient: "from-blue-500 to-cyan-500"
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
    gradient: "from-orange-500 to-red-500"
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
    gradient: "from-purple-500 to-indigo-500"
  }
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 font-semibold text-sm uppercase tracking-wider rounded-full border border-orange-500/20 mb-4">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs with no hidden fees
          </p>
          
          {/* Billing toggle */}
          <div className="mt-10 flex items-center justify-center">
            <span className={`mr-3 text-sm font-medium ${!annual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ${annual ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-700'}`}
            >
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${annual ? 'translate-x-9' : 'translate-x-1'}`} />
            </button>
            <span className={`ml-3 text-sm font-medium ${annual ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full ml-1">Save 20%</span>
            </span>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-2xl border ${plan.popular ? 'border-orange-500/50' : 'border-gray-800'} bg-gray-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-xl ${plan.popular ? 'hover:shadow-orange-500/10' : 'hover:shadow-blue-500/10'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
              )}
              
              <div className="p-8">
                {plan.popular && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-3 py-1 text-xs font-semibold text-white flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6 h-12">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    {/* <span className="text-4xl font-bold text-white">${annual ? plan.price.annually : plan.price.monthly}</span> */}
                    <span className="text-3xl font-bold text-white">Comming Soon</span>
                    <span className="text-gray-400 ml-2 mb-1">/month</span>
                  </div>
                  {annual && (
                    <p className="text-green-400 text-sm mt-1">
                      Save ${(plan.price.monthly - plan.price.annually) * 12} annually
                    </p>
                  )}
                </div>
                
                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/20' : 'bg-gray-800 text-white hover:bg-gray-700'} flex items-center justify-center group`}>
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="border-t border-gray-800 p-8">
                <h4 className="text-sm font-semibold text-gray-300 mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-orange-500' : 'text-green-500'}`} />
                      ) : (
                        <X className="w-5 h-5 mr-3 flex-shrink-0 text-gray-600" />
                      )}
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                        {feature.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Pricing;
