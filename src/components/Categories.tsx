'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Code, 
  UserCheck, 
  School, 
  Globe, 
  Map, 
  ArrowUpRight, 
  ArrowRight
} from 'lucide-react';

const categories = [
  {
    title: 'Placement Guidance',
    description: 'Resume reviews, mock interviews, and personalized placement roadmaps.',
    icon: Briefcase,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'group-hover:border-blue-200',
  },
  {
    title: 'Coding Help',
    description: 'Master Web Dev, DSA, AI, and build real-world portfolio projects.',
    icon: Code,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'group-hover:border-purple-200',
  },
  {
    title: 'Internship Help',
    description: 'Application strategies and preparation for top-tier internships.',
    icon: UserCheck,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'group-hover:border-green-200',
  },
  {
    title: 'College Guidance',
    description: 'Navigate branches, essential skills, and your academic roadmap.',
    icon: School,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'group-hover:border-orange-200',
  },
  {
    title: 'Freelancing',
    description: 'Learn how to land remote work and manage international clients.',
    icon: Globe,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'group-hover:border-pink-200',
  },
  {
    title: 'Study Roadmaps',
    description: 'Clear, step-by-step paths on what to learn and when to learn it.',
    icon: Map,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'group-hover:border-cyan-200',
  },
];

const Categories = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left max-w-3xl mb-16 mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
              What do you need <span className="text-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">help</span> with?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Select a category to explore specialized guidance tailored to your specific career goals and challenges.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-8 rounded-[2.5rem] bg-white border border-slate-100 ${category.borderColor} transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                <category.icon className="w-24 h-24" />
              </div>
              
              <div className="flex flex-col h-full space-y-8 relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-current/10`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center justify-between">
                    {category.title}
                    <ArrowUpRight className="w-5 h-5 text-slate-300 transition-all duration-500 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center text-sm font-bold text-blue-600 opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  <span>Get Guidance</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
