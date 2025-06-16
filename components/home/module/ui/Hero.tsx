const HeroSection = () => {
	return (
		<div className="min-h-screen  bg-custom-gradient relative overflow-hidden">
			{/* Background decorative elements */}

			{/* Hero Content */}
			<div className="relative z-10 flex flex-col items-center justify-center px-6 lg:px-12 py-30 pb-32">
				<div className="text-center max-w-5xl mx-auto">
					<h1 className="text-4xl md:text-5xl  font-bold text-white leading-tight mb-8">
						The Future of Commercial Real Estate
						<br />
						Matching
					</h1>

					<p className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-12">
						Connect brands with perfect retail spaces instantly. Locentrix
						revolutionizes how retailers find locations and shopping centers
						fill vacancies through intelligent matching technology.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
						<button className="bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
							Start Matching Today
						</button>

						<button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md">
							Watch Demo
						</button>
					</div>
				</div>
			</div>

			{/* Bottom decorative element */}
			<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent"></div>
		</div>
	);
};

export default HeroSection;
