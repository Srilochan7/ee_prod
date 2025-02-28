import React from 'react';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <div>
      <footer className="px-1 py-2 w-full bg-white">
        <div className="container flex flex-col sm:flex-row items-center justify-between mx-auto space-y-4 sm:space-y-0">
          {/* Left section for Logo */}
          <div className="flex items-center justify-center space-x-4">
  <div className="flex items-center justify-center flex-shrink-0">
    <img
      src={logo}
      alt="Logo"
      className="w-50 h-16 object-cover"  // Set the width and height to stretch horizontally
    />
  </div>
</div>


          {/* Right section for links */}
          <div className="flex justify-end w-full sm:w-auto">
            <ul className="flex space-x-2 sm:space-x-8">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Contact - srilochan.dev@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
