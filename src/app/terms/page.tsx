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

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      content={
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Edulama, you agree to comply with and be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">2. Mentorship Sessions</h2>
            <p>
              Our services include 1:1 mentorship sessions. Sessions are booked via WhatsApp and are subject to 
              mentor availability. We reserve the right to reschedule sessions if necessary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">3. Payment & Verification</h2>
            <p>
              Payment for sessions must be made in advance. You are required to send a screenshot of the payment 
              on WhatsApp to confirm your booking. Failure to provide a valid screenshot may result in cancellation 
              of the session.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">4. Code of Conduct</h2>
            <p>
              Users are expected to maintain professional behavior during mentorship sessions. Harassment or inappropriate 
              behavior towards mentors will result in an immediate ban from the platform without refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">5. Limitation of Liability</h2>
            <p>
              Edulama provides guidance and advice. We do not guarantee specific career outcomes, 
              job placements, or academic results.
            </p>
          </section>
        </div>
      }
    />
  );
}
