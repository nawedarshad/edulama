'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, Zap } from 'lucide-react';

const FloatingActions = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col space-y-4">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white border border-slate-100 text-slate-600 rounded-full flex items-center justify-center shadow-lg hover:bg-slate-50 transition-all active:scale-95"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/917903337982?text=Hello%20Edulama%2C%20I%20would%20like%20to%20get%201%3A1%20career%20guidance%20and%20clear%20my%20doubts."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <div className="absolute -top-12 right-0 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Talk to a Senior
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-slate-900 rotate-45" />
        </div>
        
        <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-200 border-4 border-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-700/20 to-transparent" />
          <MessageCircle className="w-8 h-8 text-white fill-white relative z-10" />
          
          {/* Notification Dot */}
          <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-ping" />
          <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full" />
        </div>
      </motion.a>
    </div>
  );
};

export default FloatingActions;
