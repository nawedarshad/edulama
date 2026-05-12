'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Mentors', href: '#mentors' },
    { name: 'Categories', href: '#categories' },
    { name: 'FAQ', href: '#faq' },
    { name: 'ERP', href: 'https://erp.edulama.com', isExternal: true },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
              <span className="text-white font-black text-xl">E</span>
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">Edulama<span className="text-blue-600">.</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                target={item.isExternal ? '_blank' : '_self'}
                rel={item.isExternal ? 'noopener noreferrer' : ''}
                className={`text-sm font-semibold transition-colors ${
                  item.isExternal 
                    ? 'text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/917903337982"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center space-x-2"
            >
              <span>Get Started</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  target={item.isExternal ? '_blank' : '_self'}
                  rel={item.isExternal ? 'noopener noreferrer' : ''}
                  className="block text-lg font-bold text-slate-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  {item.isExternal && <span className="ml-2 text-xs text-blue-600 font-normal uppercase tracking-widest">Portal</span>}
                </a>
              ))}
              <div className="pt-4 space-y-4">
                <a 
                  href="https://wa.me/917903337982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
