import { motion } from 'motion/react';
import { ChevronRight, Network, PieChart, Activity, Layers, ArrowUpRight, ShieldCheck, Database } from 'lucide-react';
import { useState } from 'react';
import RequestAuditModal from './RequestAuditModal';

export default function DefiArchitecture() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 z-10 relative">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-6xl font-semibold tracking-tight text-white mb-4 leading-tight"
            >
              DeFi Architecture
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 leading-relaxed max-w-xl"
            >
              Design and architect scalable, secure, and innovative Decentralized Finance protocols. From sustainable tokenomics models to complex AMMs and lending markets.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-4"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-brand-accent hover:glow-cyan text-brand-bg font-bold px-8 py-3.5 rounded-full transition-all text-lg inline-flex items-center gap-2"
              >
                Design Protocol <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Right Floating Elements Mockup */}
        <div className="relative h-[400px] lg:h-[500px] hidden md:block perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center transform-gpu preserve-3d">
            
            {/* Top Back Card (Tokenomics) */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: -20, rotateX: 10, rotateY: -15, rotateZ: 5 }}
              animate={{ opacity: 1, x: 30, y: -50, rotateX: 15, rotateY: -20, rotateZ: 5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute w-80 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden"
              style={{ zIndex: 10 }}
            >
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
                <PieChart className="w-4 h-4 text-brand-accent" />
                <span className="text-xs font-bold text-gray-900 uppercase">Token Distribution</span>
              </div>
              <div className="p-4 space-y-4">
                {[
                  { label: "Community & Rewards", percent: 45, color: "bg-brand-accent" },
                  { label: "Treasury", percent: 25, color: "bg-blue-500" },
                  { label: "Core Contributors", percent: 20, color: "bg-purple-500" },
                  { label: "Investors", percent: 10, color: "bg-gray-400" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs text-gray-600 mb-1 font-medium">
                      <span>{item.label}</span>
                      <span>{item.percent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Middle Main Card (Protocol Dashboard) */}
            <motion.div 
              initial={{ opacity: 0, x: 0, y: 50, rotateX: 15, rotateY: -15, rotateZ: 0 }}
              animate={{ opacity: 1, x: -20, y: 0, rotateX: 20, rotateY: -25, rotateZ: 2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute w-96 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden"
              style={{ zIndex: 20 }}
            >
               <div className="p-4 bg-gray-50 flex items-center gap-2 border-b border-gray-100">
                 <Activity className="w-5 h-5 text-brand-accent" />
                 <span className="text-sm font-bold text-gray-900 uppercase">Protocol Analytics</span>
               </div>
               <div className="p-5 space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                     <div className="text-[10px] text-gray-500 uppercase font-semibold mb-1">Total Value Locked</div>
                     <div className="text-xl font-bold text-gray-900">$124.5M</div>
                     <div className="text-xs text-green-500 flex items-center mt-1"><ArrowUpRight className="w-3 h-3 mr-0.5"/> 12.4%</div>
                   </div>
                   <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                     <div className="text-[10px] text-gray-500 uppercase font-semibold mb-1">24h Volume</div>
                     <div className="text-xl font-bold text-gray-900">$18.2M</div>
                     <div className="text-xs text-green-500 flex items-center mt-1"><ArrowUpRight className="w-3 h-3 mr-0.5"/> 5.2%</div>
                   </div>
                 </div>
                 
                 {/* Mock Chart Area */}
                 <div className="h-24 w-full flex items-end gap-1.5 px-2">
                   {[40, 60, 45, 75, 55, 80, 65, 90, 85, 100, 95, 110].map((h, i) => (
                     <div key={i} className="flex-1 bg-gradient-to-t from-brand-accent/20 to-brand-accent rounded-t-sm transition-all hover:opacity-100" style={{ height: `${h}%`, opacity: 0.6 + (i * 0.03) }} />
                   ))}
                 </div>
               </div>
            </motion.div>

            {/* Bottom Front Card (Liquidity Pools) */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 100, rotateX: 20, rotateY: -10, rotateZ: -5 }}
              animate={{ opacity: 1, x: 60, y: 60, rotateX: 10, rotateY: -15, rotateZ: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute w-[350px] bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden"
              style={{ zIndex: 30 }}
            >
              <div className="p-4 border-b border-gray-50 bg-white">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                   <Layers className="w-4 h-4 text-brand-accent" /> Active Yield Strategies
                </h3>
              </div>
              <div className="p-2 space-y-1 bg-gray-50">
                {[
                  { pair: "USDC / USDT", apr: "8.4%", tvl: "$45M" },
                  { pair: "ETH / wstETH", apr: "5.2%", tvl: "$32M" },
                  { pair: "WBTC / renBTC", apr: "4.8%", tvl: "$18M" }
                ].map((pool, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2.5 bg-white rounded border border-gray-100 hover:border-brand-accent/30 transition-colors">
                    <span className="text-xs font-bold text-gray-800">{pool.pair}</span>
                    <div className="flex gap-4 text-xs">
                       <span className="text-gray-500">TVL: {pool.tvl}</span>
                       <span className="text-green-500 font-semibold">{pool.apr} APR</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Float Left (Oracles/Security) */}
            <motion.div 
              initial={{ opacity: 0, x: -100, y: 0, rotateX: 10, rotateY: 10, rotateZ: 5 }}
              animate={{ opacity: 1, x: -160, y: -20, rotateX: 15, rotateY: 20, rotateZ: -2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute w-72 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden"
              style={{ zIndex: 15 }}
            >
              <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                <Network className="w-4 h-4 text-gray-500" />
                <div className="text-xs font-bold text-gray-900 uppercase">Oracle Feeds</div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Database className="w-4 h-4 text-blue-500" /> ETH/USD
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    $3,452.18
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Database className="w-4 h-4 text-orange-500" /> BTC/USD
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    $64,210.00
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </div>
                <div className="pt-2 mt-2 border-t border-gray-100">
                   <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 p-2 rounded">
                     <ShieldCheck className="w-4 h-4" /> Multi-Sig Active: 3/5
                   </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
    <RequestAuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </>
);
}
