import React, { useState } from 'react';
import {
  GraduationCap,
  Brain,
  Trophy,
  Layout,
  PenTool,
  Code,
  
} from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import { div } from 'framer-motion/client';

const Hero = () => {

  const navigate = useNavigate();
  

  return (
    <div>
    <Navbar />
    <section id="section1" className="mt-12 min-h-screen bg-white">

      <div className="mb-12 bg-gray-500 ">
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
          {/* Grid Pattern - More responsive */}
          <div className="absolute inset-0 w-full h-full bg-white">
  <div className="absolute w-full h-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] opacity-50"></div>
</div>


          {/* Floating Elements - Better mobile optimization */}
          <div className="absolute top-[40px] inset-0 overflow-hidden">
            {/* Academic/Learning Elements */}
            <div className="absolute top-8 left-2 sm:top-10 sm:left-4 md:top-20 md:left-10 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center animate-float">
              <GraduationCap className="w-5 h-5 sm:w-5 sm:h-5 md:w-8 md:h-8 text-blue-600" />
            </div>
            <div className="absolute top-20 left-1/16 sm:top-30 md:top-50 md:left-1/7 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center animate-float-delayed">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-green-600" />
            </div>
            <div className="hidden sm:flex absolute bottom-24 left-12 sm:bottom-32 sm:left-20 w-10 h-10 sm:w-14 sm:h-14 bg-yellow-100 rounded-lg items-center justify-center animate-float">
              <Trophy className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-600" />
            </div>

            {/* Tech/Development Elements */}
            <div className="absolute top-[40px] right-2 sm:top-12 sm:right-4 md:top-24 md:right-16 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-purple-100 rounded-lg flex items-center justify-center animate-float-delayed">
              <Layout className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-purple-600" />
            </div>
            <div className="absolute top-24 right-1/16 sm:top-80 md:top-100 md:right-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-indigo-100 rounded-lg flex items-center justify-center animate-float">
              <Code className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-indigo-600" />
            </div>
            <div className="hidden sm:flex absolute bottom-32 right-12 sm:bottom-40 sm:right-20 w-10 h-10 sm:w-14 sm:h-14 bg-red-100 rounded-lg items-center justify-center animate-float-delayed">
              <PenTool className="w-5 h-5 sm:w-7 sm:h-7 text-red-600" />
            </div>

            {/* Center Elements */}
            <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-6 sm:gap-10 md:gap-20">
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-blue-900/5 rounded-full blur-xl"></div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-purple-900/5 rounded-full blur-xl"></div>
            </div>
          </div>

         
            

          {/* Main Content */}
          <div className="container top-[70px] mx-auto px-4 md:px-6 pt-8 sm:pt-12 md:pt-12 pb-12 sm:pb-16 md:pb-32 relative">
            <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-gray-900">

                Expert Mentorship
                <br />
                <span className="relative inline-block">
                  That Delivers Results
                  <div className="absolute bottom-0.5 sm:bottom-1 md:bottom-2 left-0 w-full h-0.5 sm:h-1 md:h-2"></div>
                  <svg className='ml-7 -mt-1 w-[300px] h-7 md:w-[800px]' viewBox="0 0 500 50" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10 Q10 5, 100 10 T20 30 T300 19 T300 30 T600 49"
                      stroke="yellow" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </h1>

              {/* New Element: Subheading */}
              <p className="text-xl md:text-2xl text-gray-600 mt-8 mb-8">
                Practice questions, AI feedback, and notes to make
                <br /> exam prep stress-free.
              </p>

              {/* New Element: CTA Button */}
              {/* <button className="px-8 py-4 bg-blue-500 text-white text-lg font-medium rounded-full shadow-lg hover:bg-blue-600 transition-colors">
                Start studying — It's free
              </button> */}
              <button
            type="submit"
            onClick={() => navigate('/home')}
            className="relative inline-flex overflow-hidden rounded-full bg-white px-6 sm:px-8 py-2.5 sm:py-3 
              text-sm sm:text-base font-medium text-black shadow-lg 
              transition-all duration-300 ease-in-out
              hover:text-white
              disabled:opacity-50 disabled:cursor-not-allowed
              before:absolute before:inset-0 
              before:z-0 before:translate-x-[-100%] before:bg-gray-900
              before:transition-transform before:duration-300 before:ease-in-out
              hover:before:translate-x-0 text-center justify-center border-2"
          >
            <span className="relative z-10 text-xl">Start your journey</span>
          </button>


              {/* Waitlist Section */}
              <div className="max-w-2xl mx-auto mt-8 sm:mt-12 md:mt-15">
                
              </div>
            </div>
          </div>

          {/* New Element: Performance Indicator */}
          

          {/* New Element: Decorative Background Elements */}
          
          
      </div>
    </section>
    </div>
  );
};

export default Hero;