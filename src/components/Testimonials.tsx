'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MessageSquare, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Got my resume reviewed by Aman. Applied to 3 companies and got interviews for 2! Highly recommended.",
    author: "Rohan S.",
    role: "B.Tech Student",
    platform: "WhatsApp",
    rating: 5
  },
  {
    text: "Was very confused about my career path after 12th. The mentor roadmap literally saved my 1 year. Thank you Edulama!",
    author: "Sneha P.",
    role: "Freshman",
    platform: "Direct Message",
    rating: 5
  },
  {
    text: "The placement guidance is gold. The mock interviews were tougher than the actual ones. Cracked my dream company!",
    author: "Amit K.",
    role: "Ex-Intern @ Microsoft",
    platform: "LinkedIn",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Real results from <span className="text-blue-600">real students</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Don't just take our word for it. Here's what students are saying.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1 text-yellow-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-50">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
                
                <p className="text-slate-700 font-medium italic leading-relaxed relative">
                  <Quote className="w-8 h-8 text-blue-100 absolute -top-4 -left-4 -z-0" />
                  <span className="relative z-10">"{item.text}"</span>
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/50 flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.author[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.author}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Preview Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-3xl bg-green-50 border border-green-100 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-bold text-green-800">Direct feedback on WhatsApp</span>
          </div>
          <div className="h-4 w-[1px] bg-green-200 hidden sm:block" />
          <div className="flex items-center -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-green-50 bg-green-100" />
            ))}
            <span className="ml-4 text-xs font-bold text-green-700">500+ unedited reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
