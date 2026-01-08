"use cache"
import ListAnimation, { Headings_appear } from '@/client_comps/list_animation';
import TechWritingPlate from '@/client_comps/tech_writing_plate';
import { cacheLife } from 'next/cache';
import React from 'react';

const Page =async () => {
   cacheLife('max') 
     const expertise = [
    { icon: "🐍", title: "Python, R & C", desc: "Core programming expertise" },
    { icon: "🤖", title: "ML & Deep Learning", desc: "Advanced AI solutions" },
    { icon: "💬", title: "NLP & Vision", desc: "Language & image processing" },
    { icon: "📊", title: "Data Analysis", desc: "Exploratory insights" }
  ];

  const stats = [
    { number: "6,000+", label: "Udemy Students" },
    { number: "55%+", label: "Returning Clients" },
    { number: "21+", label: "Projects Delivered" },
    { number: "⭐ 5.0", label: "Average Rating" }
  ];

const StatsCard = ({ number, label, delay }) => (
  <div 
    className="w-[140px] sm:w-[180px] md:w-[200px] h-auto sm:h-[180px] md:h-[200px] bg-gray-800 p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg flex flex-col justify-evenly items-center"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-200 mb-2">{number}</div>
    <div className="text-xs sm:text-sm text-slate-300 text-center">{label}</div>
  </div>
);

    return (
        <div className='mt-24 sm:mt-32 md:mt-44 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8'>
         <div className='text-2xl sm:text-3xl md:text-4xl font-black w-full sm:w-[80vw] md:w-[50vw]'><TechWritingPlate>Welcome To Fly Fazaia</TechWritingPlate></div>  
           
<div className='text-center text-base sm:text-lg md:text-xl mt-16 sm:mt-20 md:mt-24 text-gray-500 flex flex-col items-center justify-evenly w-full'>


<div className="absolute top-20 left-4 sm:left-10 md:left-20 w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-8 sm:right-20 md:right-32 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-40 left-8 sm:left-20 md:left-32 w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400 rounded-full opacity-60 animate-pulse"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <Headings_appear title="About Us " />
       <div className='mt-12 sm:mt-14 md:mt-16'><TechWritingPlate>
            <ListAnimation>
              <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                Transforming ideas into intelligent, data-driven realities
              </p>
            </ListAnimation>
          </TechWritingPlate></div>   
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-14 md:mb-16">
          {/* Who We Are */}
          <TechWritingPlate delay={100}>
            <ListAnimation>
              <h3 className="font-bold mb-4 flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-4 sm:mb-5 md:mb-6">Who We Are</span> 
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-light text-gray-700 mb-6 sm:mb-7 md:mb-8 px-2">
                We help individuals, startups, and businesses turn vision into reality through cutting-edge AI and data science solutions. Our strength lies in making complex technology accessible—delivering technical excellence while explaining even the most advanced concepts in simple, understandable terms.
              </p>
            </ListAnimation>
          </TechWritingPlate>

          {/* What Sets Us Apart */}
          <TechWritingPlate>
            <ListAnimation>
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-4 sm:mb-5 md:mb-6">What Sets Us Apart</span> 
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-light text-gray-700 mb-6 sm:mb-7 md:mb-8 px-2">
                As instructors trusted by 6,000+ Udemy students and consultants with exceptional client loyalty, we've built our reputation on reliable solutions, clear communication, and results that genuinely work. Our clients value us for turning complexity into clarity.
              </p>
            </ListAnimation>
          </TechWritingPlate>
        </div>

        {/* Expertise Grid */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-6 sm:mb-7 md:mb-8">
            Our Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {expertise.map((item, i) => (
              <TechWritingPlate key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3">{item.icon}</div>
                  <h4 className="text-base sm:text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-1 sm:mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </div>
              </TechWritingPlate>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <div className="flex flex-wrap justify-center sm:justify-evenly items-center gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <StatsCard 
                key={i}
                number={stat.number}
                label={stat.label}
                delay={i * 100}
              />
            ))}
          </div>
        </div>

        {/* Services We Offer */}
        <div className='w-full'>
        <TechWritingPlate>
          <ListAnimation>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-4 sm:mb-5 md:mb-6 text-center">
              How We Help You Succeed
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 font-light">
              <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-sm sm:text-base md:text-lg text-gray-700"><p>End-to-end AI development and deployment</p></span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm sm:text-base md:text-lg text-gray-700"><p>Expert-level data analysis and visualization</p></span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm sm:text-base md:text-lg text-gray-700"><p>Machine learning model development</p></span>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-sm sm:text-base md:text-lg text-gray-700"><p>Research assistance and technical consulting</p></span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm sm:text-base md:text-lg text-gray-700"><p>Personalized training in Python and advanced AI</p></span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm sm:text-base md:text-lg text-gray-700"><p>Custom solutions for your unique challenges</p></span>
                </div>
              </div>
            </div>
          </ListAnimation>
        </TechWritingPlate>
</div>
        {/* CTA */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16">
          <TechWritingPlate>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-4 sm:mb-5 md:mb-6">
              Ready to move forward with confidence?
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Let's turn your vision into reality with AI and data science solutions that work.
            </p>
          </TechWritingPlate>
        </div>
      </div>


   </div>     </div>
    );
}

export default Page;