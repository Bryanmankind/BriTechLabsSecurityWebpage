import { motion } from 'motion/react';
import { Code, ShieldQuestion, Fingerprint, Lock, Cpu, Database, Activity, ChevronRight } from 'lucide-react';

const SERVICES = [
  {
    title: 'Smart Contract Audit',
    desc: 'Expert manual and automated security review of your smart contracts to prevent exploits.',
    icon: Code,
    color: 'accent'
  },
  {
    title: 'Penetration Testing',
    desc: 'Full-spectrum vulnerability assessment for your dApp, API, and web infrastructure.',
    icon: ShieldQuestion,
    color: 'blue'
  },
  {
    title: 'Skynet Monitoring',
    desc: '24/7 real-time on-chain security monitoring with instant incident alerts.',
    icon: Activity,
    color: 'accent'
  },
  {
    title: 'Verified KYC',
    desc: 'Comprehensive developer identity verification to build user trust and compliance.',
    icon: Fingerprint,
    color: 'blue'
  },
  {
    title: 'Cloud Security',
    desc: 'Bespoke infrastructure hardening for enterprise web3 operations.',
    icon: Database,
    color: 'accent'
  },
  {
    title: 'Wallet Security',
    desc: 'Secure custody solutions and multi-sig policy audit services.',
    icon: Lock,
    color: 'blue'
  }
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 px-4">Securing the Future <br /> of Web3 & AI</h2>
          <p className="text-white/60 max-w-2xl mx-auto px-4">
            Comprehensive security solutions tailored to every stage of your project's lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-brand-card border border-white/5 hover:border-brand-accent/30 transition-all cursor-pointer relative overflow-hidden"
            >
               {/* Background Glow */}
               <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/20 transition-all" />

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all ${
                s.color === 'accent' ? 'bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-bg' : 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white'
              }`}>
                <s.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed translate-y-0 group-hover:-translate-y-1 transition-transform">
                {s.desc}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="uppercase tracking-widest text-brand-accent">Learn More</span>
                <ChevronRight className="w-3 h-3 text-brand-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

