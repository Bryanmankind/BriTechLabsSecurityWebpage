/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Leaderboard from './components/Leaderboard';
import Services from './components/Services';
import Skynet from './components/Skynet';
import Footer from './components/Footer';
import SmartContractAudit from './components/SmartContractAudit';
import SmartContractDev from './components/SmartContractDev';
import DeFiArchitecture from './components/DeFiArchitecture';
import RequestAuditModal from './components/RequestAuditModal';

function Home() {
  return (
    <>
      <Hero />
      <Leaderboard />
      <Services />
      <Skynet />
      
      {/* Call to Action Section */}
      <section className="py-24 relative overflow-hidden bg-brand-accent mt-20">
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
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-brand-bg font-sans">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/audit" element={<SmartContractAudit />} />
          <Route path="/contractDev" element={<SmartContractDev />} />
          <Route path="/architecture" element={<DeFiArchitecture />} />
          <Route path="/requestModal" element={<RequestAuditModal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

