'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, GraduationCap, HelpCircle, ArrowRight, CheckCircle2, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-black text-blue-700 uppercase tracking-widest">Trusted by 10,000+ Students</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Talk to seniors who <br />
                <span className="text-blue-600 relative inline-block">
                  achieved
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-100 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span> what you want.
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
                Get direct guidance on coding, placements, internships, and career confusion from mentors who have been in your shoes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a 
                href="https://wa.me/917903337982"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-100 flex items-center justify-center space-x-2 group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Talk to a Mentor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/917903337982"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center space-x-2"
              >
                <HelpCircle className="w-5 h-5 text-slate-400" />
                <span>Ask a Doubt</span>
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-8 border-t border-slate-50">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="student" />
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  ))}
                  <span className="text-sm font-bold text-slate-900 ml-2">4.9/5</span>
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Top rated by seniors</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Professional Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-slate-900 group">
              <img 
                src="/hero-dsa.png" 
                alt="1:1 Interview Mentorship Session" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Trust Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center space-x-3 z-20"
            >
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900 leading-none">Verified Mentors</p>
                <p className="text-[10px] text-slate-500 font-bold mt-1">From Google, IIT & more</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-50 space-y-3 z-20 hidden sm:block"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-900 leading-none">10k+</p>
                  <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-widest">Sessions</p>
                </div>
              </div>
              <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="h-full bg-blue-600 rounded-full"
                />
              </div>
            </motion.div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-100 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-slate-50 rounded-full -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
