import React, { Suspense } from 'react';
import TechForm from './form';
import CryptoJS from 'crypto-js'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/client_comps/Error_comp';
import { cookies } from 'next/headers';
import { fetch_fnx } from '@/server_fetch/fetch';


const Page = async() => {

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
    <Auth/>
     </Suspense>
)


}

export default Page;


const Auth=async()=>{

try {
const get=await fetch_fnx("course-list")
console.log(get);

    const cookieStore=await cookies();
const user=cookieStore.get("user-data")?.value;
if(!user){throw new Error("User Not Authorized,Please Login")}
let decrypt=JSON.parse( CryptoJS.AES.decrypt(user, "125xyzabc").toString(CryptoJS.enc.Utf8));
console.log(user,new Date(decrypt.expiry));
if(decrypt){
if(new Date(decrypt.expiry) >new Date()){
    
    
    return <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
            <TechForm data={get} user={decrypt}/>
            </ErrorBoundary>
        </div>
}else {throw new Error("User Session expired,Login Again")}

}else{throw new Error("User Not Authorized")}
} catch (error) {return <div className='text-6xl mt-66 w-[100vw] text-indigo-500 h-[50vh] font-black flex flex-col items-center justify-center'>  <div className='h-[50px] w-[100px] absolute top-28 sm:top-24 left-4 sm:left-8 md:left-12 z-60'> 
        <Link
          href={'/'}
          className="w-20 sm:w-24 h-[36px] sm:h-[40px] text-base sm:text-lg hover:scale-105 cursor-pointer transition-transform duration-300 text-white bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
        >
          Back
        </Link>
      </div> <p>{error.message}</p></div>
     
}


}