// import Image from "next/image";

import Services from "./services";
import CardsHeader from "@/client_comps/cards_header";

import Header from "./home_comps/header";
import ListAnimation, { Headings_appear } from "@/client_comps/list_animation";
import Courses from "./home_comps/courses";
import FAQs from "./home_comps/faq";
import TechWritingPlate from "@/client_comps/tech_writing_plate";
import Particles from "@/client_comps/particles";
import ServicesSection from "./home_comps/services";

export default function Home() {
  return (
    <div className="font-sans relative items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        {/* Tech circuit pattern background */}
        
      <main className="items-start sm:items-start h-screen w-screen">
        <section className="relative w-full h-full px-16 overflow-hidden">
          
        
          
          {/* Tech nodes/connection points */}
          <div className="absolute top-20 left-20 w-3 h-3 bg-indigo-400 rounded-full opacity-100"></div>
          <div className="absolute top-32 left-40 w-2 h-2 bg-purple-400 rounded-full opacity-100"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-indigo-400 rounded-full opacity-100"></div>
          <div className="absolute bottom-40 left-32 w-2 h-2 bg-purple-400 rounded-full opacity-100"></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-indigo-400 rounded-full opacity-100"></div>
          
        

          {/* Main Content Container */}
          <div className="relative  h-full flex items-center justify-center z-10">
            <div className="w-full h-full flex">
               <Particles/>
              {/* Text Side - Left Half */}
              <Header>
                <p>Fly Fazaia</p> 
                <p className="mt-4 text-lg text-slate-600 sm:mt-6 sm:text-xl hover:text-slate-700 transition-colors duration-300 animate-slideInLeft">
                  Practical AI &amp; ML Courses — Learn by building real projects.
                </p>
              </Header>

            </div>
          </div>
        </section>
      </main>

      {/* Services Section - binary code pattern */}
      <section className="text-center relative ">
      
        
        <div className="relative z-10">
           <Particles/>
          <Services>
            <span>Apply your skills through real-world projects</span>
            <span>Learn to code from kids to professionals</span>
            <span>Master Programming, AI & Data Science</span>
            <span>Build stunning Web Applications</span>
          </Services>
           <Particles/>
        </div>
      </section>

      {/* Cards Section - hexagonal tech pattern */}
      <section className="relative w-[100vw] flex flex-col justify-center items-center h-[100vh] mt-24 relative">
       
<Headings_appear title="What We Offer"/>

        
         <Particles/> 
         {<CardsHeader data={[{title:"For Students",text:"Python, AI/ML, Data Science, Scratch for kids, Web Development."},{title:"For Clients",text:"AI Models, Data Processing, Website Development, Python Solutions."}]} title="What We Offer"/>}
      </section>


<section className="relative w-[98vw] flex flex-col mt-24 items-center justify-center border-black">
  <Particles/>
<strong className="text-indigo-400 font-black text-6xl">
  
 <Headings_appear title="Social Proof"/> 
  
  </strong>
<div className="mt-0 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-16 px-4'">
 { ["21 projects","22 students","17 returning clients","Over 55% work from returning clients","Instructors with Udemy + AKTI teaching experience"].map((x,i)=>{return(
 <div key={i} className="mt-6 sm:w-[40vw] w-[100vw] flew-wrap"> 
 <TechWritingPlate i={i}>
    <ListAnimation>
      {x}
    </ListAnimation>
  </TechWritingPlate>
  </div>
 )})}
 
</div>
<section className="relative py-12 text-gray-200 w-[100vw] ">
   <Particles/>
      <h2 className="text-center text-indigo-400 text-5xl font-bold mb-8">
        What Our Clients Say
      </h2>

      {/* Scrollable container */}
      <div
        className="flex flex-col items-center sm:flex sm:flex-row sm:justify-center justify-center gap-6 overflow-x-auto snap-x snap-mandatory px-6">
        {[
  {
    name: "Liban (UK)",
    text: "He's really good at doing specific tasks with optimal quality. Delivered great work even with a short time frame.",
    rating: 5,
  },
  {
    name: "Paul (Germany)",
    text: "I asked for a very specific task and he completed it very well!",
    rating: 5,
  },
  {
    name: "Ashley (Philippines)",
    text: "So far it was successful even in a short period of time, I'm impressed. Reliable indeed!",
    rating: 5,
  },
].map((review, i) => (
          <div
            key={i}
            className="w-[300px] sm:h-[200px] sm:min-w-[350px] max-w-sm  bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
           
          >
            <p className="text-lg italic mb-4">"{review.text}"</p>
            <div className="mt-auto">
              <p className="font-semibold">{review.name}</p>
              <div className="flex text-yellow-400">
                {"★".repeat(review.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  
</section>


<section className="relative h-full w-[100vw] text-center mt-24">

<Particles/>
<Headings_appear title="Our Services"/>
<div className="mt-12">
<TechWritingPlate>
  <ListAnimation>
     <p className="">
            Empowering your vision with cutting-edge technology solutions
          </p>
  </ListAnimation>
</TechWritingPlate>
</div>
<ServicesSection/>


</section>

<section className="relative h-full w-[100vw] text-center mt-24">
 <div 
          >
             <Particles/>
          <Headings_appear title='Our Courses'/>
          </div>
          <div className="mt-12">
          <TechWritingPlate>
          <ListAnimation>
            <p>Transform your future with cutting-edge technology courses</p>
      </ListAnimation>
      </TechWritingPlate>
      </div>
<Courses/>
</section>




<section className="h-full w-[100vw] text-center mt-12">
  <FAQs/>
</section>



    </div>
  );
}

// Alternative Gradient Combinations (use any of these by replacing the main gradient):

/* 
OPTION A: Luxury Dark Theme
className="bg-gradient-to-br from-gray-900 via-indigo-900 to-black"

OPTION B: Warm Sunset
className="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600"

OPTION C: Cool Professional
className="bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-900"

OPTION D: Modern Minimal
className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"

OPTION E: Vibrant Tech
className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500"

OPTION F: Premium Gold
className="bg-gradient-to-br from-yellow-200 via-orange-300 to-red-400"
*/

// CSS for additional premium effects (add to your global styles):
/* 
.premium-glow {
  box-shadow: 
    0 0 20px rgba(139, 92, 246, 0.3),
    0 0 40px rgba(139, 92, 246, 0.2),
    0 0 80px rgba(139, 92, 246, 0.1);
}

.glass-morphism {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.mesh-gradient {
  background: 
    radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);
}
*/