// export const revalidate=172800;


import React, { Suspense } from 'react';
import TextComp from './text_comp';
import { fetch_fnx } from '@/server_fetch/fetch';
import Link from 'next/link';

const Page = async({params}) => {



return(
  <Suspense fallback={
                <div className="flex items-center justify-center lg:mt-44 h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent 
                                  rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-indigo-700 text-xl font-bold">Loading...</p>
                  </div>
                </div>
              }>
    <Page_fetch  params={params}/>
  </Suspense>
)

   
}

export default Page;

const Page_fetch=async({params})=>{

try {
let {course}=await params;
  let get=await fetch_fnx("syllabus",decodeURIComponent(course));
console.log(get);

   return (
        <div className='h-full w-[100vw]  mt-24 m-auto text-red-900 font-bold z-60 text-6xl'>
           <div className='mt-44 h-full w-full'>  <Link
                href={'/courses'}
                  className="w-24 h-[40px] text-lg  hover:scale-101 cursor-pointer transition-scale duration-300 text-white ml-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
                >
                 Back
                </Link>
                </div> 
          <TextComp data={get.data}/>
        </div>
    );
} catch (error) {
  return <div className='text-6xl mt-44 text-indigo-500 font-black flex flex-col items-center justify-center'> <div className='mt-44'>  <Link
                href={'/courses'}
                className="w-24 h-[40px] mb-12 text-xl  hover:scale-101 cursor-pointer transition-scale duration-300 text-white bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
                >
                 Back
                </Link>
                </div> <p>Fetch Failed</p><p className='text-2xl text-gray-600'>{error.message}</p></div>
};



}