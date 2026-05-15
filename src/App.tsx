/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Leaderboard from './components/Leaderboard';
import Services from './components/Services';
import Skynet from './components/Skynet';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <Leaderboard />
        <Services />
        <Skynet />
        
        {/* Call to Action Section */}
        <section className="py-24 relative overflow-hidden bg-brand-accent">
          <div className="absolute top-0 right-0 p-10 opacity-10">
             <div className="w-96 h-96 border-8 border-brand-bg rounded-full" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-brand-bg">
                <h2 className="text-5xl font-bold mb-4">Secure your protocol today.</h2>
                <p className="text-lg font-medium opacity-80">Join the thousands of projects building with BriTech Labs.</p>
              </div>
              <button className="whitespace-nowrap px-10 py-5 bg-brand-bg text-brand-accent font-bold text-xl rounded-full hover:scale-105 transition-transform">
                Request an Audit
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

