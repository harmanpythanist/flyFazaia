import React from 'react';

const FAQs = () => {
  return (
    <section className="min-h-screen w-full relative scrollbar-hidden overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #4f46e5 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #06b6d4 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating Tech Elements - Hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute top-20 left-10 w-4 h-4 bg-indigo-400 rounded-full animate-bounce" />
      <div className="hidden md:block absolute top-40 right-20 w-6 h-6 border-2 border-cyan-400 animate-spin" style={{animationDuration: '6s'}} />
      <div className="hidden md:block absolute bottom-40 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
      <div className="hidden lg:block absolute top-60 right-1/3 w-2 h-8 bg-gradient-to-b from-indigo-300 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
      <div className="hidden lg:block absolute bottom-20 right-10 w-5 h-5 border border-purple-300 rotate-45 animate-bounce" style={{animationDelay: '0.5s'}} />
      <div className="hidden md:block absolute top-1/3 left-20 w-1 h-1 bg-cyan-500 rounded-full animate-ping" />
      <div className="hidden lg:block absolute bottom-60 right-1/4 w-4 h-1 bg-indigo-300 animate-pulse" style={{animationDelay: '2s'}} />
      <div className="hidden lg:block absolute top-80 left-1/3 w-3 h-3 border-l-2 border-t-2 border-purple-400 animate-spin" style={{animationDuration: '8s'}} />
      <div className="hidden md:block absolute bottom-80 left-16 w-2 h-6 bg-gradient-to-t from-cyan-400 to-transparent animate-bounce" style={{animationDelay: '1.5s'}} />
      <div className="hidden lg:block absolute top-32 right-1/2 w-1 h-4 bg-indigo-400 animate-pulse" style={{animationDelay: '3s'}} />
      <div className="hidden lg:block absolute bottom-32 right-40 w-6 h-6 border-r-2 border-b-2 border-cyan-300 animate-spin" style={{animationDuration: '10s'}} />
      <div className="hidden md:block absolute top-96 left-40 w-2 h-2 bg-purple-500 animate-ping" style={{animationDelay: '0.8s'}} />
      <div className="hidden lg:block absolute bottom-96 right-60 w-5 h-1 bg-gradient-to-r from-indigo-300 to-transparent animate-pulse" style={{animationDelay: '2.5s'}} />
      <div className="hidden lg:block absolute top-72 right-80 w-3 h-3 border border-purple-400 rounded-full animate-bounce" style={{animationDelay: '1.2s'}} />
      <div className="hidden md:block absolute bottom-72 left-60 w-1 h-10 bg-gradient-to-b from-cyan-300 to-transparent animate-pulse" style={{animationDelay: '4s'}} />
      <div className="hidden lg:block absolute top-48 left-80 w-4 h-4 border-l-2 border-indigo-400 animate-spin" style={{animationDuration: '7s'}} />
      <div className="hidden md:block absolute bottom-48 right-20 w-2 h-2 bg-purple-400 rotate-45 animate-ping" style={{animationDelay: '1.8s'}} />
      <div className="hidden lg:block absolute top-24 right-40 w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" style={{animationDelay: '0.3s'}} />
      <div className="hidden lg:block absolute bottom-24 left-80 w-6 h-1 bg-indigo-300 animate-bounce" style={{animationDelay: '2.2s'}} />
      <div className="hidden md:block absolute top-88 right-16 w-3 h-3 border-t-2 border-r-2 border-purple-300 animate-spin" style={{animationDuration: '12s'}} />

      <div className="container mx-auto max-w-full sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h6 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-indigo-600 to-cyan-400 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300 cursor-default px-4">
            Frequently Asked Questions
          </h6>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="overflow-y-auto max-w-full sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[65vw] xl:max-w-[60vw] m-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] space-y-3 sm:space-y-4 mt-8 sm:mt-10 md:mt-12 pr-2 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <details className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.01] hover:border-indigo-300">
            <summary className="cursor-pointer w-full p-4 sm:p-5 md:p-6 font-semibold text-gray-800 text-base sm:text-lg md:text-xl group-hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl sm:rounded-2xl">
              Who are these courses for?
            </summary>
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3 sm:mb-4" />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our courses are designed for school students, college/university students, and beginners to intermediate learners who want to build strong skills in programming, AI, and computer science.
              </p>
            </div>
          </details>

          <details className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.01] hover:border-indigo-300">
            <summary className="cursor-pointer w-full p-4 sm:p-5 md:p-6 font-semibold text-gray-800 text-base sm:text-lg md:text-xl group-hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl sm:rounded-2xl">
              Do I need prior programming knowledge to enroll?
            </summary>
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3 sm:mb-4" />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Not necessarily. Many courses start from basics and gradually move to advanced concepts. Prerequisites (if any) are clearly mentioned on each course page.
              </p>
            </div>
          </details>

          <details className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.01] hover:border-indigo-300">
            <summary className="cursor-pointer w-full p-4 sm:p-5 md:p-6 font-semibold text-gray-800 text-base sm:text-lg md:text-xl group-hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl sm:rounded-2xl">
              Are the courses suitable for beginners?
            </summary>
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3 sm:mb-4" />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Yes. We offer beginner-friendly courses as well as intermediate and advanced tracks.
              </p>
            </div>
          </details>

          <details className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.01] hover:border-indigo-300">
            <summary className="cursor-pointer w-full p-4 sm:p-5 md:p-6 font-semibold text-gray-800 text-base sm:text-lg md:text-xl group-hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl sm:rounded-2xl">
              Do you provide certificates?
            </summary>
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3 sm:mb-4" />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Yes. A certificate of completion is provided after successfully completing a course.
              </p>
            </div>
          </details>

          <details className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.01] hover:border-indigo-300">
            <summary className="cursor-pointer w-full p-4 sm:p-5 md:p-6 font-semibold text-gray-800 text-base sm:text-lg md:text-xl group-hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl sm:rounded-2xl">
              Will I be prepared for exams, interviews, or assessments?
            </summary>
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3 sm:mb-4" />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Yes. Our teaching approach focuses on concepts, problem-solving, and practical implementation to help in exams and interviews.
              </p>
            </div>
          </details>

          <details className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.01] hover:border-indigo-300">
            <summary className="cursor-pointer w-full p-4 sm:p-5 md:p-6 font-semibold text-gray-800 text-base sm:text-lg md:text-xl group-hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl sm:rounded-2xl">
              Do you offer final year / semester projects?
            </summary>
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3 sm:mb-4" />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Yes. We provide complete guidance and development support for academic projects in Python, ML, AI, and related domains.
              </p>
            </div>
          </details>

          <details className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.01] hover:border-indigo-300">
            <summary className="cursor-pointer w-full p-4 sm:p-5 md:p-6 font-semibold text-gray-800 text-base sm:text-lg md:text-xl group-hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl sm:rounded-2xl">
              Do you provide full fledge solutions to tech problems?
            </summary>
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3 sm:mb-4" />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Yes. We provide full fledge projects in different domains.
              </p>
            </div>
          </details>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16 px-4">
          <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg">
            Still have questions? We&apos;re here to help!
          </p>
          <button className="group bg-gradient-to-r from-indigo-600 to-cyan-400 text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span className="group-hover:animate-pulse">Contact Support</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;