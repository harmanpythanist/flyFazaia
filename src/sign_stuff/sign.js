"use client"


import React, { useCallback, useEffect } from 'react';
import { SignServeAction } from './sign_serveAction';


const SignUp = () => {

let url=process.env.NODE_ENV==='production'?process.env.NEXT_PUBLIC_URL:"http://localhost:4600";

const pop_callback=useCallback(() => {
  const popUp = window.open(
    `${url}/api/auth/google`,
    "googleSign",
    "height=900,width=600"
  );

  if (!popUp) return alert("Popup blocked. Please allow popups.");

  const timer = setInterval(() => {
    if (popUp.closed) {
      clearInterval(timer);
      // alert("Sign-in process aborted");
    }
  }, 500);

  const listener = async (e) => {
    console.log("Message received:", e.data);

    if (e.origin !== "http://localhost:4600"||e.origin!==url) return; // backend origin check ✅

    try {
      const fnx = await SignServeAction(e.data);
      console.log("SignServeAction result:", fnx);
    } catch (err) {
      console.error("Error in SignServeAction:", err);
    }

    popUp.close();
    clearInterval(timer);
    window.removeEventListener("message", listener);
  };

  window.addEventListener("message", listener);
},[]);




    return (
        <div className="">
          
                
                <button
                   onClick={(e)=>{e.preventDefault();
                       pop_callback()
                       }}
                  className="w-24 h-[50px] hover:scale-101 cursor-pointer transition-scale duration-300 text-white bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
                >
                  Sign in 
                </button>
          
            
            {/* Kept the container for centering and background, removed unnecessary elements */}
        </div> 
    );
}

export default SignUp;