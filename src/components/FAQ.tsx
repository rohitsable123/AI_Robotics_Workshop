import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "Do I need prior coding experience?",
      answer: "Absolutely not! This workshop starts from the absolute basics of block-based programming. If your child can drag and drop blocks, they can build robot logics. We progress slowly to introduce Python fundamentals.",
    },
    {
      question: "What hardware/materials are required?",
      answer: "All you need is a computer (Windows, Mac, or Chromebook) with a webcam, microphone, and a stable internet connection. All simulations are performed in browser-based tools, so there is no need to purchase expensive robotics hardware kits.",
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes! Every participant who submits their final capstone robot simulation receives an 'AI & Robotics Summer Explorer Certificate' as a high-quality PDF, ready to show off to school peers and teachers.",
    },
    {
      question: "What is the schedule and batch timing?",
      answer: "Classes are held 3 times a week (Monday, Wednesday, Friday) with multiple time slots to choose from (morning and evening). Timing slots will be shared with you to select your preferred batch once your enquiry is successfully registered.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-stone-50 border-t border-brand-purple-100/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-purple-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-24 bg-brand-pink-500 rounded-full mx-auto mb-4" />
          <p className="text-lg text-brand-purple-900/60 font-light">
            Got questions? We've got answers. Reach out to our support if you need anything else.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl bg-white transition-all duration-300 ${
                  isOpen 
                    ? 'border-brand-purple-300 shadow-md ring-1 ring-brand-purple-100' 
                    : 'border-brand-purple-100 shadow-sm hover:border-brand-purple-200'
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="font-display text-lg font-bold text-brand-purple-900 pr-4">
                    {faq.question}
                  </span>
                  <span className={`p-1 bg-brand-purple-50 rounded-lg text-brand-purple-600 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-purple-100' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-5 sm:p-6 pt-0 border-t border-brand-purple-50 text-brand-purple-900/70 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
