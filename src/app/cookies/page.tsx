'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const LegalPage = ({ title, content }: { title: string; content: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight">
              {title}
            </h1>
            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
              {content}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      content={
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">1. What are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely 
              used to make websites work more efficiently and provide a better browsing experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">2. How We Use Cookies</h2>
            <p>
              Edulama uses cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Understand how you interact with our website</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze website performance and traffic</li>
              <li>Provide a more personalized experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">3. Types of Cookies We Use</h2>
            <p>
              We use both session cookies (which expire when you close your browser) and persistent cookies 
              (which stay on your device until you delete them).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">4. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Please note that disabling 
              certain cookies may affect the functionality of our website.
            </p>
          </section>
        </div>
      }
    />
  );
}
