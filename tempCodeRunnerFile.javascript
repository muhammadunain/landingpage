import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Target, BarChart3, MessageSquare, Zap, Shield, TrendingUp, Users, Building2, UserCheck, CheckCircle, ArrowRight, Star, Check, X, Mail, Send } from 'lucide-react';

const LocentrixLanding = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Target,
      title: "Intelligent Matching",
      description: "Our AI-powered algorithm analyzes expansion criteria, space requirements, and market preferences to deliver perfect matches in seconds, not months."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Access live occupancy rates, market trends, and performance metrics. Make data-driven decisions with comprehensive dashboards and insights."
    },
    {
      icon: MessageSquare,
      title: "Streamlined Communication",
      description: "Integrated messaging, document sharing, and deal tracking keep all stakeholders aligned throughout the entire leasing process."
    },
    {
      icon: Zap,
      title: "Accelerated Expansion",
      description: "Reduce time-to-market by 60% with automated workflows, instant notifications, and step-by-step GPS approval processes."
    },
    {
      icon: Building2,
      title: "Portfolio Management",
      description: "Manage multiple locations, track lease terms, monitor performance, and plan strategic expansions from a unified platform."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, role-based access controls, and compliance with industry standards ensure your data stays protected."
    }
  ];

  const playerTypes = [
    {
      icon: Building2,
      title: "For Brands",
      description: "Expand your footprint with precision targeting. Access detailed market data, site comparison tools, and accelerate your expansion strategy with confidence."
    },
    {
      icon: Users,
      title: "For Shopping Centers",
      description: "Showcase your spaces to brands actively seeking locations and maximize your occupancy rates."
    },
    {
      icon: UserCheck,
      title: "For Brokers",
      description: "Access exclusive deal opportunities, manage client relationships, and leverage market insights to become the go-to commercial real estate expert."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Locentrix
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">For You</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <button className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20"></div>
        
        {/* Professional Geometric Animation */}
        <div className="absolute inset-0">
          {/* Large floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/3 right-1/5 w-4 h-4 bg-red-500/60 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-orange-500/60 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-red-400/40 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          {/* Floating cards animation */}
          <div className="absolute top-1/5 right-1/6 opacity-20">
            <div className="w-32 h-20 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-lg backdrop-blur-sm border border-red-500/20 transform rotate-12 animate-pulse hover:rotate-6 transition-transform duration-1000"></div>
          </div>
          <div className="absolute bottom-1/5 left-1/6 opacity-20">
            <div className="w-28 h-16 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-lg backdrop-blur-sm border border-orange-500/20 transform -rotate-12 animate-pulse hover:-rotate-6 transition-transform duration-1000" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="inline-block">The Future of</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
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
            <button className="group relative bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                Start Matching Today
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 animate-pulse rounded-full"></div>
            </button>
            <button className="group flex items-center px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:border-red-500 hover:bg-red-500/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-white ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>
          
          {/* Feature Tags */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center bg-gray-900/50 px-6 py-3 rounded-full border border-gray-700/50 backdrop-blur-sm hover:border-red-500/50 transition-colors group">
              <Target className="w-5 h-5 mr-2 text-red-500 group-hover:animate-spin" />
              <span className="text-gray-300">Smart Matching</span>
            </div>
            <div className="flex items-center bg-gray-900/50 px-6 py-3 rounded-full border border-gray-700/50 backdrop-blur-sm hover:border-orange-500/50 transition-colors group">
              <BarChart3 className="w-5 h-5 mr-2 text-orange-500 group-hover:animate-bounce" />
              <span className="text-gray-300">Location Intelligence</span>
            </div>
            <div className="flex items-center bg-gray-900/50 px-6 py-3 rounded-full border border-gray-700/50 backdrop-blur-sm hover:border-red-500/50 transition-colors group">
              <Shield className="w-5 h-5 mr-2 text-red-500 group-hover:animate-pulse" />
              <span className="text-gray-300">AI Powered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['why-choose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Why Leading Brands Choose{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Locentrix
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform eliminates the friction in commercial real estate deals, making expansion{' '}
              <span className="text-red-400 font-semibold">faster</span>,{' '}
              <span className="text-orange-400 font-semibold">smarter</span>, and{' '}
              <span className="text-red-400 font-semibold">more profitable</span> for everyone involved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/10 ${
                  isVisible['why-choose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.solutions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Tailored Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Built for Every Player in{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Commercial Real Estate
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're expanding your brand, filling spaces, or closing deals, Locentrix provides{' '}
              <span className="text-red-400 font-semibold">tailored solutions</span> for your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {playerTypes.map((player, index) => (
              <div
                key={index}
                className={`group p-8 bg-black/50 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10 ${
                  isVisible.solutions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <player.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  {player.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {player.description}
                </p>
                <div className="mt-6">
                  <button className="text-red-400 font-semibold flex items-center group-hover:text-red-300 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-orange-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.results ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Results
              </span>{' '}
              That Speak for Themselves
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform has consistently delivered exceptional outcomes for clients across the commercial
              real estate industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "60%", label: "Faster Deal Closure", icon: Zap },
              { number: "95%", label: "Client Satisfaction", icon: Star },
              { number: "200+", label: "Successful Matches", icon: CheckCircle }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 ${
                  isVisible.results ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-900/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-orange-900/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Pricing Plans</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Growth Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing that scales with your business. Start free and upgrade as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="group p-8 bg-black/50 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-500 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-400 mb-6">Perfect for small businesses</p>
                <div className="text-4xl font-bold mb-2">
                  <span className="text-gray-300">$</span>
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">0</span>
                </div>
                <p className="text-gray-400">Free forever</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Up to 5 property matches",
                  "Basic market analytics",
                  "Email support",
                  "Standard search filters",
                  "Monthly market reports"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 px-6 border-2 border-gray-600 rounded-full font-semibold hover:border-red-500 hover:bg-red-500/10 transition-all duration-300">
                Get Started Free
              </button>
            </div>

            {/* Professional Plan */}
            <div className="group p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl border-2 border-red-500/50 hover:border-red-500 transition-all duration-500 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-gray-400 mb-6">For growing businesses</p>
                <div className="text-4xl font-bold mb-2">
                  <span className="text-gray-300">$</span>
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">299</span>
                </div>
                <p className="text-gray-400">per month</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited property matches",
                  "Advanced AI analytics",
                  "Priority support",
                  "Custom search filters",
                  "Real-time market insights",
                  "Lead management tools",
                  "Integration with CRM systems"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="group p-8 bg-black/50 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-500 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-400 mb-6">For large organizations</p>
                <div className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Custom</span>
                </div>
                <p className="text-gray-400">Contact us for pricing</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Professional",
                  "White-label solutions",
                  "Dedicated account manager",
                  "Custom integrations",
                  "Advanced reporting & analytics",
                  "Multi-location management",
                  "24/7 phone support",
                  "SLA guarantees"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 px-6 border-2 border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center text-gray-300">
                <Shield className="w-4 h-4 mr-2 text-green-500" />
                Enterprise Security
              </span>
              <span className="flex items-center text-gray-300">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                99.9% Uptime SLA
              </span>
              <span className="flex items-center text-gray-300">
                <Users className="w-4 h-4 mr-2 text-green-500" />
                Expert Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible.newsletter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead of the{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Market
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Get weekly insights, market trends, and exclusive deals delivered straight to your inbox. 
              Join 10,000+ real estate professionals who trust our newsletter.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-gray-800 transition-all duration-300"
                  />
                </div>
                <button className="bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center justify-center text-sm text-gray-400">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                No spam, unsubscribe at any time
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-2">10K+</div>
                <div className="text-gray-400 text-sm">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-2">Weekly</div>
                <div className="text-gray-400 text-sm">Market Updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-2">Exclusive</div>
                <div className="text-gray-400 text-sm">Deal Alerts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-2">Expert</div>
                <div className="text-gray-400 text-sm">Insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cta" className="py-24 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Real Estate Strategy?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of brands, shopping centers, and brokers who've
            revolutionized their commercial real estate operations with Locentrix.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Locentrix
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Locentrix. All rights reserved. | Transforming Commercial Real Estate Connections
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LocentrixLanding;