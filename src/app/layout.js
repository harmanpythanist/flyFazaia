import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./smoothScroll";
import FlyFazaiaNavbar from "./home_comps/navBar";
import Footer from "./home_comps/footer";
import { NavServer } from "./home_comps/navServerAction";
import { Suspense } from "react";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
export const metadata = {
  metadataBase: new URL('https://fly-fazaia.vercel.app'),
  title: {
    default: 'FlyFazaia | Professional AI/ML Services & Python Courses', 
    template: '%s | FlyFazaia',
  },
  description: 'Expert AI/ML freelancing and Python programming courses. Transform your business with custom Machine Learning solutions or master AI today.',
  keywords: ['AI Freelancing', 'Python Courses Pakistan', 'Machine Learning Solutions', 'Learn AI online', 'FlyFazaia'],
  openGraph: {
    title: 'FlyFazaia | AI/ML Services & Python Courses',
    description: 'Master AI and Machine Learning with our professional courses and freelance services.',
    url: 'https://fly-fazaia.vercel.app',
    siteName: 'FlyFazaia',
    images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'FlyFazaia - AI/ML Services and Python Courses',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};;

export default function RootLayout({ children }) {
  console.log("root rendered");
  
  return (
    <html lang="en">
      <body 
        className={`${plusJakarta.variable} ${poppins.variable} antialiased custom-grid-background`}
      >
        <SmoothScroll/>
          

    <Suspense fallback={<div className="fixed  max-h-40 top-2 w-full z-90 transition-all duration-300 
     'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200">

                    <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent 
                                  rounded-full animate-spin mx-auto mb-4"></div>
                    {/* <p className="text-indigo-700 text-xl font-bold">Loading...</p> */}
              
                </div>}>{
                  //  <NavServer/>
                   
                   }</Suspense> 
                   
      
        {children}
        <Footer/>
      </body>
    </html>
  );
}
