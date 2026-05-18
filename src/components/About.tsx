import { motion } from 'motion/react';
import { Shield, Target, Eye, Users, Zap, Lock, Code, Globe2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Value Secured", value: "$40B+" },
    { label: "Clients Protected", value: "1,200+" },
    { label: "Vulnerabilities Found", value: "35,000+" },
    { label: "Active Auditors", value: "150+" },
  ];

  const values = [
    {
      icon: Lock,
      title: "Uncompromising Security",
      description: "We hold ourselves to the highest standards, ensuring every line of code is rigorously tested against both known vectors and novel threats."
    },
    {
      icon: Eye,
      title: "Absolute Transparency",
      description: "Clear, actionable, and open reporting. We believe the path to a secure Web3 ecosystem involves transparency at every level."
    },
    {
      icon: Zap,
      title: "Pioneering Innovation",
      description: "Our R&D team constantly develops new formal verification techniques and AI-driven static analysis to stay ahead of malicious actors."
    },
    {
      icon: Users,
      title: "Collaborative Defense",
      description: "We work alongside developers to not just fix vulnerabilities, but to educate and empower teams to write more secure code."
    }
  ];

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative text-center max-w-4xl mx-auto space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Securing the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">
              Web3 Innovation
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            BriTech Labs is a pioneer in blockchain security, utilizing formal verification and 
            expert manual review to protect the decentralized world. We secure smart contracts, 
            blockchains, and Web3 applications.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center group hover:border-brand-accent/30 transition-colors"
            >
              <div className="text-3xl md:text-5xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/50 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-10 rounded-3xl border border-brand-accent/20 bg-brand-accent/5 backdrop-blur-sm"
        >
          <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-accent/20">
            <Target className="w-7 h-7 text-brand-accent" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-lg text-white/70 leading-relaxed">
            To raise the standard of security in the Web3 space by providing mathematically 
            proven security guarantees. We aim to protect users, developers, and ecosystems 
            from the escalating threats in decentralized networks.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
            <Globe2 className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-lg text-white/70 leading-relaxed">
            A decentralized world where users interact with smart contracts and protocols 
            with absolute confidence. We envision an ecosystem unhindered by fear of exploits, 
            driven purely by innovation and utility.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Core Values
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50"
          >
            The principles that guide our auditing processes, our company culture, and our commitment to the blockchain community.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                  <value.icon className="w-6 h-6 text-brand-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-20 px-8 text-center mt-10">
        <div className="absolute inset-0 bg-brand-accent/5" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <Shield className="w-16 h-16 text-brand-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white tracking-tight">Ready to secure your project?</h2>
          <p className="text-xl text-white/70">
            Partner with BriTech Labs to ensure your smart contracts are battle-tested and secure before deployment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-brand-accent text-brand-bg font-bold px-8 py-3.5 rounded-full hover:glow-cyan transition-all text-lg">
              Request an Audit
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all text-lg">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
