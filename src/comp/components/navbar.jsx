import React, { useState, useEffect} from 'react';
import { ChevronDown } from 'lucide-react';
import Features from '../pages/features'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (elementId) => {
    setIsMenuOpen(false); // Close menu first
    
    // Use setTimeout to ensure DOM is ready and menu closes first
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        // Calculate position with offset for fixed navbar
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        // Scroll to the element
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id "${elementId}" not found`);
      }
    }, 200);
  };
  
  // Close mobile menu when window resizes to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
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

      <div className="container mx-auto px-4 py-3 flex items-center justify-center space-x-18">
        {/* Logo */}
        <div className="flex items-center">
        <div className="w-13 h-13">
  <img src="/f.png" alt="icon" className="w-full h-full" />
</div>

          <div className="text-black-600 text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold tracking-tight">ExpertEase</div>
        </div>

        {/* Desktop Navigation */} 
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center text-gray-800 hover:text-black" onClick={() => scrollToSection('features')}>
              Features
              
            </button>
          </div>
          
          <div className="relative group">
            <button className="flex items-center text-gray-800 hover:text-black" onClick={() => scrollToSection('mission')}>
              Mission
              {/* <ChevronDown className="ml-1 w-4 h-4" /> */}
            </button>
          </div>
          
          <button className="text-gray-800 hover:text-black" onClick={() => scrollToSection('about')}>
            About
          </button>
          
          <button className="text-gray-800 hover:text-black" onClick={() => scrollToSection('faqs')}>
            FAQs
          </button>
          {/* </div> */}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="text-gray-600 hover:text-gray-800 px-3 py-2">
            Login
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-150">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-3 px-4 border-t border-gray-100">
          <div className="flex flex-col space-y-3">
            <button className="text-gray-800 py-2">
              Features
          
            </button>
            <button className=" text-gray-800 py-2">
          Mission
            </button>
            <button className="text-gray-800 py-2">
              About
            </button>
            <button className="text-gray-800 py-2">
              FAQs
            </button>
            {/* <button className="flex items-center justify-between text-gray-800 py-2">
              Resources
              <ChevronDown className="w-4 h-4" />
            </button> */}
            <div className="flex flex-col pt-3 border-t border-gray-100">
              <button className="text-gray-600 py-2">
                Login
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-2">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;