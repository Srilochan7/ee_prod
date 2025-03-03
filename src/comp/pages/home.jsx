import React, { useState } from 'react';
import { Search, Filter, Clock, CheckCircle, GraduationCap } from 'lucide-react';

const Home = () => {
  const mentors = [
    {
      id: 1,
      name: "Aryan Sharma",
      
      title: "Full Stack developer at Uber",
      rate: 50,
      rating: 5.0,
      reviews: 42,
      skills: ["Full stack", "Devops"]
    },
    {
      id: 2,
      name : "Neha Iyer",
      title: "Senior Blockchain Developer @JPMorgan ",
      rate: 50,
      rating: 5.0,
      reviews: 42,
      skills: ["Blockchain", "Solidity"]
    },
    {
      id: 3,
      name: "Rohan Patel",
      title: "Product Manager @Amazon",
      rate: 180,
      rating: 5.0,
      reviews: 42,
      skills: ["iOS", "Swift"]
    },
    {
      id: 4,
      name: "Ananya Rao",
      title: "AI engineer @Google",
      rate: 180,
      rating: 5.0,
      reviews: 42,
      skills: ["iOS", "Swift"]
    },
    {
      id: 5,
      name: "Vikram Mehta",
      title: "ML engineer at @Google",
      rate: 180,
      rating: 5.0,
      reviews: 42,
      skills: ["iOS", "Swift"]
    },
    {
      id: 6,
      name: "Priya Verma",
      title: "App developer @Tiktok",
      rate: 180,
      rating: 5.0,
      reviews: 42,
      skills: ["iOS", "Swift"]
    },
    {
      id: 7,
      name: "Data Analyst @HDFE",
      title: "Product Manager @Amazon",
      rate: 180,
      rating: 5.0,
      reviews: 42,
      skills: ["iOS", "Swift"]
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] opacity-50"></div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 px-4 text-center">
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }

            .animate-float {
              animation: float 3s ease-in-out infinite;
            }

            .animate-float-delayed {
              animation: float 3s ease-in-out infinite;
              animation-delay: 1.5s;
            }
          `}
        </style>



        <div className="max-w-4xl mx-auto relative p-12">
          <h1 className="text-5xl sm:text-5xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
            Connect with Expert Mentors
            <br />
          </h1>

          <p className="text-xl md:text-xl text-gray-600 mt-4 mb-8">
            Learn from experienced developers and accelerate
            <br /> your development skills.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-1">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search mentors by name, skills, or expertise..."
                className="w-full bg-white text-black pl-10 pr-4 py-3 rounded-full border border-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 w-full md:w-auto justify-center">
              <Filter size={16} />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Search Container */}
      
      
      {/* Mentors Grid */}
      <div className="relative max-w-6xl mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-lg p-6 shadow-md text-black border border-gray-100 hover:border-gray-300 transition-all">
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-lg mr-4 flex-shrink-0 bg-black flex items-center justify-center text-white"
                >
                  <span className="text-xl font-bold">{mentor.name.charAt(0)}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <p className="text-gray-600 text-sm">{mentor.title}</p>
                </div>
                <div className="bg-black px-3 py-1 rounded-full text-sm font-bold text-white">
                  ${mentor.rate}/hr
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="text-black">★★★★★</div>
                <span className="ml-2 text-sm">
                  {mentor.rating} ({mentor.reviews} reviews)
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 px-3 py-1 rounded-full text-xs border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between text-gray-600 text-sm mt-4">
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