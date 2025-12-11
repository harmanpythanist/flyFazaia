"use client"


import React, { useCallback, useEffect } from 'react';
import { SignServeAction } from './sign_serveAction';


const SignUp = () => {



const pop_callback=useCallback(() => {
  const popUp = window.open(
    "http://localhost:4600/api/auth/google",
    "googleSign",
    "height=900,width=600"
  );

  if (!popUp) return alert("Popup blocked. Please allow popups.");

  const timer = setInterval(() => {
    if (popUp.closed) {
      clearInterval(timer);
      alert("Sign-in process aborted");
    }
  }, 500);

  const listener = async (e) => {
    console.log("Message received:", e.data);

    if (e.origin !== "http://localhost:4600") return; // backend origin check ✅

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
        <div className="flex flex-col items-center justify-center m-44 min-h-screen bg-transparent">
            <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md flex flex-col items-center">

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
                
                <button
                    onClick={(e)=>{e.preventDefault();
                       pop_callback()
                       }}
                    className="flex items-center justify-center w-full bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300"
                    aria-label="Sign in with Google"
                >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.341c-1.04 3.172-3.877 6.398-7.91 8.563l6.551 5.25C40.457 39.58 43.611 34.002 43.611 20.083z"/>
                        <path fill="#FF3D00" d="M6.399 28.083h8l4.473 3.493C18.293 34.186 16 35.539 16 38c0 3.75 3.332 6.875 8 6.875 4.675 0 8-3.125 8-6.875 0-2.461-2.293-3.814-3.528-4.708l4.473-3.493h8c0 4.398-3.504 9.17-8 9.17-6.711 0-12-5.772-12-12.833 0-7.062 5.289-12.833 12-12.833 4.496 0 8 4.772 8 9.17 0 1.25-.133 2.5-.389 3.667H24V20h19.611c0-2.834-.849-5.753-2.314-8.15C38.647 8.355 35.15 6 31 6c-6.711 0-12 5.772-12 12.833 0 3.93 1.832 7.502 4.708 9.878L14.473 31.576z"/>
                        <path fill="#4CAF50" d="M14.473 31.576L6.399 28.083h8l4.473 3.493c-.833.518-1.576 1.155-2.238 1.956L14.473 31.576z"/>
                        <path fill="#1976D2" d="M24 6.875c4.15 0 7.647 2.355 9.873 5.127C36.782 14.45 37.631 17.368 37.631 20.202h-4.02C33.611 16.792 31.137 14.042 27.653 14.042c-2.875 0-5.349 2.164-6.353 5.034l6.551 5.25c4.033-2.165 6.87-5.391 7.91-8.563H43.611V20c0 13.918-3.154 19.497-15.068 20.841L24 37.875c-4.668 0-8-3.125-8-6.875 0-2.461 2.293-3.814 3.528-4.708l4.473-3.493L14.473 31.576l-4.473-3.493c-2.875 2.376-4.708 5.948-4.708 9.878 0 7.061 5.289 12.833 12 12.833 4.15 0 7.647-2.355 9.873-5.127 1.465-2.397 2.314-5.316 2.314-8.15 0-3.93-1.832-7.502-4.708-9.878z"/>
                    </svg>
                    Sign in with Google
                </button>
            </div>
            
            {/* Kept the container for centering and background, removed unnecessary elements */}
        </div>
    );
}

export default SignUp;