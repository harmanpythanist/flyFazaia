import Link from 'next/link';
import React from 'react';

const TextComp = ({data}) => {

    return (
        <div className='relative w-full bg-gray-100 min-h-screen p-8 tech-grid-bg'>
            {/* Animated tech nodes */}
            <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-500 rounded-full opacity-80 animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
            <div className="absolute top-32 right-40 w-2 h-2 bg-indigo-500 rounded-full opacity-80 animate-pulse delay-150 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
            <div className="absolute bottom-40 left-32 w-3 h-3 bg-cyan-400 rounded-full opacity-80 animate-pulse delay-300 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-indigo-600 rounded-full opacity-80 animate-pulse delay-75 shadow-[0_0_10px_rgba(79,70,229,0.8)]"></div>
            
            {/* Main content container */}
            <div className='relative z-10 max-w-6xl mx-auto'>
           
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {data?.map((section, i) => {
                    
                        return (
                            <div 
                                key={i}
                                className='group relative bg-white/70 backdrop-blur-sm 
                                         border-2 border-cyan-300/40 rounded-2xl p-8 
                                         hover:border-cyan-500/80 transition-all duration-500 
                                         hover:shadow-[0_0_30px_rgba(6,182,212,0.4),0_0_60px_rgba(99,102,241,0.2)]
                                         transform hover:scale-99 hover:-translate-y-1'
                                style={{
                                    animationDelay: `${i * 200}ms`,
                                    animation: 'fadeInUp 0.8s ease-out forwards'
                                }}
                            >
                                {/* Glowing corner accent */}
                                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-transparent rounded-tl-2xl"></div>
                                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-indigo-500/40 to-transparent rounded-br-2xl"></div>
                                
                                {/* Section title */}
                                <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 
                                             font-black text-4xl mb-6 group-hover:from-cyan-500 group-hover:to-indigo-500 
                                             transition-all duration-300 relative z-20'>
                                    {section.title}
                                </h3>
                                
                                {/* List items */}
                                <ul className='space-y-4 relative z-20 '>
                                    {section.details?.split(",")?.map((item, j) => {
                                        return (
                                            <li 
                                                key={j}
                                                className='text-gray-700 text-[20px] font-medium
                                                         flex items-start gap-3 
                                                         hover:text-gray-00 transition-colors duration-300
                                                       '
                                                style={{
                                                    animationDelay: `${(i * 200) + (j * 100)}ms`,
                                                    animation: 'slideInLeft 0.6s ease-out forwards'
                                                }}
                                            >
                                                {/* Bullet point */}
                                                <span className='w-2 h-2 bg-gradient-to-r from-cyan-500 to-indigo-500 
                                                               rounded-full mt-3 flex-shrink-0
                                                               group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)]
                                                               transition-shadow duration-300'></span>
                                                <span className='leading-relaxed'>{item}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                
                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 
                                              rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {/* Add required CSS animations */}
           
        </div>
    );
};

export default TextComp;