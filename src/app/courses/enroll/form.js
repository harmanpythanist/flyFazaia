"use client"

import { form_submit } from "@/server_actions/actions";
import { enroll_fnx } from "@/server_actions/enroll_fnx";
import { DevTool } from "@hookform/devtools";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { set, useForm } from "react-hook-form";

export default function TechForm({data,user}) {
  
  let [submitError,setError]=useState({status:false,msg:null});
  let {register,formState,handleSubmit,control}=useForm({defaultValues:{name:"",email:""}});
let [isPending,startTransition]=useTransition();

let {errors}=formState;

useEffect(()=>{
  console.log(errors);
},[errors])


const submit_fnx =async (data)=>{

console.log("submit runing");

const timer=()=>{ setTimeout(() => {
  setError(x=>{return {...x,status:false,msg:null}});
}, 4000)};

startTransition(async()=>{
try {
 let get=await form_submit("enroll",{course:data.course,id:user.id,contact:data.contact});
  console.log(get);
  setError(x=>{return {...x,status:false,msg:get.msg}});
  timer();
} catch (error) {
  console.log(error.message,error);
  setError(x=>{return {...x,status:true,msg:error.message}});
  timer();
} finally {
clearTimeout(timer);
}})};

useEffect(()=>{console.log(submitError);console.log("pending status : ",isPending);

},[submitError,isPending]);




  return (
    <div className="min-h-screen bg-gray-100 mt-24 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */} <div className=' h-full w-full absolute sm:top-8 top-4  -left-6 z-60'> 
             <Link 
                href={'/services'}
                  className="sm:w-24 sm:h-[40px] md:w-24 md:h-[40px] text-lg  hover:scale-101 cursor-pointer transition-scale duration-300 text-white ml-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
                >
                 Back
                </Link>
                </div> 
        <div 
          className="absolute inset-0 bg-gray-100" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Tech Circuit Nodes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-indigo-500 rounded-sm transform rotate-45 " />
        <div className="absolute top-32 left-40 w-3 h-3 bg-purple-500 rounded-full opacity-80" />
        <div className="absolute top-40 right-32 w-4 h-4 bg-indigo-500 rounded-sm transform rotate-45 opacity-80" />
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-purple-500 rounded-full opacity-80" />
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-indigo-500 rounded-sm transform rotate-45 opacity-80" />
        <div className="absolute top-60 left-60 w-2 h-2 bg-gray-400 rounded-full opacity-60" />
        <div className="absolute bottom-60 right-60 w-2 h-2 bg-gray-400 rounded-full opacity-60" />
        
        {/* Circuit Connection Lines */}
        <div className="absolute top-22 left-24 w-24 h-0.5 bg-indigo-400 opacity-40" />
        <div className="absolute top-34 left-43 w-20 h-0.5 bg-purple-400 opacity-40 transform rotate-45" />
        <div className="absolute bottom-22 right-24 w-28 h-0.5 bg-indigo-400 opacity-40" />
        <div className="absolute bottom-42 left-35 w-16 h-0.5 bg-purple-400 opacity-40 transform -rotate-45" />
        
        {/* Tech Hexagons */}
        <div className="absolute top-16 right-16 w-6 h-6 border-2 border-indigo-400 opacity-30 transform rotate-45" />
        <div className="absolute bottom-16 left-16 w-8 h-8 border-2 border-purple-400 opacity-30 transform rotate-12" />
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/9 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Join <span className="text-indigo-600">Fly Fazaia</span>
            </h2>
            <p className="text-gray-600">Transform your future with cutting-edge courses</p>
            
            {/* Decorative line */}
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit(submit_fnx)}>
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                 Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                disabled
                value={user.name}
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input value={user.email} disabled
              //  {...register("email",{required:"cant be empty",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Invalid email address"}})}
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            {/* WhatsApp Number Field */}
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                WhatsApp Number
              </label>
              <input {...register("contact",{required:"Must provide a WhatsApp contact no",pattern: {
      value: /^\+?[0-9]{10,15}$/,
      message: "Invalid contact number",
    }  })}
                type="tel"
                id="contact"
                name="contact"
                
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                placeholder="+92 300 1234567"
              />
              <p className="text-gray-600 text-lg">{errors?.contact?.message}</p>
            </div>

            {/* Course Selection */}
            <div className="space-y-2">
              <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                Select Course
              </label>
              <select {...register("course",{required:"Must be selected"})}
                id="course"
                name="course"
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
              >
                <option value="">Choose a course</option>
                {data?.data?.map((x) => (
                  <option key={x.id} >
                    {x.title}
                  </option>
                ))}
              </select>
                 <p className="text-gray-600 text-lg">{errors?.course?.message}</p>
            </div>

            {/* Submit Button */}
            <button
            disabled={isPending?true:false}
              type="submit"
              className="w-full relative cursor-pointer overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-101 hover:shadow-xl group"
            >
              <span className="relative z-10">
                Start Your Journey
              </span>
              
              {/* Button hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>
{/* <DevTool control={control}/> */}
          {/* Footer */}
          {/* <p className="text-gray-800 mt-6  text-xl">{submitError.status&&submitError.msg}</p> */}
          <div className="mt-8 text-center">
            <p className="text-indigo-600 text-lg font-semibold mb-6">{submitError.msg}</p>
            <p className="text-gray-600 text-sm">
              Questions? Contact us on WhatsApp for instant support
            </p>
          </div>
        </div>
      </div>

      {/* Inline styles for tech shadow */}
      
    </div>
  );
}