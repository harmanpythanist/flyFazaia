import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
       <footer className="bg-gray-100 h-screen text-gray-800 py-16 relative overflow-hidden">
        {/* Performant Visual Elements - Only 4 animated + CSS patterns */}
 <div className="absolute h-inherit  inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 4, 255, 0.91) 1px, transparent 1px),
              linear-gradient(0deg, rgba(0, 1, 85, 0.93) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.6) 1px, transparent 1px),
              linear-gradient(0deg, rgba(147, 51, 234, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 20px 20px, 20px 20px',
            backgroundPosition: '0 0, 0 0, 25px 25px, 25px 25px'
          }}></div>
        {/* CSS Background Pattern - Most Efficient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #4f46e5 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, #06b6d4 1px, transparent 1px),
              radial-gradient(circle at 40% 80%, #8b5cf6 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 80px 80px, 100px 100px'
          }} />
        </div>

        {/* Static Decorative Elements - No Performance Cost */}
        <div className="absolute top-16 right-16 w-8 h-1 bg-gradient-to-r from-indigo-400 to-transparent" />
        <div className="absolute top-32 left-20 w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
        <div className="absolute bottom-32 right-32 w-6 h-6 border border-purple-300 rotate-45" />
        <div className="absolute bottom-16 left-16 w-4 h-4 bg-indigo-300 rotate-12" />
        <div className="absolute top-1/2 right-10 w-2 h-12 bg-gradient-to-b from-cyan-300 to-transparent" />
        <div className="absolute top-1/3 left-10 w-12 h-2 bg-gradient-to-r from-purple-300 to-transparent" />

        {/* Only 4 Animated Elements - Minimal Impact */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '3s'}} />
        <div className="absolute top-40 right-1/4 w-4 h-4 border border-cyan-400 animate-spin" style={{animationDelay: '1s', animationDuration: '8s'}} />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-1/3 w-5 h-5 border-l-2 border-t-2 border-indigo-400 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* About Us */}
            <div className="group">
              <h6 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300">
                About Us
              </h6>
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mb-4 group-hover:w-16 transition-all duration-300" />
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Expert AI/ML freelancing and Python programming courses. Transform your business with custom Machine Learning solutions or master AI today.
              </p>
            </div>

          
            {/* Contact Us */}
            <div className="group space-y-4">
              <h6 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300">
                Contact Us
              </h6>
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mb-4 group-hover:w-16 transition-all duration-300" />

              <div className="space-y-3">
                <div className="text-gray-600 text-sm font-medium flex items-center group/contact hover:text-indigo-600 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full flex items-center justify-center mr-3 group-hover/contact:scale-110 transition-transform duration-300">
                    <i className="fa fa-envelope text-white text-xs"></i>
                  </div>
                  <span
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@enginefinders.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    harmanwaheed@gmail.com
                  </span>
                </div>

                <div className="text-gray-600 text-sm font-medium flex items-center group/contact hover:text-indigo-600 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full flex items-center justify-center mr-3 group-hover/contact:scale-110 transition-transform duration-300">
                    <i className="fa-solid fa-phone text-white text-xs"></i>
                  </div>
                  
                  <span  className="hover:underline">+92 3329555307</span>
                </div>

                
              </div>
            </div>

            {/* Legal */}
            <div className="group lg:flex lg:flex-col lg:items-center">
              <h6 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent mb-6 lg:ms-[-80px] hover:scale-105 transition-transform duration-300">
                Legal
              </h6>
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mb-4 lg:ms-[-80px] group-hover:w-16 transition-all duration-300" />
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/policy", label: "Privacy Policy" },
                  
                ].map((link) => (
                  <li key={link.href} className="group/item">
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-indigo-600 transition-all duration-300 flex items-center group-hover/item:translate-x-2"
                    >
                      <div className="w-0 h-px bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover/item:w-4 transition-all duration-300 mr-0 group-hover/item:mr-2" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gradient-to-r from-gray-200 via-indigo-200 to-gray-200 mt-12 pt-8 relative z-10">
          <div className="container mx-auto flex flex-col items-center space-y-6">
            
            {/* Tech Divider Line */}
           
            
            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-500 text-sm font-medium">
                © 2025 <span className="bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent font-semibold">Fly Fazaia</span>. All rights reserved.
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-indigo-400 to-cyan-400 mx-auto mt-2" />
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;