import { cookies } from 'next/headers';
import React, { Suspense } from 'react';
import ObjectDetectionUI from './cameraPage';

const Page = async() => {

  
   
         return (

        <div>
            <Suspense fallback={  <div className="flex items-center justify-center lg:mt-44 h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent 
                                  rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-indigo-700 text-xl font-bold">Loading...</p>
                  </div>
                </div>}>
<Auth/>
            </Suspense>
        </div>
    );

   
}



const Auth=async()=>{
    try {
        
const cookieStore=await cookies();
let adminData=cookieStore.get("admin")?.value;

if(!adminData){
    return (<ObjectDetectionUI/>)
}

    } catch (error) {
        
    }
}

export default Page;
