import CoursesSection from '@/app/home_comps/header_courses';
import React from 'react';
 const courses = [
    { 
      title: "Scratch for Kids", 
      desc: "Learn gaming & animations in a fun way",
      color: "from-purple-600 to-indigo-600",
      icon: "🎮"
    },
    { 
      title: "Python Toolbox", 
      desc: "From basics to advanced programming",
      color: "from-blue-600 to-cyan-600",
      icon: "🐍"
    },
    { 
      title: "AI & ML Mega Course", 
      desc: "Deep dive into AI with projects",
      color: "from-indigo-600 to-purple-600",
      icon: "🤖"
    },
    { 
      title: "Data Science", 
      desc: "Visualize & mine insights from data",
      color: "from-green-600 to-teal-600",
      icon: "📊"
    },
    { 
      title: "Web Development", 
      desc: "Create modern websites & apps",
      color: "from-orange-600 to-red-600",
      icon: "🌐"
    },
  ];
const Courses = () => {
    return (
        <div>
            <CoursesSection data={courses}/>
               
        </div>
    );
}

export default Courses;
