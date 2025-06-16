import React from 'react'

const ClientsReviews = () => {
  return (
    <div className="bg-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Average Occupancy Rate</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Faster Deal Closures</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Shopping Centers</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">2,000+</div>
              <div className="text-sm text-gray-300">Successful Matches</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ClientsReviews