// "use cache"
import ListAnimation, { Headings_appear } from '@/client_comps/list_animation';
import TechWritingPlate from '@/client_comps/tech_writing_plate';
// import { cacheLife } from 'next/cache';
import React from 'react';

 const Page =async () => {
  //  cacheLife('max') 
  const coursesPolicies = [
    { 
      title: "Course Cancellation", 
      icon: "🔄",
      desc: "Fee for remaining classes will be fully refunded upon cancellation request."
    },
    { 
      title: "Free Demo Classes", 
      icon: "🎓",
      desc: "Enjoy 2 complimentary demo classes before committing to the full course."
    },
    { 
      title: "Course Duration", 
      icon: "📅",
      desc: "Standard course duration is 4 months with flexible scheduling options."
    }
  ];

  const projectsPolicies = [
    { 
      title: "Project Cancellation", 
      icon: "⚠️",
      desc: "Cancellation charges apply based on the work completed at the time of cancellation."
    },
    { 
      title: "Unlimited Revisions", 
      icon: "♾️",
      desc: "We offer unlimited revisions to ensure the final deliverable meets your expectations."
    },
    { 
      title: "Payment Terms", 
      icon: "💳",
      desc: "Payment is due only after the work is delivered and you're satisfied with the results."
    }
  ];

  const privacyPoints = [
    {
      title: "Information Collection",
      icon: "📋",
      content: "We collect only the information necessary to provide our services, including your name, email address, and project requirements."
    },
    {
      title: "Data Protection",
      icon: "🔒",
      content: "Your personal information is stored securely and protected with industry-standard encryption methods."
    },
    {
      title: "Information Usage",
      icon: "🎯",
      content: "We use your information solely to deliver our services, communicate with you, and improve your experience. We never sell or share your data with third parties."
    },
    {
      title: "Confidentiality",
      icon: "🤐",
      content: "All project details, code, and business information shared with us remain strictly confidential and are never disclosed publicly."
    },
    {
      title: "Data Retention",
      icon: "📦",
      content: "We retain your data only as long as necessary to provide services. You may request deletion of your information at any time."
    },
    {
      title: "Your Rights",
      icon: "✅",
      content: "You have the right to access, modify, or delete your personal information. Contact us anytime to exercise these rights."
    }
  ];

  const PolicyCard = ({ icon, title, desc }) => (
    <TechWritingPlate>
      <ListAnimation>
        <div className="text-center">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{icon}</div>
          <h4 className="text-lg sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-2 sm:mb-3">
            {title}
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light px-2">
            {desc}
          </p>
        </div>
      </ListAnimation>
    </TechWritingPlate>
  );

  const PrivacyCard = ({ icon, title, content }) => (
    <TechWritingPlate>
      <ListAnimation>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="text-3xl sm:text-4xl md:text-5xl flex-shrink-0 mx-auto sm:mx-0">{icon}</div>
          <div className="flex-grow text-center sm:text-left">
            <h4 className="text-lg sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-2 sm:mb-3">
              {title}
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light">
              {content}
            </p>
          </div>
        </div>
      </ListAnimation>
    </TechWritingPlate>
  );

  return (
   
          <div className="text-center mt-12 sm:mt-14 md:mt-16">
            <p className="text-xs sm:text-sm text-gray-500">
              Last Updated: November 2024
            </p>
          </div>

  );
}

export default Page;