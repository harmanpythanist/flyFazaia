import ListAnimation, { Headings_appear } from '@/client_comps/list_animation';
import TechWritingPlate from '@/client_comps/tech_writing_plate';
import React from 'react';

const Page = () => {
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
    <div className='mt-24 sm:mt-32 md:mt-44 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24'>
      {/* Header */}
      <div className='text-2xl sm:text-3xl md:text-4xl font-black w-full sm:w-[80vw] md:w-[50vw]'>
        <TechWritingPlate>Privacy & Policies</TechWritingPlate>
      </div>

      <div className='text-center text-base sm:text-lg md:text-xl mt-16 sm:mt-20 md:mt-16 text-gray-500 flex flex-col items-center justify-evenly w-full'>
        
        {/* Decorative dots */}
        <div className="absolute top-20 left-4 sm:left-10 md:left-20 w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-8 sm:right-20 md:right-32 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-40 left-8 sm:left-20 md:left-32 w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400 rounded-full opacity-60 animate-pulse"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Introduction */}
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <Headings_appear title="Our Commitment to You" />
            <div className='mt-12 sm:mt-14 md:mt-16'>
              <TechWritingPlate>
                <ListAnimation>
                  <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                    Transparent policies and your privacy are our top priorities
                  </p>
                </ListAnimation>
              </TechWritingPlate>
            </div>
          </div>

          {/* Courses Policy Section */}
          <div className="mb-20 sm:mb-24 md:mb-28">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-8 sm:mb-10 md:mb-12">
              Courses Policy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
              {coursesPolicies.map((policy, i) => (
                <PolicyCard key={i} {...policy} />
              ))}
            </div>
          </div>

          {/* Projects Policy Section */}
          <div className="mb-20 sm:mb-24 md:mb-28">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-8 sm:mb-10 md:mb-12">
              Projects Policy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
              {projectsPolicies.map((policy, i) => (
                <PolicyCard key={i} {...policy} />
              ))}
            </div>
          </div>

          {/* Privacy Policy Section */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-8 sm:mb-10 md:mb-12">
              Privacy Policy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
              {privacyPoints.map((point, i) => (
                <PrivacyCard key={i} {...point} />
              ))}
            </div>
          </div>

          {/* Additional Privacy Information */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <TechWritingPlate>
              <ListAnimation>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-4 sm:mb-5 md:mb-6 text-center">
                  Cookies & Tracking
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light leading-relaxed">
                  We may use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings. These technologies help us understand how you interact with our services and enable us to provide a better user experience.
                </p>
              </ListAnimation>
            </TechWritingPlate>
          </div>

          <div className="mb-12 sm:mb-14 md:mb-16">
            <TechWritingPlate>
              <ListAnimation>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-4 sm:mb-5 md:mb-6 text-center">
                  Third-Party Services
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light leading-relaxed">
                  Our website may contain links to third-party services. We are not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies before providing any personal information. Any data you share with third-party services is governed by their respective privacy policies.
                </p>
              </ListAnimation>
            </TechWritingPlate>
          </div>

          <div className="mb-12 sm:mb-14 md:mb-16">
            <TechWritingPlate>
              <ListAnimation>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-4 sm:mb-5 md:mb-6 text-center">
                  Policy Updates
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light leading-relaxed">
                  We may update these policies periodically to reflect changes in our practices or legal requirements. Significant changes will be communicated via email or through a notice on our website. Continued use of our services after policy updates constitutes acceptance of the revised terms.
                </p>
              </ListAnimation>
            </TechWritingPlate>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 sm:mt-20 md:mt-24">
            <TechWritingPlate>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
                  Questions About Our Policies?
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light">
                  We're committed to transparency and protecting your rights. If you have any questions or concerns about our policies or privacy practices, please don't hesitate to reach out to us.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">
                  📧 Contact us anytime for clarification or assistance
                </p>
              </div>
            </TechWritingPlate>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-12 sm:mt-14 md:mt-16">
            <p className="text-xs sm:text-sm text-gray-500">
              Last Updated: November 2024
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page;