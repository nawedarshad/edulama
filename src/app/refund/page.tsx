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

export default function RefundPolicy() {
  return (
    <LegalPage
      title="Refund Policy"
      content={
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">1. General Policy</h2>
            <p>
              At Edulama, we strive to provide high-quality mentorship. Given the nature of our 1:1 sessions, 
              we have a specific policy regarding refunds to ensure fairness to both students and mentors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">2. Cancellation & Rescheduling</h2>
            <p>
              If you need to cancel or reschedule a session, please notify us via WhatsApp at least 24 hours in advance. 
              Sessions canceled with less than 24 hours' notice may not be eligible for a refund or rescheduling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">3. Refund Eligibility</h2>
            <p>
              Refunds are considered under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>The mentor fails to show up for the session without prior notice.</li>
              <li>Technical issues on our end prevent the session from occurring.</li>
              <li>A session is canceled by us and cannot be rescheduled.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">4. Non-Refundable Items</h2>
            <p>
              Payments are non-refundable if:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>You miss a scheduled session without prior notice.</li>
              <li>You are dissatisfied with the mentor's advice (as guidance is subjective).</li>
              <li>The session has already been completed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">5. Processing Refunds</h2>
            <p>
              Approved refunds will be processed within 5-7 business days via the original payment method.
            </p>
          </section>
        </div>
      }
    />
  );
}
