'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, MessageSquare, ArrowRight } from 'lucide-react';

const mentors = [
  {
    name: 'Simran Tekriwal',
    role: 'GDS - Analyst',
    company: 'EY',
    image: '/mentors/mentor1.jpg',
    achievement: '3 Research papers published',
    rating: '5.0',
  },
  {
    name: 'Bidita Bhattacharya',
    role: 'Android Developer',
    company: 'EY',
    image: '/mentors/mentor2.jpg',
    achievement: 'Managed 5M+ active users',
    rating: '4.9',
  },
  {
    name: 'Kirti Patel',
    role: 'SDE 2',
    company: 'Unext',
    image: '/mentors/mentor3.jpg',
    achievement: 'Mentored 100+ students',
    rating: '5.0',
  },
  {
    name: 'Priyanshu Kumar',
    role: 'Software Engineer',
    company: 'Adobe',
    image: '/mentors/mentor4.jpg',
    achievement: 'Ex-Goldman Sachs Intern',
    rating: '5.0',
  },
  {
    name: 'Rahul Kumar',
    role: 'SDE',
    company: 'PwC',
    image: '/mentors/mentor5.jpg',
    achievement: 'Cracked PwC in 3rd year',
    rating: '4.9',
  },
  {
    name: 'Pallavi Kumari',
    role: 'Backend Dev',
    company: 'Accenture',
    image: '/mentors/mentor6.jpg',
    achievement: 'Mentored 50+ students',
    rating: '4.9',
  },
  {
    name: 'Nawed Arshad',
    role: 'SDE',
    company: 'Anthropic',
    image: '/mentors/mentor7.jpg',
    achievement: 'Ex-McKinsey Intern',
    rating: '4.8',
  },
  {
    name: 'Gaurav Kumar',
    role: 'Competitive Coder',
    company: 'TIU',
    image: '/mentors/mentor8.jpg',
    achievement: 'Solved 1500+ problems',
    rating: '5.0',
  },
];

const Mentors = () => {
  return (
    <section id="mentors" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Talk to those who <span className="text-blue-600">cracked it</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Direct guidance from industry experts who have already achieved what you are aiming for.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-4 md:p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group text-center"
            >
              <div className="relative mb-4 md:mb-6 mx-auto w-fit">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden ring-4 ring-slate-50 shadow-inner">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-xl p-1.5 border-4 border-white shadow-lg">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm md:text-lg font-black text-slate-900 leading-tight">{mentor.name}</h3>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {mentor.role} @ <span className="text-slate-900">{mentor.company}</span>
                </p>
                <div className="flex items-center justify-center space-x-1 py-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-black text-slate-700">{mentor.rating}</span>
                </div>
                <div className="hidden md:block pt-2 border-t border-slate-50">
                   <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest leading-tight">
                    🏆 {mentor.achievement}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Universal Action Button */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://wa.me/917903337982?text=Hello%20Edulama%2C%20I%20would%20like%20to%20get%201%3A1%20career%20guidance%20and%20clear%20my%20doubts."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-slate-900 text-white font-black text-xl rounded-2xl hover:bg-blue-600 hover:scale-105 transition-all shadow-2xl shadow-slate-200 active:scale-95"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Talk to Any Senior Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Company Trust Section */}
        <div className="mt-24 pt-12 border-t border-slate-200 text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">Mentors work & study at</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['IIT Delhi', 'NSIT', 'Google', 'Microsoft', 'Amazon', 'Zomato', 'EY', 'Adobe'].map((name) => (
              <span key={name} className="text-lg md:text-2xl font-black text-slate-900 tracking-tighter">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
