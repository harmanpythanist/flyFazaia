"use cache"

import React from 'react';
import Link from 'next/link';
import { Headings_appear } from '@/client_comps/list_animation';
import { fetch_fnx } from '@/server_fetch/fetch';
import { cacheLife } from 'next/cache';

const CoursesSection = async({ data,type }) => {
  cacheLife("hours")
  console.log(data);
  


try {
  // let data=await fetch_fnx("courses");

  console.log("here in cards",data);
  

return (<section 
      className="py-24 md:py-36 bg-transparent relative w-[100vw] min-h-screen overflow-hidden">
    
        
      {/* Light background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle tech nodes */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-500 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-indigo-500 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-cyan-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-indigo-400 rounded-full opacity-30"></div>
      </div>

      <div className="relative z-60 w-full  flex flex-col items-center justify-center mt-12 mx-auto px-6">
        <div className=' m-auto mb-16'>
          <Headings_appear title={type}/>
        </div>   
        
        {/* Courses Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {data?.map((course, index) => (
            <CourseCard key={index} data={course} index={index} type={type} />
          ))}
        </div>
      </div>


    </section>)

} catch (error) {
  return <div className='text-6xl mt-44 text-indigo-500 font-black flex flex-col items-center justify-center'><p>Fetch Failed</p><p className='text-2xl text-gray-600'>{error.message}</p></div>
}};







export default CoursesSection;

const CourseCard = ({ data, index ,type}) => {
  return (
    <div className="relative group cursor-pointer z-60">
      {/* Minimalist top decoration */}
      <div className="flex justify-center items-center gap-3 mb-2">
        <div className="h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"></div>
        <div className="h-0.5 w-8 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"></div>
      </div>
      
      {/* Clean card design */}
      <div className="relative p-8 rounded-2xl h-full flex flex-col 
                    bg-white/90 backdrop-blur-sm
                    border-2 border-cyan-200/60
                    shadow-lg hover:shadow-xl
                    transition-all duration-300 ease-out
                    hover:border-cyan-400/80 
                    hover:bg-white/95
                    hover:-translate-y-1">
        
        <div className="absolute inset-0 opacity-30 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <pattern id={`circuit-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400"/>
                      <circle cx="20" cy="20" r="2" fill="currentColor" className="text-purple-400"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#circuit-${index})`}/>
                </svg>
              </div>
        {/* Icon */}
        <div className="text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">
          {data.icon}
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold mb-4 
                     text-transparent bg-clip-text 
                     bg-gradient-to-r from-cyan-600 to-indigo-600">
          {data.title}
        </h3>

        {/* Description */}
        <p className="flex-1 text-lg text-gray-700 font-semibold mb-6 leading-relaxed">
          {data.description}
        </p>
        
        {/* List */}
        <ul className='text-base text-gray-600 mb-8 space-y-2'>
          {data?.list?.split(",").map((x, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 
                             rounded-full mt-2 flex-shrink-0"></span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
        
        {/* Clean button */}
     {type.toUpperCase()!="SERVICES"&&   <Link
          href={`courses/details/${encodeURIComponent(data.id)}`}
          className={`relative px-6 py-3   rounded-xl flex justify-center text-lg font-semibold text-white 
                 
                   hover:from-cyan-400 hover:to-indigo-400
                   transition-all duration-300 ease-out
                   shadow-md hover:shadow-lg hover:shadow-cyan-500/30
                   transform hover:scale-[1.02] bg-gradient-to-r ${data.color}`}
        >
          <span className="relative z-10">Syllabus</span>
        </Link>}
      </div>
    </div>
  );
};