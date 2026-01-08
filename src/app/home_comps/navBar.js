"use client"
import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { Menu, X, ChevronDown, Search, Bell, User, BookOpen } from 'lucide-react';
import SignUp from '@/sign_stuff/sign';
import { useRouter } from 'next/navigation';
import {logOut_fnx} from '../../server_actions/logout_serviceAction'
import Link from 'next/link';

const FlyFazaiaNavbar = ({data}) => {
  console.log("data");
  
const router=useRouter();
console.log("NAV bar rendered");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

const sign_display = useMemo(() => {
  return (
    <div className="relative flex flex-col items-center justify-center max-h-[60px] max-h-[70px] px-2 max-w-[200px] bg-gray-200 border border-indigo-400 rounded-xl py-2 shadow-sm">
      <span className="text-indigo-700 font-semibold sm:text-xl md:text-xl text-center">
        {data.status ? data?.data?.name : "Not Signed In"}
      </span>

      {data.status && (
        <span onClick={()=>{router.push(`/user`)}} className="text-indigo-600 md:text-sm sm:text-sm mt-1 cursor-pointer hover:text-cyan-400 transition-all">
          View Details
        </span>
      )}
    </div>
  );
}, [data]);



  
  const courses = [
    
    { name: 'Web Development', students: '8.9K', icon: '🧠' ,id:"94a6f587-4d03-486f-aebd-a6a846fcfd3c"},
    { name: 'Data Science', students: '15.2K', icon: '📊' ,id:"3e3e1493-3134-4530-8726-e877a2d3d606"},
    { name: 'AI & ML Mega Course', students: '6.7K', icon: '⚡',id:"a3393bd0-9b0e-4c52-948b-39aa66bbe889"},
    { name: 'Python Toolbox', students: '20.1K', icon: '🐍' ,id:"122d7685-d9ba-4fd9-86ff-80b36cfb5b03"},
  ];

  return (
    <header className={`fixed  max-h-25 top-0 w-full z-90 transition-all duration-300 ${
     'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
       
    }`}>
      <div className="container mx-auto  px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl transform rotate-12 flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-lg transform -rotate-12 flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Fly Fazaia
              </span>
              <div className="text-xs text-blue-600 font-medium -mt-1">AI Academy</div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div onClick={()=>{router.push("/")}} className="text-gray-700 cursor-pointer hover:text-blue-600 font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </div>
            
            {/* Courses Dropdown */}
            <div className="relative" onMouseEnter={() => setIsCoursesDropdownOpen(true)} onMouseLeave={() => setIsCoursesDropdownOpen(false)}>
              <button className="cursor-pointer flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                <span>Courses</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                isCoursesDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
              }`}>
                <div className="p-6">
                  <div className="text-sm font-semibold  text-gray-500 uppercase tracking-wide mb-4">Popular Courses</div>
                  <div className="space-y-3">
                    {courses.map((course, index) => (
                      <div  key={index} onClick={()=>{router.push(`/courses/details/${course.id}`)}} className="flex items-center space-x-3 p-3 cursor-pointer rounded-xl hover:bg-blue-50 transition-colors duration-200 group">
                        <div className="text-2xl">{course.icon}</div>
                        <div className="flex-1">
                          <div className="font-semibold  text-gray-900  group-hover:text-blue-600 transition-colors duration-200">{course.name}</div>
                          
                        </div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <div onClick={()=>{router.push("/courses")}} className="cursor-pointer flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200">
                      <BookOpen size={18} />
                      <span>View All Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span onClick={()=>router.push("/policy")} className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
              Policies/Terms
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </span>
          
            <span onClick={()=>router.push("/about")} className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
            About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </span>

          { data.status&& <button onClick={()=>{logOut_fnx()}}  className="w-24 h-[50px] hover:scale-101 cursor-pointer transition-scale duration-300 text-white bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
              >
              LogOut
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>}
          </div>
 {sign_display} 
          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
          

         
        
  <div className=" relative      text-white rounded-xl font-semibold transition-all duration-300">
           <SignUp/>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
       {/* Mobile Menu */}
<div className={`lg:hidden overflow-hidden transition-all duration-300 ${
  isMenuOpen ? 'h-[90vh] opacity-100 pb-6 ' : 'max-h-0 opacity-0'
} bg-gray-100`}>
  <div className="pt-4 border-t border-gray-200 space-y-4 space-y-2 ml-4">
    <button onClick={()=>{router.push(`/`)}} className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-colors duration-200">
      Home
    </button>
    
    <div className="px-4">
      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Courses</div>
      <div className="space-y-2 ml-4">
        {courses.slice(0, 3).map((course, index) => (
          <button onClick={()=>{router.push(`/courses/details/${course.id}`)}} key={index} className="flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <span>{course.icon}</span>
            <span>{course.name}</span>
          </button>
        ))}
      </div>
    </div>

    <button onClick={()=>{router.push("/policy")}} className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-colors duration-200">
      Policies/Terms
    </button>

    <button onClick={()=>{router.push("/about")}} className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-colors duration-200">
      About Us
    </button>

    <div>
      <SignUp/>
    </div>

    {data.status && <button onClick={()=>{logOut_fnx()}} className="w-34 h-[50px] hover:scale-101 cursor-pointer transition-scale duration-300 text-white bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
      LogOut
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
    </button>}

    <div className="px-4 pt-4 border-t border-gray-200">
    </div>
  </div>
</div>
      </div>
    </header>
  );
};

export default FlyFazaiaNavbar;