"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import UseVariants from '@/client_hooks/useVariants';

export const Headings_appear=React.memo(({title})=>{

    const ref=useRef(null);
const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
const y=useTransform(scrollYProgress,[0,.5,1],[0,0,-100]);
const opacity=useTransform(scrollYProgress,[0,.5,1],[1,1,0]);
return <motion.div ref={ref} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.5,ease:"easeOut"}} viewport={{amount:.9}} className='relative h-full flex justify-center items-center px-4 sm:px-6 lg:px-8'>
<motion.p  className='bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center' style={{
            y,opacity,
                position:"relative",
              
               
                letterSpacing: '0.01em',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>{title}
              
              
              </motion.p>
              
</motion.div>

}
)
const ListAnimation =React.memo( ({children}) => {

    const {parentVar2,childVar}=UseVariants();

    return (
     <motion.ul variants={parentVar2} initial="initial" whileInView="animate" viewport={{amount:.4,once:true}} className='text-indigo-500 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center px-4 sm:px-6' style={{listStyle:"inside"}}>
        {React.Children.toArray(children).map((x,i)=>{return <motion.li key={i} variants={childVar}>{x}</motion.li>})}
     </motion.ul>
    );
});
ListAnimation.displayName = 'ListAnimation';
Headings_appear.displayName = 'Headings_appear';
export default ListAnimation;