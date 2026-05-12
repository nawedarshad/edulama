import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import StudentProblems from '@/components/StudentProblems';
import Categories from '@/components/Categories';
import HowItWorks from '@/components/HowItWorks';
import Mentors from '@/components/Mentors';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      {/* Sections with consistent spacing and clear hierarchy */}
      <Hero />
      
      <div className="relative z-10">
        <TrustBar />
      </div>


      <StudentProblems />
      
      <div id="categories">
        <Categories />
      </div>

      <HowItWorks />

      <div id="mentors">
        <Mentors />
      </div>

      <div id="pricing">
        <Pricing />
      </div>

      <Testimonials />
      
      <FAQ />
      
      {/* High-Impact Final Conversion Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-900/10">
            {/* Professional Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]" />
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500 rounded-full blur-[120px]" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                  Your Dream Career is <br />
                  <span className="text-blue-500">Just One Call Away.</span>
                </h2>
                <p className="text-lg text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
                  Join 10,000+ students who have stopped guessing and started growing. 
                  Book your first session today.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <a 
                  href="https://wa.me/917903337982?text=Hello%20Edulama%2C%20I%20would%20like%20to%20get%201%3A1%20career%20guidance%20and%20clear%20my%20doubts."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 hover:scale-105 transition-all shadow-xl shadow-blue-900/20 active:scale-95 flex items-center justify-center"
                >
                  Get Started Now
                </a>
                <a 
                  href="https://wa.me/917903337982?text=Hello%20Edulama%2C%20I%20would%20like%20to%20get%201%3A1%20career%20guidance%20and%20clear%20my%20doubts."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-slate-700 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center"
                >
                  Message Support
                </a>
              </div>
              
              <div className="pt-8 flex flex-wrap justify-center gap-8 opacity-40">
                {['Verified Mentors', 'Safe Payments', '100% Confidential'].map((item) => (
                  <span key={item} className="text-[10px] text-white font-black uppercase tracking-[0.3em]">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
