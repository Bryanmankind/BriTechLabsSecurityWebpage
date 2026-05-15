import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Activity, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden grid-pattern">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-blue/20 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-accent mb-8"
          >
            <Zap className="w-3 h-3 fill-current" />
            <span>Trusted by 4,000+ Enterprises & Protocols</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Raising the Standards <br />
            <span className="text-gradient">of Modern Security</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-white/60 mb-10 leading-relaxed"
          >
            BriTech Labs provides industry-leading smart contract audits, blockchain security, 
            and real-time 24/7 monitoring to protect your digital assets and user trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-brand-accent text-brand-bg font-bold px-8 py-4 rounded-full text-lg hover:glow-cyan transition-all flex items-center gap-2 group">
              Start Your Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass text-white font-medium px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all">
              Explore Skynet
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-20"
          >
            <Stat label="$400B+" subLabel="Assets Protected" />
            <Stat label="4,500+" subLabel="Audits Completed" />
            <Stat label="70,000+" subLabel="Critical Vulnerabilities Found" />
            <Stat label="1,200+" subLabel="Protocols Monitored" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, subLabel }: { label: string; subLabel: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-3xl font-bold text-white mb-1">{label}</span>
      <span className="text-xs uppercase tracking-widest text-white/40 font-semibold">{subLabel}</span>
    </div>
  );
}
