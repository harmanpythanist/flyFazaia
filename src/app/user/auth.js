import { cookies } from 'next/headers';
import React, { Suspense } from 'react';
import CryptoJS from 'crypto-js'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/client_comps/Error_comp';
import { fetch_fnx } from '@/server_fetch/fetch';
import Link from 'next/link';


const Auth = async({params}) => {
  
    try {
        let {id}=await params;
const cookieStore=await cookies();
const user=cookieStore.get("user-data")?.value;

if(!user){throw new Error("User Not Authorized,Please Login")}


let decrypt=JSON.parse( CryptoJS.AES.decrypt(user, "125xyzabc").toString(CryptoJS.enc.Utf8));


if(decrypt){
if(new Date(decrypt.expiry) >new Date()){
    
    return <div className='min-h-screen relative  py-8 px-4'>
         <Suspense fallback={
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent 
                                  rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-indigo-700 text-xl font-bold">Loading...</p>
                  </div>
                </div>
              }><Detail_comp name={decrypt.name} email={decrypt.email} id={id}/></Suspense>   
        </div>

}else {throw new Error("User Session expired,Login Again")}

}else{throw new Error("User Not Authorized")}
} catch (error) {console.log(error.message);

;return <div className='text-6xl mt-66 w-[100vw] text-indigo-500 h-[50vh] font-black flex flex-col items-center justify-center'><p>{error.message}</p></div>
     
}};

export default Auth;




const Detail_comp=({name,email,id})=>{


return <div className="bg-white relative rounded-3xl h-full min-h-[100vh] shadow-2xl overflow-hidden mb-8 
                            border border-gray-100 hover:shadow-3xl transition-all duration-300">
                                   <div className="absolute top-24 md:top-18  left-12 z-60">  <Link href='/user'
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
                {/* Header Background */}
                <div className="h-48 mt-24 mt-0 relative overflow-hidden">
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
                          {name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      
                      {/* Name & Email */}
                      <div className="mb-2">
                        <h1 className="text-4xl font-black text-gray-800 mb-2">
                          {name}
                        </h1>
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="font-semibold">{email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* Project Details Section */}
               <div className="px-8 py-12 bg-gradient-to-b from-gray-50 to-white">
                 {/* Section Header */}
                 <div className="text-center mb-8">
                   <h2 className="text-3xl font-black text-gray-800 mb-2">Project Details</h2>
                   <div className="flex justify-center items-center gap-2">
                     <div className="h-0.5 w-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                     <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                     <div className="h-0.5 w-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"></div>
                   </div>
                 </div>

                 {/* Project Card */}
                <Suspense fallback={
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent 
                                  rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-indigo-700 text-xl font-bold">Loading...</p>
                  </div>
                </div>
              }>
<DynamicComp id={id}/>
                </Suspense>
               </div>
              </div>};



const DynamicComp =async ({id})=>{

  const get=await fetch_fnx("project-dets",id);
console.log(get);


return ( <div className="group max-w-3xl mx-auto
                               rounded-2xl p-8 
                               bg-white border-2 border-purple-200
                               hover:border-purple-400 hover:shadow-xl 
                               transition-all duration-300">
                  
                   {/* Project Title */}
                   <div className="mb-6">
                     <h3 className="text-2xl font-bold text-gray-800 mb-3
                                  group-hover:text-purple-600 transition-colors duration-300">
                       {get?.data?.[0]?.title}
                     </h3>
                     <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                   </div>

    {/* Project Description */}
                   <div className="mb-6">
                     <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                       Description
                     </h4>
                     <p className="text-gray-700 leading-relaxed text-base break-words whitespace-pre-wrap">
                       {get?.data?.[0]?.details}
                     </p>
                   </div>
                   {/* Contact Information */}
                   <div>
                     <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                       Contact
                     </h4>
                     <div className="flex items-center gap-3 text-gray-700
                                   bg-gradient-to-r from-purple-50 to-pink-50 
                                   rounded-xl p-4 border border-purple-100">
                       <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                               d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                       </svg>
                       <span className="font-semibold text-lg">{get?.data?.[0]?.contact}</span>
                     </div>
                   </div>
                 </div>)






}


