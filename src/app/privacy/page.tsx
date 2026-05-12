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

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      content={
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">1. Introduction</h2>
            <p>
              Welcome to Edulama. We value your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website 
              and use our mentorship services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you contact us via WhatsApp, 
              book a session, or subscribe to our newsletter. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Name and contact details (WhatsApp number, email)</li>
              <li>Academic and professional background</li>
              <li>Payment confirmation (screenshots)</li>
              <li>Feedback and communication records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">3. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide and manage mentorship sessions</li>
              <li>Process payments and verify screenshots</li>
              <li>Communicate with you regarding your sessions</li>
              <li>Improve our services and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against 
              unauthorized access, loss, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at admin@edulama.com.
            </p>
          </section>
        </div>
      }
    />
  );
}
