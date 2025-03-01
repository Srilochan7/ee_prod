import React from 'react';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our team has often faced the challenge of lack of proper guidance and difficulty in monetizing skills. This inspired us to build ExpertEase—a platform designed to connect learners with mentors and provide real opportunities for growth.
            </p>
            
            <div className="mt-4 font-semibold">
              🔹 Srilochan – Founder <br />
              🔹 Kartikeya – Head of Operations <br />
              🔹 Naveen – Tech Lead
            </div>
          </div>
          
          {/* Images Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* First Image */}
            <div className="relative transform rotate-2 transition-transform hover:rotate-0 duration-300">
              <div className="border-4 border-black rounded-lg p-1 shadow-md bg-white">
                <img 
                  src="/about.jpg" 
                  alt="Our Team" 
                  className="w-full h-56 object-cover rounded-md"
                />
                <p className="text-center font-medium py-2">Team of 4 thriving</p>
              </div>
            </div>
            
            {/* Second Image */}
            <div className="relative transform -rotate-2 transition-transform hover:rotate-0 duration-300">
              <div className="border-4 border-black rounded-lg p-1 shadow-md bg-white">
                <img 
                  src="/launching.jpg" 
                  alt="Launching Soon" 
                  className="w-full h-56 object-cover rounded-md"
                />
                <p className="text-center font-medium py-2">Launching Soon!!! 🚀</p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default About;
