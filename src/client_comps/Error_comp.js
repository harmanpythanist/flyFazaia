"use client";
import { useEffect } from "react";
import Particles from "@/client_comps/particles";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  useEffect(() => {
    console.error("App Crashed:", error);
  }, [error]);

  return (
    <div className="relative  h-screen w-screen flex items-center justify-center bg-gray-800 text-gray-200 overflow-hidden">
      {/* Background Particles */}
      <Particles />

      {/* Floating tech dots */}
      <div className="absolute top-16 left-24 w-3 h-3 bg-indigo-400 rounded-full"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full"></div>
      <div className="absolute bottom-20 left-32 w-3 h-3 bg-indigo-500 rounded-full"></div>

      {/* Main container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-lg text-center p-8 rounded-2xl glass-morphism premium-glow"
      >
        <h1 className="text-4xl font-extrabold text-indigo-400 drop-shadow-md">
          Oops! Something Went Wrong
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          Our system encountered an unexpected error. Don’t worry — you can try
          again or go back to safety.
        </p>

        {/* Error details (optional for debugging) */}
        <pre className="mt-6 text-sm text-red-300 bg-black/40 p-3 rounded-lg overflow-x-auto">
          {error?.message}
        </pre>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={resetErrorBoundary}
            className="px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg"
          >
            🔄 Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl font-semibold text-gray-900 bg-yellow-300 hover:bg-yellow-400 transition-colors shadow-lg"
          >
            🏠 Go Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
