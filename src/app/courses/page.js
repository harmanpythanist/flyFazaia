// export const revalidate=172800;

import React, { Suspense } from 'react';
import CoursesSection from '../../server_comps/cards';
import { fetch_fnx } from '@/server_fetch/fetch';
import Link from 'next/link';


const Page = async() => {

let status={val:false,msg:null,data:null};
// try {
//   let get=await fetch_fnx("courses");
//   status.val=true;status.data=get.data;status.msg=get.msg;
// } catch (error) {
//   status.val=false;status.msg=error.message;
// };
// console.log(status);

// if(!status.val){}

    return (
        <div className='h-full relative flex flex-col items-center justify-center w-[100vw] text-6xl text-white'>
         <div className='absolute top-44 sm:top-44 md:top-44 left-4 sm:left-8 md:left-10 lg:left-[10%] z-60 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-auto sm:w-[80vw] md:w-[60vw] lg:w-[30vw]'>
        <Link
          href='/courses/enroll'
          className="relative px-4 sm:px-5 z-60 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl text-base sm:text-lg font-semibold 
                   bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-center
                   hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300
                   shadow-lg hover:shadow-cyan-500/30 whitespace-nowrap"
        >
          Enroll Now
        </Link>
        
        <Link
         href='https://wa.me/+923329555307'
          className="relative px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl text-base sm:text-lg font-semibold text-center
                   border-2 border-cyan-500 text-cyan-600 bg-white/80
                   hover:bg-cyan-50 hover:border-cyan-400 transition-all duration-300 whitespace-nowrap"
        >
          Contact Us
        </Link>
      </div> 

      {/* Back Button */}
      <div className='h-[50px] w-[100px] absolute top-28 sm:top-24 left-4 sm:left-8 md:left-12 z-60'> 
        <Link
          href={'/'}
          className="w-20 sm:w-24 h-[36px] sm:h-[40px] text-base sm:text-lg hover:scale-105 cursor-pointer transition-transform duration-300 text-white bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
        >
          Back
        </Link>
      </div> 
  <div className='w-full mt-44 sm:mt-36 md:mt-16 lg:mt-24'>
<Suspense fallback={
                <div className="flex items-center justify-center lg:mt-44 h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent 
                                  rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-indigo-700 text-xl font-bold">Loading...</p>
                  </div>
                </div>
              }>
   
        <DynamicContent/>

</Suspense>

      </div>
            
        </div>
    );
}

export default Page;



const DynamicContent=async()=>{

try {
   let get=await fetch_fnx("courses");
  console.log(get)

return (  <CoursesSection data={get.data} type="Courses"/> )


} catch (error) {
   return (
    <div className='min-h-screen w-full px-4 sm:px-6 text-4xl sm:text-5xl lg:text-6xl mt-32 sm:mt-36 md:mt-44 text-indigo-500 font-black flex flex-col items-center justify-center'>
      <div className='mb-8 sm:mb-12'>
        <Link
          href={'/courses'}
          className="w-20 sm:w-24 h-[36px] sm:h-[40px] mb-8 sm:mb-12 text-lg sm:text-xl hover:scale-105 cursor-pointer transition-transform duration-300 text-white bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
        >
          Back
        </Link>
      </div>
      <p className='text-center'>Fetch Failed</p>
      <p className='text-lg sm:text-xl md:text-2xl text-gray-600 mt-4 text-center px-4'>
        {error.message}
      </p>
    </div>
  );
}




}

