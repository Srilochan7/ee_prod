import React, { useState } from "react";

const NavigationBar = () => {
  const [selected, setSelected] = useState(null);

  const options = [
    "All",
    "Doubt Solving",
    "Project Collaboration",
    "Resume Review",
    "Interview prepration",
    'Career Guidance',
    "Free Sevices",
    "Placement Training",
    "Pitch Deck",
    
  ];

  return (
    <div className="bg-white w-full overflow-auto scrollbar-hide">
      <div className="flex items-center space-x-3 py-5 min-w-[1200px] w-full px-4">
        {/* Filters Button */}
        <button className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium flex items-center whitespace-nowrap">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Filters
        </button>

        {/* Sort Button */}
        <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 flex items-center whitespace-nowrap">
          Sort by
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Selectable Buttons */}
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelected(option)}
            className={`rounded-full px-4 py-2 text-5sm font-medium whitespace-nowrap transition-all duration-200
              ${
                selected === option
                  ? "bg-black text-white border border-black shadow-md"
                  : "border border-gray-300 text-gray-700"
              }
            `}
          >
            {option}
          </button>
        ))}
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default NavigationBar;
