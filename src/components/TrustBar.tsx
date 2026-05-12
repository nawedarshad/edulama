'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Verified Mentors', value: '500+' },
  { label: 'Students Helped', value: '10k+' },
  { label: 'Top Companies', value: '50+' },
  { label: 'Avg. Rating', value: '4.9/5' },
];

const TrustBar = () => {
  return (
    <div className="bg-slate-50/50 border-y border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
