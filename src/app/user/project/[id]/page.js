import React, { Suspense } from 'react';
import CryptoJS from 'crypto-js'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/client_comps/Error_comp';
import { cookies } from 'next/headers';
import { fetch_fnx } from '@/server_fetch/fetch';
import Link from 'next/link';
import Auth from '../../auth';


const Page = ({params}) => {
  
   
    return <div className='min-h-screen relative  py-8 px-4'>
         <Suspense fallback={
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent 
                                  rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-indigo-700 text-xl font-bold">Loading...</p>
                  </div>
                </div>
              }>
       <Auth params={params}/>
              </Suspense>   
        </div>

     
};

export default Page;
