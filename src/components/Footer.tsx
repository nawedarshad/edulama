'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram as InstagramIcon, Linkedin as LinkedinIcon, Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <span className="text-white font-black text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Edulama.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Empowering students with direct guidance from industry seniors who have already achieved the success you're aiming for.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: InstagramIcon, href: '#', color: 'hover:text-pink-600' },
                { icon: LinkedinIcon, href: '#', color: 'hover:text-blue-700' },
                { icon: Mail, href: 'mailto:contact@edulama.com', color: 'hover:text-red-500' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className={`w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 ${social.color} transition-all hover:scale-110 hover:shadow-md shadow-sm`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><Link href="#mentors" className="hover:text-blue-600 transition-colors">Browse Mentors</Link></li>
              <li><Link href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</Link></li>
              <li><Link href="#categories" className="hover:text-blue-600 transition-colors">Help Categories</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <span>admin@edulama.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span>+91 79033 37982</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Kolkata, India</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-blue-600 transition-colors">Cookie Policy</Link></li>
              <li><Link href="/refund" className="hover:text-blue-600 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
            © 2026 Edulama. Built with ❤️ for students.
          </p>
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-400">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Operational in 10+ countries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
