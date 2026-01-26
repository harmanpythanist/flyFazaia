import React from 'react';

const TechWritingPlate = ({children,i}) => {
    return (
       <div key={i} className='group  h-full relative px-4 sm:px-6 lg:px-8'>
            {/* Main Card Container */}
            <div className="relative h-full max-w-full  sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[50vw] m-auto bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105">
              
              {/* Tech Circuit Pattern Overlay */}
              <div className="absolute inset-0 opacity-50 pointer-events-none ">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <pattern id={`circuit-${i}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400"/>
                      <circle cx="20" cy="20" r="2" fill="currentColor" className="text-purple-400"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#circuit-${i})`}/>
                </svg>
              </div>

              {/* Gradient Accent Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-blue-200/10 to-blue-500/20 rounded-xl sm:rounded-2xl opacity-80"></div>
              
              {/* Corner Tech Elements */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-indigo-400/60 rounded-tl-lg">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-400/50 rounded-full ml-0.5 sm:ml-1 mt-0.5 sm:mt-1"></div>
                </div>
              </div>
              
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-purple-400/60 rounded-tr-lg">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mr-0.5 sm:mr-1 mt-0.5 sm:mt-1 ml-auto"></div>
                </div>
              </div>

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-blue-400/60 rounded-bl-lg">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full ml-0.5 sm:ml-1 mt-auto mb-0.5 sm:mb-1"></div>
                </div>
              </div>

              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-cyan-400/60 rounded-br-lg">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full mr-0.5 sm:mr-1 mt-auto mb-0.5 sm:mb-1 ml-auto"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-4  sm:p-6 md:p-8 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px]">
                
                {/* Icon/Number Badge */}
                <div className="mb-4 sm:mb-6 w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                  {String(!i?0:i + 1).padStart(2, '0')}
                </div>

                {/* Main Content Text */}
                <div className="text-center px-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-indigo-500 font-bold leading-tight">
                    {children}
                  </h3>
                  
                  {/* Tech Accent Line */}
                  <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    <div className="h-0.5 w-6 sm:w-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-400 rounded-full"></div>
                    <div className="h-0.5 w-6 sm:w-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-cyan-500/10 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Tech Grid Overlay on Hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-indigo-400/10 via-transparent to-purple-400/10" 
                     style={{
                       backgroundImage: `
                         linear-gradient(45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%), 
                         linear-gradient(-45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%), 
                         linear-gradient(45deg, transparent 75%, rgba(147, 51, 234, 0.1) 75%), 
                         linear-gradient(-45deg, transparent 75%, rgba(147, 51, 234, 0.1) 75%)
                       `,
                       backgroundSize: '20px 20px',
                       backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                     }}
                ></div>
              </div>
            </div>

            {/* Floating Tech Elements */}
            <div className="absolute -top-1.5 sm:-top-2 -left-1.5 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400/60 rounded-full blur-sm group-hover:blur-none transition-all duration-300"></div>
            <div className="absolute -top-1 sm:-top-1 -right-2 sm:-right-3 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-400/60 rounded-full blur-sm group-hover:blur-none transition-all duration-300"></div>
            <div className="absolute -bottom-1.5 sm:-bottom-2 -left-2 sm:-left-3 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400/60 rounded-full blur-sm group-hover:blur-none transition-all duration-300"></div>
            <div className="absolute -bottom-1 sm:-bottom-1 -right-1.5 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400/60 rounded-full blur-sm group-hover:blur-none transition-all duration-300"></div>
          </div>
    );
}

export default TechWritingPlate;