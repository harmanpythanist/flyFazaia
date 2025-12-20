// "use client"

// export const dynamic='force-dynamic'

import { fetch_fnx } from "@/server_fetch/fetch";
import { cookies } from "next/headers";
import Link from "next/link";
import CryptoJS from 'crypto-js'
import { Suspense } from "react";

const Page = async () => {
  return ( <Suspense fallback={
                <div className="flex items-center justify-center lg:mt-44 h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent 
                                  rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-indigo-700 text-xl font-bold">Loading...</p>
                  </div>
                </div>
              }>
             {new Promise((resolv=>setTimeout(() => {
           return  resolv(<Auth />)
             }, 4000)))   }
              </Suspense>)
};




const Auth =async()=>{

try {
    const cookieStore = await cookies();
    const user = cookieStore.get("user-data")?.value;
    if (!user) { throw new Error("User Not Authorized, Please Login") }
    
    let decrypt = JSON.parse(CryptoJS.AES.decrypt(user, "125xyzabc").toString(CryptoJS.enc.Utf8));
    console.log(user, new Date(decrypt.expiry));
    
    if (decrypt) {
      if (new Date(decrypt.expiry) > new Date()) {
        return (
          <div className="min-h-screen relative  py-8 px-4">
            <div className="max-w-7xl mt-12 mx-auto">
              {/* Back Button */}
           <div className="absolute top-28 left-16 z-60">  <Link href='/'
                className="mb-6 px-3 py-3 rounded-2xl text-white font-bold
                         bg-gradient-to-r from-indigo-600 to-purple-600
                         hover:from-indigo-500 hover:to-purple-500 
                         transition-all duration-300 shadow-lg
                         hover:scale-105 hover:shadow-xl
                         flex items-center gap-2"
              >
                <span>←</span> Back
              </Link>
</div> 
              {/* Profile Card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 
                            border border-gray-100 hover:shadow-3xl transition-all duration-300">
                {/* Header Background */}
                <div className="h-48 bg-gradient-to-r from-indigo-300 via-purple-600 to-pink-600 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" 
                       style={{
                         backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
                         backgroundSize: '30px 30px'
                       }}>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
                </div>
                
                {/* Profile Info */}
                <div className="px-8 pb-8 -mt-20 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                    <div className="flex flex-col md:flex-row md:items-end gap-6">
                      {/* Avatar Placeholder */}
                      <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-500 
                                    shadow-2xl border-4 border-white flex items-center justify-center">
                        <span className="text-5xl font-black text-white">
                          {decrypt?.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      
                      {/* Name & Email */}
                      <div className="mb-2">
                        <h1 className="text-4xl font-black text-gray-800 mb-2">
                          {decrypt?.name}
                        </h1>
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="font-semibold">{decrypt?.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagements & Projects */}
              <Suspense fallback={
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent 
                                  rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-indigo-700 text-xl font-bold">Loading...</p>
                  </div>
                </div>
              }>
                <User id={decrypt.id} />
              </Suspense>
            </div>
          </div>
        )
      } else {
        throw new Error("User Session expired, Login Again")
      }
    } else {
      throw new Error("User Not Authorized")
    }
  } catch (error) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-pink-50'>
         <div className='mt-44   max-w-[150px] absolute top-0 left-0 z-60'>  <Link
                href={'/'}
                  className="w-24 h-[40px] text-lg  hover:scale-101 cursor-pointer transition-scale duration-300 text-white ml-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
                >
                 Back
                </Link>
                </div> 
        <div className="text-center p-8 bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-2xl">
          <div className="text-6xl mb-4">⚠️</div>
          <p className='text-4xl font-black text-red-600 mb-2'>{error.message}</p>
        </div>
      </div>
    )
  }


}









async function User({ id }) {
  try {
    let get = await fetch_fnx("user", id);
    console.log(get);
    
    return (
      <div className="space-y-8">
        {/* Engagements Section */}
        {get?.course && get.course.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 
                            rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                📚
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-800">Course Engagements</h2>
                <p className="text-gray-500 font-medium">Your enrolled courses</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {get.course.map((x, index) => (
                <div key={index}
                     className="group bg-gradient-to-br from-indigo-50 to-purple-50 
                              rounded-2xl p-6 border-2 border-indigo-200
                              hover:border-indigo-400 hover:shadow-xl 
                              transition-all duration-300 hover:scale-102">
                  
                  {/* Decorative Dots */}
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <div className="h-0.5 w-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <div className="h-0.5 w-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 
                               group-hover:text-indigo-600 transition-colors duration-300">
                    {x.courses}
                  </h3>

                  {/* Enrollment Date */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold">Enrolled: {x.enrollment_date}</span>
                  </div>

                 
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {get?.projects && get.projects.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 
                            rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                🚀
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-800">Projects</h2>
                <p className="text-gray-500 font-medium">Your active projects</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {get?.projects?.map((x, index) => (
                <div key={index}
                     className="group bg-gradient-to-br from-purple-50 to-pink-50 
                              rounded-2xl p-6 border-2 border-purple-200
                              hover:border-purple-400 hover:shadow-xl 
                              transition-all duration-300 hover:scale-102">
                  
                  {/* Decorative Dots */}
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <div className="h-0.5 w-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="h-0.5 w-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"></div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4
                               group-hover:text-purple-600 transition-colors duration-300">
                    {x.title}
                  </h3>

                  {/* Project Details
                  <p className="text-gray-600 mb-4 font-medium  truncate w-24">
                    {x.details}
                  </p> */}

                  {/* Contact */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4 
                                bg-white rounded-xl p-3 border border-gray-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-semibold">{x.contact}</span>
                  </div>

                  {/* View Details Button */}
                  <Link href={`/user/project/${x.project_id}`} className="w-full mt-4 px-6 py-3 rounded-xl font-bold text-white 
                                   bg-gradient-to-r from-purple-600 to-pink-600 cursor-pointer
                                   hover:from-purple-500 hover:to-pink-500
                                   shadow-lg hover:shadow-xl hover:scale-105
                                   transition-all duration-300">
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {(!get?.course || get.course.length === 0)  && (
          <div className="bg-white rounded-3xl shadow-xl p-16 text-center border border-gray-100">
            
            <div className="text-8xl mb-6">📭</div>
         <div>
                <h2 className="text-3xl font-black text-gray-800">Course Engagements</h2>
               
              </div>
            <h3 className="text-3xl font-black text-gray-800 mt-12 mb-3">No Activities Yet</h3>
            <p className="text-gray-500 text-lg font-medium mb-6">
              Start your journey by enrolling in courses or projects
            </p>
     <div className="w-full  flex justify-evenly">       <Link href="/courses" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 
                           text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
              Explore Courses
            </Link>
             
           </div>
          </div>
        )}
        

  { (!get?.projects || get.projects.length === 0) && (
          <div className="bg-white rounded-3xl shadow-xl p-16 text-center border border-gray-100">
            <div className="text-8xl mb-6">📭</div>
            <div>
                <h2 className="text-3xl font-black text-gray-800">Projects</h2>
               
              </div>
            <h3 className="text-3xl font-black text-gray-800 mt-12 mb-3">No Activities Yet</h3>
            <p className="text-gray-500 text-lg font-medium mb-6">
              Start your journey by enrolling in projects
            </p>
     <div className="w-full  flex justify-evenly">       <Link href="/services" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 
                           text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
              Explore Services
            </Link>
                
           </div>
          </div>
        )}







      </div>
    );
  } catch (error) {
    console.log(error.message);
    return (
      <div className='bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100'>
        <div className='text-6xl mb-4'>⚠️</div>
        <p className='text-3xl font-black text-red-600 mb-2'>Fetch Failed</p>
        <p className='text-xl text-gray-600 mb-6'>{error.message}</p>
        <Link
          href={'/courses'}
          className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 
                   text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Back to Courses
        </Link>
      </div>
    )
  }
}

export default Page;