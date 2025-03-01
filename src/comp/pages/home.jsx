import React, { useState } from 'react';
import { Search, Filter, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
    const mentors = [
        {
          id: 1,
          name: "Param sir",
          title: "Senior Blockchain Developer",
          rate: 50,
          rating: 5.0,
          reviews: 42,
          skills: ["Blockchain", "Smart Contracts"],
          bgColor: "#333"
        },
        {
          id: 2,
          name: "Param sir",
          title: "Senior Blockchain Developer",
          rate: 50,
          rating: 5.0,
          reviews: 42,
          skills: ["Blockchain", "Solidity"],
          bgColor: "#9c27b0"
        },
        {
          id: 3,
          name: "Emma Wilson",
          title: "Lead Developer",
          rate: 180,
          rating: 5.0,
          reviews: 42,
          skills: ["iOS", "Swift"],
          bgColor: "#333"
        }
      ];

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-8">
     


<div className="bg-black py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect with Expert Mentors</h1>
        <p className="text-xl text-gray-300 mb-8">Learn from experienced developers and accelerate your Web3 journey</p>
        
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium">
            Get Started
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-medium border border-gray-700">
            Learn More
          </button>
        </div>
        
        {/* Search Container */}
        <div className="bg-gray-800 rounded-xl p-6 max-w-4xl mx-auto shadow-lg">
          <div className="flex items-center gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search mentors by name, skills, or expertise..."
                className="w-full bg-gray-700 text-white pl-10 pr-4 py-3 rounded-full border border-gray-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-gray-700 text-white px-4 py-3 rounded-full flex items-center gap-2 border border-gray-600">
              <Filter size={16} />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mentors Grid */}
      <div className="max-w-6xl mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-lg mr-4 flex-shrink-0" 
                  style={{ backgroundColor: mentor.bgColor }}
                ></div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <p className="text-gray-400 text-sm">{mentor.title}</p>
                </div>
                <div className="bg-blue-500 px-3 py-1 rounded-full text-sm font-bold">
                  ${mentor.rate}/hr
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">★★★★★</div>
                <span className="ml-2 text-sm">
                  {mentor.rating} ({mentor.reviews} reviews)
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-700 px-3 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between text-gray-400 text-sm mt-4">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>60 min session</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-1" />
                  <span>Available today</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-lg mr-4 flex-shrink-0" 
                  style={{ backgroundColor: mentor.bgColor }}
                ></div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <p className="text-gray-400 text-sm">{mentor.title}</p>
                </div>
                <div className="bg-blue-500 px-3 py-1 rounded-full text-sm font-bold">
                  ${mentor.rate}/hr
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">★★★★★</div>
                <span className="ml-2 text-sm">
                  {mentor.rating} ({mentor.reviews} reviews)
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-700 px-3 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between text-gray-400 text-sm mt-4">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>60 min session</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-1" />
                  <span>Available today</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-lg mr-4 flex-shrink-0" 
                  style={{ backgroundColor: mentor.bgColor }}
                ></div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <p className="text-gray-400 text-sm">{mentor.title}</p>
                </div>
                <div className="bg-blue-500 px-3 py-1 rounded-full text-sm font-bold">
                  ${mentor.rate}/hr
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">★★★★★</div>
                <span className="ml-2 text-sm">
                  {mentor.rating} ({mentor.reviews} reviews)
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-700 px-3 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between text-gray-400 text-sm mt-4">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>60 min session</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-1" />
                  <span>Available today</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Home;



