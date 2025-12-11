"use client"
import UseVariants from '@/client_hooks/useVariants';
import { animate, motion, useTransform } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export const TypeWriter = ({ children, vars,reflection,split,scroll }) => {
// const opacity_trans=useTransform(scroll,[0,0.2,.6],[1,1,0])
// console.log(children.props.children);
const {parentVar,grandParentVar}=UseVariants()
    if (!children?.props?.children) return null;
    
    return  <motion.div variants={grandParentVar} initial="initial" animate="animate" className='flex   border-black items-center' >
{children.props.children.split("").map((char, index) => (<Letters key={index} scroll={split?scroll:null}  char={char}  reflection={reflection} />))}
</motion.div>
   ;

}
const Letters=({char,scroll})=>{
// console.log(char);
let [isClient,setClient]=useState(false);
useEffect(()=>{setClient(x=>x=true)},[]);

const split_memo_y=useMemo(()=>{if(isClient){ return  Math.random() * (100 - 20) + 20};;
},[isClient]);
const split_memo_x=useMemo(()=>{if(isClient){ return  Math.random() * (-30 - 20) + 20};;
},[isClient]);

const {textVar,childVar}=UseVariants()
const trans_y=useTransform(scroll,[0,.6,1],[0,-100,-split_memo_y]);
const trans_x=useTransform(scroll,[0,.1,1],[0,0,split_memo_x]);
const opacity_trans=useTransform(scroll,[0,.3],[1,0]);



return <motion.div variants={childVar} style={{x:trans_x,y:trans_y,opacity:opacity_trans}} className='relative'   > 
 
            {char==" "?"\u00A0": char}
      
        </motion.div>

}