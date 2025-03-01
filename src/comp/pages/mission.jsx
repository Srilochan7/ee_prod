import React from 'react';

const Mission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 gap-8">
      {/* Left section - Text content */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium">
          For Learning and Leading
        </div>
        
        <h1 className="text-5xl font-bold leading-tight">
          Out Mission and Vision
          
        </h1>
        
        <div className="h-1 w-32 bg-indigo-200"></div>
        
        <p className="text-gray-600 text-lg">
        Our team struggled to find quality mentorship and career guidance, which inspired us to create <span className="text-indigo-600 font-medium">ExpertEase</span> We aim to connect learners with mentors for real-time support, bridging the gap and providing equal opportunities for growth and success.
        </p>
        
        {/* <div className="flex gap-4 pt-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full transition">
            Find my tutor
          </button>
          <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded-full transition">
            Join as a tutor
          </button>
        </div> */}
      </div>
      
      {/* Right section - Image and badges */}
      <div className="w-full md:w-1/2 relative">
  <div className="bg-indigo-100 rounded-full p-0 relative">
    {/* Student image */}
    <div className="rounded-full overflow-hidden aspect-square">
      <img 
        src="/mission.jpg" 
        alt="image" 
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Badge - Score */}
    <div className="absolute top-8 left-0 flex items-center gap-2 bg-white p-3 rounded-full shadow-md">
      
      <div>
        <div className="font-bold">Proper Guidance</div>
        <div className="text-gray-500 text-sm"></div>
      </div>
    </div>
    
    {/* Badge - Perfect score */}
    <div className="absolute top-1/4 right-0 bg-white p-4 rounded-full shadow-md">
      <div className="text-indigo-600 font-bold text-2xl">1-1</div>
    </div>
    
    {/* Badge - Congratulations */}
    <div className="absolute bottom-8 right-0 flex items-center gap-2 bg-white p-3 rounded-full shadow-md">
      <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-full">
        <span className="text-red-500">📈</span>
      </div>
      <div>
        <div className="font-bold">skill monetizstion</div>
        
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Mission;