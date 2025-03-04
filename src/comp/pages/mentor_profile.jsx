import React, { useState } from 'react';

const MentorProfile = () => {
  const [selectedDuration, setSelectedDuration] = useState('12 weeks');
  
  const transformationPackages = [
    {
      title: "Personal Tracking mentorship",
      options: [
        { duration: "1 month", price: 10000, },
        { duration: "3 months", price: 25000, },
        { duration: "6 months", price: 40000}
      ]
    },
    {
      
      title: "Doubt Solving",
      options: [
        { duration: "12 weeks", price: 147, discount: "SAVE 40%" },
        { duration: "24 weeks", price: 247, discount: "SAVE 45%" }
      ]
    },
    {
      title: "Guidance to get into AI as a career",
      options: [
        { duration: "12 weeks", price: 247, discount: "SAVE 40%" },
        { duration: "24 weeks", price: 397, discount: "SAVE 50%" },
        { duration: "52 week", price: 597, discount: "SAVE 55%" }
      ]
    },
    {
      title: "AI role mock-interview",
      options: [
        { duration: "12 weeks", price: 197, discount: "SAVE 45%" },
        { duration: "24 weeks", price: 347, discount: "SAVE 50%" },
        { duration: "52 week", price: 497, discount: "SAVE 55%" }
      ]
    },
    
    
  ];

  const benefits = [
    {
      title: "Plans designed only for you",
      description: "Personalized Fitness & Nutrition consultation tailormade for you considering your fitness level, eating habits, and weekly food guidance"
    },
    {
      title: "Accountability and Progress Tracking",
      description: "Your coach will set up in-depth weekly calls with you, ensuring you're on the right path toward your goals. Your coach will also handle any questions when needed"
    },
    {
      title: "Continuous Support",
      description: "Your coach is always just a phone call or message away when you need them"
    },
    {
      title: "HIIT & CIS Compensation Policy",
      description: "After 6 weeks spent of an eligible enrolled client's death date in Cardiovascular Diseases (CVDs), the nominated beneficiary is eligible for compensation. All existing clients with diagnosed CVDs including their beneficiaries will continue to stay active as eligible. Check T&C for details."
    }
  ];

  const howItWorks = [
    "You enroll in a package of your choice",
    "You fill in your additional key information like food preferences, preferred time to contact, any medical issues etc.",
    "Coach calls you within 24 hours at your preferred time",
    "Coach understands your goals, sets expectations about what this will look",
    "Coach evaluates and prepares the best plan for you",
    "Coach assesses your weekly progress and makes course adjustments",
    "You get results, yay!"
  ];

  return (
    <div className="w-full bg-gray-50">


      {/* Profile Header */}
      <div className="relative">
        <div className="bg-gray-800 h-24 w-full"></div>
        <div className="absolute -bottom-10 left-8">
          <div className="relative">
            <div className="rounded-full bg-white p-1 w-20 h-20">
              <img 
                src="/api/placeholder/80/80" 
                alt="Kanika Gupta" 
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1 text-xs">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <button className="border border-gray-300 rounded-md px-3 py-1 text-sm flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            AI Engineer @Google
          </button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-16 px-8 pb-8">
        <h1 className="text-2xl font-bold text-gray-800">Kanika Gupta</h1>
        <h2 className="text-xl font-bold text-gray-800 mt-6">Choose Your AI Learning & Mentorship Package</h2>
        <p className="text-gray-600 mt-1">Take a step towards mastering AI and accelerating your career!</p>

        <div className="flex flex-col md:flex-row gap-8 mt-6">
          {/* Left Column - Package Options */}
          <div className="md:w-1/2">
            <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-white p-2 rounded-t-md text-sm">
              Recommended for you
            </div>
            
            {transformationPackages.map((pkg, index) => (
              <div key={index} className="border border-gray-300 p-4 mb-4 bg-white rounded-md">
                <h3 className="font-medium text-gray-800 mb-2">{pkg.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {pkg.options.map((option, optIndex) => (
                    <div 
                      key={optIndex}
                      className={`border ${selectedDuration === option.duration ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded-full p-2 flex flex-col items-center cursor-pointer`}
                      onClick={() => setSelectedDuration(option.duration)}
                    >
                      <span className="text-sm font-medium">{option.duration}</span>
                      <div className="flex items-center">
                        <span className="font-bold">${option.price}</span>
                        <span className="ml-1 text-xs text-green-600">{option.discount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Plan Benefits and How It Works */}
          <div className="md:w-1/2">
            <h3 className="font-bold text-gray-800 mb-4">What you will get in 12 weeks plan?</h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="mr-3 mt-1">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-800 mb-4">How it works?</h3>
            
            <div className="relative">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex mb-4">
                  <div className="mr-4 relative">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs">
                      {index + 1}
                    </div>
                    {index < howItWorks.length - 1 && (
                      <div className="absolute top-6 left-3 w-px h-12 bg-gray-300"></div>
                    )}
                  </div>
                  <div className="text-sm text-gray-700">{step}</div>
                </div>
              ))}
            </div>
            
            {/* Footer Guarantees */}
            <div className="flex justify-between mt-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-xs text-gray-500">30-Day<br/>100% guarantee</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-xs text-gray-500">24/7 Coach<br/>available</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <span className="text-xs text-gray-500">Secure<br/>payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;