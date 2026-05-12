'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, HelpCircle, FileX, GraduationCap, Compass } from 'lucide-react';

const problems = [
  {
    text: 'Confused about career path?',
    icon: Compass,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    text: 'Don’t know what to learn?',
    icon: HelpCircle,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    text: 'Resume getting rejected?',
    icon: FileX,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    text: 'Need internship guidance?',
    icon: GraduationCap,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    text: 'Unsure about placements?',
    icon: AlertCircle,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
];

const StudentProblems = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              Does this sound like <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">you?</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              You're not alone. Thousands of students face these exact challenges every day.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-default group"
            >
              <div className={`w-10 h-10 ${problem.bgColor} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                <problem.icon className={`w-5 h-5 ${problem.color}`} />
              </div>
              <span className="text-base font-bold text-slate-800">{problem.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200 max-w-2xl">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">We've helped 10k+ students solve these.</h3>
            <p className="text-blue-100 text-sm lg:text-base mb-6 font-medium leading-relaxed">
              Our mentors have been exactly where you are. They know the shortcuts, the pitfalls, 
              and the exact steps to get you from confusion to clarity.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-black rounded-xl hover:scale-105 transition-all shadow-lg">
              Get Your Roadmap Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentProblems;
