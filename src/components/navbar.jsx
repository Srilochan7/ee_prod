import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">ExpertEase</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('section1')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Join Waitlist
              </button>
              <button
                onClick={() => scrollToSection('section2')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Features
              </button>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;