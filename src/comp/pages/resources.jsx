import React, { useState } from 'react';

const Resources = () => {
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "What is a tutor pass?",
      answer: "A tutor pass is a subscription that gives you access to our qualified IB tutors at a fixed rate of $29/hour. Unlike traditional tutoring services, we don't charge per session but offer unlimited access within your subscription period."
    },
    {
      id: 2,
      question: "How is RevisionDojo tutoring different?",
      answer: "RevisionDojo offers a unique approach where we take 0% commission from tutors, allowing them to earn more while keeping costs low for students. We also provide specialized IB curriculum tutoring with verified elite tutors who have excelled in the IB program."
    },
    {
      id: 3,
      question: "How long is one session?",
      answer: "Each tutoring session is 55 minutes long, giving students comprehensive help while allowing tutors a short break between sessions. This format has proven most effective for maintaining student engagement and learning retention."
    },
    {
      id: 4,
      question: "How can I book my free trial session?",
      answer: "You can book your free 30-minute trial session by clicking the 'Find my tutor' button on our homepage, selecting a subject, and choosing a convenient time slot. No payment information is required for the trial."
    },
    {
      id: 5,
      question: "What is the price of one session?",
      answer: "Individual sessions cost $29/hour with our subscription model. We also offer package discounts for students who commit to regular tutoring sessions."
    },
    {
      id: 6,
      question: "What subjects do you offer?",
      answer: "We offer tutoring across all IB subjects including Mathematics (AA/AI), Sciences (Biology, Chemistry, Physics), Languages (English, Spanish, French), Humanities (History, Geography, Economics), and specialized support for TOK and Extended Essay."
    },
    {
      id: 7,
      question: "How does flexible tutoring work?",
      answer: "Our flexible tutoring allows you to schedule sessions at times that work for you. You can book, reschedule, or cancel sessions through our platform with a simple calendar interface. Sessions can be conducted online via our integrated video platform."
    },
    {
      id: 8,
      question: "What happens if I need to cancel or re-schedule a session?",
      answer: "You can cancel or reschedule any session up to 24 hours before the scheduled time at no cost. Cancellations with less than 24 hours' notice may incur a fee of 50% of the session cost. Emergency situations are handled on a case-by-case basis."
    }
  ];

  // Toggle FAQ open/closed
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-12">FAQs</h1>
      
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