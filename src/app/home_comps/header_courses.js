
import React from 'react';

import Link from 'next/link';


const CoursesSection = ({data}) => {

  
  
  

  return (
    <section 
  
      // style={{ opacity }}
      className="py-20 bg-transparent h-full relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
  {/* Courses Grid */}
        <div
          // variants={containerVariants}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, threshold: 0.1 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {data.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div
   
          className="text-center mt-16"
        >
          <Link href='/courses' className="px-8 hover:scale-102 cursor-pointer py-4 bg-gradient-to-r from-indigo-600 to-cyan-400 text-white font-bold rounded-full text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl">View All Courses</Link>
        
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;


const CourseCard = React.memo(({ course, index }) => {
   

    return (
      <div
    
 
        className="relative group cursor-pointer "
      >   <div className="flex justify-center items-center gap-2 mt-4 ">
                    <div className="h-0.5 w-8 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <div className="h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  </div>
       
        <div className="relative bg-white/40  p-8 rounded-3xl border-2 border-indigo-400/50 group-hover:border-cyan-400/50 shadow-lg group-hover:shadow-xl transition-all duration-500 h-full flex flex-col">
          {/* Icon */}
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {course.icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-cyan-600 transition-all duration-500">
            {course.title}
          </h3>

          {/* Description */}
          <p className="flex-1 text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">
            {course.desc}
          </p>

          {/* Button */}
          <button
            
            className={`relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${course.color} hover:scale-.9 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group-hover:shadow-xl`}
          >
            <span className="relative z-10">Enroll Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>
      </div>
    );
  });
  CourseCard.displayName = 'CourseCard'; // The universally safe practice.