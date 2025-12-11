"use client"
import React, { useRef } from 'react';
import { motion,useTransform,useScroll, easeInOut } from 'framer-motion';
import { TypeWriter } from '@/client_comps/typeWriter';
import UseVariants from '../../client_hooks/useVariants';
import Link from 'next/link';


const Header = ({children}) => {

  const {grandParentVar,childVar,parentVar2}=UseVariants()
    const ref=useRef(null);
const {scrollYProgress}=useScroll({target:ref,offset:["start 10%","end start"]});
const trans_2=useTransform(scrollYProgress,[0,1],[0,-300]);
const trans_pic_y=useTransform(scrollYProgress,[0,1],[0,-50]);

    return (
        <div className='flex h-[100vh] w-[100vw]  sm:px-4 md:px-6 lg:px-8'>
        <motion.div variants={parentVar2} initial="initial" animate="animate" ref={ref} className='h-[100vh] w-[100vw] sm:w-[50%] md:w-[45%] lg:w-[50%] flex flex-col justify-center pr-2 sm:pr-4'>

             <motion.h1 variants={childVar} className="text-5xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-extrabold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-indigo-500 hover:text-indigo-500 transition-all duration-200 cursor-default animate-slideInLeft">
         <TypeWriter split={true} scroll={scrollYProgress}>
               {React.Children.toArray(children)[0]}
              </TypeWriter>  
            </motion.h1>

             <motion.div variants={childVar} style={{y:trans_2}} className="text-xs max-w-[40vw] sm:max-w-[100vw] sm:text-sm md:text-base lg:text-lg">
             {React.Children.toArray(children)[1]}
            </motion.div>
            <motion.div style={{y:trans_pic_y}} className="flex flex-col sm:flex-row justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-3 sm:mt-4 md:mt-6 w-full sm:w-[35vw] md:w-[32vw] lg:w-[30vw] animate-slideInLeft">
             <Link
                href="/courses"
                className="group cursor-pointer h-[30px] w-[40vw] sm:w-[30vw] sm:h-[45px] md:h-[55px] lg:h-[60px] justify-center flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-bold text-white shadow hover:bg-indigo-700 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <span className="group-hover:animate-pulse">View Courses</span>
              </Link>
              <Link
                href="/about"
                className="group cursor-pointer h-[30px] w-[40vw] sm:w-[30vw]  sm:h-[45px] md:h-[55px] lg:h-[60px] justify-center bg-gray-300 flex items-center rounded-full border border-slate-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-semibold text-slate-700 hover:bg-slate-100 hover:border-indigo-400 hover:text-indigo-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <span className="group-hover:animate-pulse">Learn More</span>
              </Link>
            </motion.div> 
        </motion.div>
                <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.3,ease:"easeInOut"}} className="w-[45%] hidden  sm:block md:block lg:block sm:w-1/2 md:w-[5%] lg:w-1/2 h-full flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
         
<div
 
  className="relative h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg  mt-24 ml-12 overflow-hidden rounded-lg "
>
  <motion.img
    src="/ffl1-removebg-preview.png"
    className="absolute -inset-10 bg-cover bg-center bg-no-repeat"
    style={{
      y: trans_pic_y,
      backgroundSize: "cover",
    }}
    autoPlay
    loop
    muted
  />
</div>

        </motion.div>

        
        </div>
    );
}

export default Header;