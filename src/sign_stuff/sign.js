"use client"

import React, { useCallback } from 'react';
import { SignServeAction } from './sign_serveAction';

const SignUp = () => {
  let url = process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_URL 
    : "http://localhost:4600";

  const pop_callback = useCallback(() => {
    const popUp = window.open(
      `${url}/api/auth/google`,
      "googleSign",
      "height=900,width=600"
    );

    if (!popUp) return alert("Popup blocked. Please allow popups.");

    let processed = false; // ✅ Prevent duplicate processing

    const timer = setInterval(() => {
      if (popUp.closed) {
        clearInterval(timer);
        window.removeEventListener("message", listener);
      }
    }, 500);

    const listener = async (e) => {
      console.log("Message received:", e.data);

      // ✅ Check message type first (most important)
      if (e.data?.type !== "OAUTH_SUCCESS") {
        console.log("Ignoring non-OAuth message");
        return;
      }

      // ✅ Prevent processing the same message multiple times
      if (processed) {
        console.log("Already processed, ignoring duplicate");
        return;
      }
      processed = true;

      // ✅ Origin check AFTER type check (more lenient for debugging)
      const allowedOrigins = [
        "http://localhost:4600",
        url,
        process.env.NEXT_PUBLIC_URL
      ].filter(Boolean);
      
      if (!allowedOrigins.includes(e.origin)) {
        console.log("❌ Origin rejected:", e.origin);
        console.log("Expected one of:", allowedOrigins);
        processed = false; // Reset so valid message can be processed
        return;
      }

      console.log("✅ Processing OAuth success...");

      try {
        const fnx = await SignServeAction(e.data);
        console.log("✅ SignServeAction result:", fnx);
      } catch (err) {
        console.error("❌ Error in SignServeAction:", err);
      } finally {
        // ✅ Clean up
        clearInterval(timer);
        window.removeEventListener("message", listener);
        
        // ✅ Try to close popup (might fail due to COOP, but that's ok)
        try {
          popUp.close();
        } catch (e) {
          console.log("Popup will close itself");
        }
      }
    };

    window.addEventListener("message", listener);
  }, [url]);

  return (
    <div className="">
      <button
        onClick={(e) => {
          e.preventDefault();
          pop_callback();
        }}
        className="w-24 h-[50px] hover:scale-101 cursor-pointer transition-scale duration-300 text-white bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
      >
        Sign in 
      </button>
    </div> 
  );
}

export default SignUp;
