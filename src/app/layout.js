import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./smoothScroll";
import FlyFazaiaNavbar from "./home_comps/navBar";
import Footer from "./home_comps/footer";
import { NavServer } from "./home_comps/navServerAction";
import { Suspense } from "react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
export const metadata = {
  // Use your current live URL
  metadataBase: new URL('https://fly-fazaia.vercel.app'), 
  title: {
    default: 'FlyFazaia | AI/ML Services & Python Mastery',
    template: '%s | FlyFazaia',
  },
  description: 'Top-rated AI/ML freelancing and Python courses. Serving global clients with premium Machine Learning solutions from Pakistan.',
  keywords: ['AI Freelancing', 'Python Courses Pakistan', 'Machine Learning Solutions', 'Learn AI online'],
  alternates: {
    canonical: 'https://fly-fazaia.vercel.app',
  },
  openGraph: {
    images: '/og-image.png', // This will now resolve to https://fly-fazaia.vercel.app/og-image.png
  }
};

export default function RootLayout({ children }) {
  console.log("root rendered");
  
  return (
    <html lang="en">
      <body 
        className={` antialiased custom-grid-background`}
      >
        <SmoothScroll/>
          

    <Suspense fallback={<div className="fixed  max-h-40 top-2 w-full z-90 transition-all duration-300 
     'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200">

                    <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent 
                                  rounded-full animate-spin mx-auto mb-4"></div>
                    {/* <p className="text-indigo-700 text-xl font-bold">Loading...</p> */}
              
                </div>}>{
                   <NavServer/>}</Suspense> 
      
        {children}
        <Footer/>
      </body>
    </html>
  );
}
