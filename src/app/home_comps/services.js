import React from 'react';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      icon: '🧠',
      title: 'Artificial Intelligence & Machine Learning',
      desc: 'Transform your business with cutting-edge AI and ML solutions. From predictive analytics to neural networks, we build intelligent systems that learn and adapt.',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      icon: '📊',
      title: 'Data Science & Analysis',
      desc: 'Unlock insights from your data with advanced analytics and visualization. We turn complex datasets into actionable business intelligence.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: '💻',
      title: 'Website Development',
      desc: 'Create stunning, responsive websites that captivate users. From landing pages to full-stack applications, we build digital experiences that convert.',
      color: 'from-indigo-600 to-cyan-400'
    },
    {
      icon: '🐍',
      title: 'Python Programming',
      desc: 'Leverage the power of Python for automation, scripting, and application development. We deliver efficient, scalable solutions for any challenge.',
      color: 'from-purple-600 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-transparent h-full relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
         
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link 
            href='/services' 
            className="inline-block px-8 hover:scale-105 cursor-pointer py-4 bg-gradient-to-r from-indigo-600 to-cyan-400 text-white font-bold rounded-full text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="flex justify-center items-center gap-2 mt-4">
        <div className="h-0.5 w-8 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"></div>
        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
        <div className="h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
      </div>

      <div className="relative bg-white/40 p-8 rounded-3xl border-2 border-indigo-400/50 group-hover:border-cyan-400/50 shadow-lg group-hover:shadow-xl transition-all duration-500 h-full flex flex-col">
        {/* Icon */}
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-cyan-600 transition-all duration-500">
          {service.title}
        </h3>

        {/* Description */}
        <p className="flex-1 text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">
          {service.desc}
        </p>

        {/* Button */}
        {/* <button
          className={`relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${service.color} hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group-hover:shadow-xl`}
        >
          <span className="relative z-10">Learn More</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </button> */}
      </div>
    </div>
  );
};

export default ServicesSection;