import React from 'react'

const StartTrial = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-20 bg-custom-gradient">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-4xl l font-bold text-white mb-8 leading-tight">
Ready to Transform Your Real Estate Strategy?
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of brands, shopping centers, and brokers who've
              revolutionized their commercial real estate operations with Locatistic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/25 hover:scale-105 transform">
                <span className="relative z-10">Start Your Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-purple-400 hover:text-slate-900 hover:shadow-2xl hover:shadow-purple-400/25 hover:scale-105 transform">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default StartTrial