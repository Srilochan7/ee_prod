import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .menu-animation {
            animation: slideDown 0.3s ease forwards;
          }
        `}
      </style>

      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-gray-900">ExpertEase</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('section1')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => scrollToSection('section5')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Features
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white menu-animation shadow-sm">
            <div className="container mx-auto">
              <div className="py-2">
                <button
                  onClick={() => scrollToSection('section1')}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  Join Waitlist
                </button>
                <button
                  onClick={() => scrollToSection('section2')}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  Features
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;