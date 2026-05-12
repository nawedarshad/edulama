'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Camera, HelpCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Message on WhatsApp',
    description: 'Send us a message on WhatsApp to start your 1:1 mentorship journey instantly.',
    icon: MessageCircle,
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    title: 'Pay & Send Screenshot',
    description: 'Pay the minimal fee (₹19) and send the payment screenshot on WhatsApp to confirm.',
    icon: Camera,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Ask Doubts',
    description: 'Get connected with your mentor and ask all your career, coding, or placement doubts.',
    icon: HelpCircle,
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Simple 3-Step <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-slate-500 font-medium">Getting professional guidance has never been this easy.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-[2px] bg-slate-100 -z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 text-center space-y-6 group"
            >
              <div className={`w-28 h-28 ${step.color} rounded-[2rem] mx-auto flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm border-4 border-white`}>
                <step.icon className={`w-12 h-12 ${step.iconColor}`} />
              </div>
              
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-black mb-2">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-[280px] mx-auto font-medium">
                  {step.description}
                </p>
              </div>

              {index < 2 && (
                <div className="md:hidden flex justify-center py-4">
                  <ArrowRight className="w-6 h-6 text-slate-200 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://wa.me/917903337982"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-green-600 text-white font-black text-lg rounded-2xl hover:bg-green-500 hover:scale-105 transition-all shadow-xl shadow-green-100 flex items-center justify-center space-x-3 mx-auto w-fit"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            <span>Message on WhatsApp now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
