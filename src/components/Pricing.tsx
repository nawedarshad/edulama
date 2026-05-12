'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, MessageSquare, PhoneCall, Star } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Get the guidance you <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">deserve.</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Start your journey with a personal 1:1 session at an unbeatable price.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="relative p-10 lg:p-14 rounded-[3.5rem] bg-white border-2 border-blue-600 shadow-2xl shadow-blue-100 ring-8 ring-blue-50 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full translate-x-10 -translate-y-10" />
            
            {/* Value Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full mb-8">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-[10px] font-black text-yellow-700 uppercase tracking-widest">Most Affordable 1:1 Guidance</span>
            </div>

            <h3 className="text-3xl font-black text-slate-900 mb-4">1:1 Mentorship Session</h3>
            <p className="text-slate-500 font-medium mb-10 max-w-sm mx-auto">
              Connect directly with a mentor to clear your doubts, get career roadmaps, or interview prep.
            </p>

            <div className="mb-12">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-4xl font-bold text-slate-900">₹</span>
                <span className="text-8xl font-black text-slate-900 tracking-tighter">19</span>
              </div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mt-2">Only for a limited time</p>
            </div>

            <div className="space-y-5 mb-12 text-left max-w-xs mx-auto">
              {[
                { icon: MessageSquare, text: 'Ask doubts via Chat' },
                { icon: PhoneCall, text: 'Direct 1:1 Call assistance' },
                { icon: Check, text: 'Personalized Career Roadmap' },
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/917903337982?text=Hello%20Edulama%2C%20I%20would%20like%20to%20get%201%3A1%20career%20guidance%20and%20clear%20my%20doubts."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-6 bg-blue-600 text-white font-black text-xl rounded-2xl hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-xl shadow-blue-200 active:scale-95 flex items-center justify-center space-x-3"
            >
              <span>Book Your Session Now</span>
              <Zap className="w-6 h-6 fill-white" />
            </a>

            <p className="mt-6 text-xs text-slate-400 font-medium">
              Join 10k+ students getting guided everyday
            </p>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
          {['Google', 'Microsoft', 'Amazon', 'PwC', 'Accenture'].map((company) => (
            <span key={company} className="text-sm font-black text-slate-400 uppercase tracking-widest">{company}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
