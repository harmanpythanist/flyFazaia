"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CardsHeader = React.memo(({data=[{}]}) => {

let ref=useRef(null);
let {scrollYProgress}=useScroll({target:ref,offset:["start end","start start"]});

return (
    <div ref={ref} style={{transformStyle:"preserve-3d"}} className='min-h-screen py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white/50 to-gray-100/60 flex flex-col items-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-400'>
        
    <div style={{transformStyle:"preserve-3d"}} className='mt-16 sm:mt-20 md:mt-24 flex flex-col md:flex-row justify-center md:justify-evenly gap-6 md:gap-4 px-4 sm:px-6 lg:px-8 w-full'>

    {data.map((x,ind)=>{return <Cards_render key={ind} x={x} ind={ind} scroll={scrollYProgress}/>})}
    
    </div>
    </div>)

   
})

export default CardsHeader;


const Cards_render=React.memo(({x,ind,scroll})=>{

const trans_x=useTransform(scroll,[0,1],[`translateX(-${ind*25}vw) `,`translateX(${0}vw)`])

 return (
       <motion.div style={{willChange:"transform,shadow",transformStyle:"preserve-3d", transform:trans_x}}
      key={ind}
      className={` group 
        w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw]
        mx-auto md:mx-0
        md:ml-4 lg:ml-6
        flex-shrink-0
        backdrop-blur-sm
        bg-transparent
        border border-indigo-200
        shadow-lg
        hover:shadow-xl
        hover:bg-white/30
        hover:border-cyan-300
        h-[30vh] sm:h-[65vh] md:h-[70vh]
        mb-2
        rounded-lg sm:rounded-xl 
        relative 
       
        hover:scale-[1.02]
      `}
    >
      {/* Tech Grid Background */}
    <div className="absolute inset-0 opacity-60 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <pattern id={`circuit-${ind}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400"/>
                      <circle cx="20" cy="20" r="2" fill="currentColor" className="text-purple-400"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#circuit-${ind})`}/>
                </svg>
              </div>


      <div className="relative z-10 transition-opacity duration-400 group-hover:opacity-100 opacity-100 p-4 sm:p-5 md:p-6 h-full flex flex-col justify-center text-center">
        
        <strong className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-4 sm:mb-5 md:mb-6">
          {x.title}
        </strong>
        
        <ul className='text-sm sm:text-base md:text-lg text-gray-700 space-y-1.5 sm:space-y-2 mb-6 sm:mb-7 md:mb-8 px-2'>
          {x.text.split(",").map((y,i)=><li key={i} className="font-medium">{y}</li>)}
        </ul>
        
        <button className="mt-auto mx-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-cyan-400 text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          View More
        </button>
      </div>
    </motion.div>
    );

});

// FIX: Add the displayName property
CardsHeader.displayName = 'CardsHeader';
Cards_render.displayName = 'Cards_render';