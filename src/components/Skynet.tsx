import { motion } from 'motion/react';
import { Activity, Bell, Zap, Shield, Search, Terminal } from 'lucide-react';

export default function Skynet() {
  return (
    <section className="py-24 bg-[#08090C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Content */}
          <div className="relative">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-brand-accent font-bold text-sm uppercase tracking-widest mb-6">
                <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span>Skynet Monitoring</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                24/7 On-Chain Security <br />
                <span className="text-brand-blue">Active Protection</span>
              </h2>
              <p className="text-lg text-white/50 mb-10">
                Don't wait for disaster. Skynet provides real-time security alerts, 
                social sentiment analysis, and on-chain threat detection for thousands of protocols.
              </p>

              <div className="space-y-6">
                <FeatureItem 
                  icon={Bell} 
                  title="Flash Loan Detection" 
                  desc="Instant alerts on suspicious high-volume on-chain movements." 
                />
                 <FeatureItem 
                  icon={Shield} 
                  title="Asset Decoupling Alerts" 
                  desc="Critical warnings for bridge and stablecoin peg variances." 
                />
                 <FeatureItem 
                  icon={Search} 
                  title="Governance Monitoring" 
                  desc="Tracking suspicious governance proposals and voting spikes." 
                />
              </div>
            </motion.div>
          </div>

          {/* Visual/Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
           {/* Mockup Frame */}
           <div className="glass rounded-3xl p-6 border-white/10 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-brand-accent" />
                  <span className="text-xs font-mono text-white/40 uppercase">skynet.dashboard.v2</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-brand-accent/50" />
                </div>
              </div>

              {/* Data rows */}
              <div className="space-y-4">
                <DashboardRow label="System Status" value="Healthy" color="text-brand-accent" />
                <DashboardRow label="Protocols Scanned" value="12,504" />
                <DashboardRow label="Incidents Blocked" value="458" />
                
                <div className="pt-6 mt-6 border-t border-white/10">
                   <div className="text-[10px] uppercase font-bold text-white/40 mb-4">Traffic Analysis</div>
                   <div className="flex items-end gap-2 h-32">
                      {[40, 70, 45, 90, 65, 80, 55, 95, 40, 60, 85, 75].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: i * 0.05, duration: 1 }}
                          className={`flex-1 rounded-sm ${i === 7 ? 'bg-brand-accent' : 'bg-brand-blue/30'}`}
                        />
                      ))}
                   </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent pointer-events-none" />
           </div>

           {/* Floating elements */}
           <div className="absolute -top-10 -right-10 glass p-4 rounded-2xl border-brand-accent/20 animate-bounce cursor-default">
              <Zap className="w-6 h-6 text-brand-accent" />
           </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-brand-accent">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-sm text-white/40">{desc}</p>
      </div>
    </div>
  );
}

function DashboardRow({ label, value, color = "text-white" }: { label: string, value: string, color?: string }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-xs text-white/40 font-mono italic">{label}</span>
      <span className={`text-sm font-bold font-mono ${color}`}>{value}</span>
    </div>
  );
}
