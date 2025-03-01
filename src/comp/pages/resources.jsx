import React, { useState } from 'react';

const Resources = () => {
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "How can I become a mentor?",
      answer: "You can become a mentor through a simple onboarding process where you provide details about your skills, experience, and expertise."
    },
    {
      id: 2,
      question: " How do we validate mentor prices?",
      answer: "We have three tiers of mentors, each with its own price range based on experience, expertise, and demand."
    },
    {
      id: 3,
      question: "How can I find the right mentor?",
      answer: "You can browse through all the available mentors and choose one based on their skills, experience, and reviews before booking an appointment."
    },
    {
      id: 4,
      question: "What are the key features of the platform?",
      answer: "The main features include mock interviews, resume reviews, personal tracking, doubt-solving, and project collaboration."
    },
    {
      id: 5,
      question: "How is this platform different from existing mentorship platforms?",
      answer: "This platform offers more features, a unique monetization model, and a structured approach to connecting students with mentors."
    },
    {
      id: 6,
      question: "How do mentors earn money on this platform?",
      answer: "Mentors can set their prices based on their tier, and they earn by conducting one-on-one sessions, workshops, and project collaborations."
    },
    {
      id: 7,
      question: "Is there a way to track my progress with a mentor?",
      answer: "Yes, the platform includes a personal tracking feature where students can monitor their learning journey, set goals, and receive feedback."
    },
    {
      id: 8,
      question: "Can I get a refund if I am not satisfied with a session?",
      answer: "The refund policy is structured to ensure fairness for both mentors and students. However, we are not revealing the full details at this stage."
    }
  ];

  // Toggle FAQ open/closed
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-6xl font-bold text-center mb-15">FAQs</h1>
      
      <div className="bg-gray-50 rounded-lg">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
            <button 
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${openFaq === faq.id ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openFaq === faq.id 
                  ? 'max-h-96 opacity-100 transform translate-y-0' 
                  : 'max-h-0 opacity-0 transform -translate-y-4'
              }`}
            >
              <div className="py-3 px-6 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;