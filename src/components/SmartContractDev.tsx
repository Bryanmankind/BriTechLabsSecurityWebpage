import { motion } from 'motion/react';
import { Code2, GitMerge, Rocket, Cpu, ChevronRight, Terminal, Blocks } from 'lucide-react';
import { useState } from 'react';
import RequestAuditModal from './RequestAuditModal';

export default function SmartContractDev() {
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
              Smart Contract Dev
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 leading-relaxed max-w-xl"
            >
              End-to-end Web3 development services. We architect and implement secure, gas-optimized smart contracts and decentralized applications tailored to your business needs.
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
                Start Building <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Right Floating Elements Mockup */}
        <div className="relative h-[400px] lg:h-[500px] hidden md:block perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center transform-gpu preserve-3d">
            
            {/* Top Back Card (Code Editor) */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: -20, rotateX: 10, rotateY: -15, rotateZ: 5 }}
              animate={{ opacity: 1, x: 30, y: -50, rotateX: 15, rotateY: -20, rotateZ: 5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute w-80 bg-[#1e1e1e] shadow-2xl rounded-xl border border-white/10 overflow-hidden"
              style={{ zIndex: 10 }}
            >
              <div className="bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 py-2 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-white/50 ml-2">Vault.sol</span>
              </div>
              <div className="p-4 space-y-1 font-mono text-xs">
                <div className="text-blue-400">contract <span className="text-green-400">Vault</span> {'{'}</div>
                <div className="pl-4 text-purple-400">mapping<span className="text-white">(address =&gt; uint256)</span> <span className="text-blue-400">public</span> balances;</div>
                <div className="pl-4 mt-2 text-blue-400">function <span className="text-yellow-200">deposit</span>() <span className="text-blue-400">external payable</span> {'{'}</div>
                <div className="pl-8 text-white">balances[msg.sender] += msg.value;</div>
                <div className="pl-4 text-white">{'}'}</div>
                <div className="text-white">{'}'}</div>
              </div>
            </motion.div>

            {/* Middle Main Card (Architecture / Modules) */}
            <motion.div 
              initial={{ opacity: 0, x: 0, y: 50, rotateX: 15, rotateY: -15, rotateZ: 0 }}
              animate={{ opacity: 1, x: -20, y: 0, rotateX: 20, rotateY: -25, rotateZ: 2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute w-96 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden"
              style={{ zIndex: 20 }}
            >
               <div className="p-4 bg-gray-50 flex items-center gap-2 border-b border-gray-100">
                 <Blocks className="w-5 h-5 text-brand-accent" />
                 <span className="text-sm font-bold text-gray-900 uppercase">Protocol Architecture</span>
               </div>
               <div className="p-4 space-y-3">
                 {[
                   { name: 'Core Engine', status: 'Deployed', color: 'bg-green-500' },
                   { name: 'Yield Strategy', status: 'Testing', color: 'bg-yellow-500' },
                   { name: 'Governance', status: 'In Progress', color: 'bg-blue-500' },
                 ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center p-3 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                     <div className="flex items-center gap-3">
                       <Cpu className="w-5 h-5 text-gray-400" />
                       <span className="font-semibold text-gray-700 text-sm">{item.name}</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <span className="text-xs font-medium text-gray-500">{item.status}</span>
                       <div className={`w-2 h-2 rounded-full ${item.color}`} />
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* Bottom Front Card (Gas Optimization) */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 100, rotateX: 20, rotateY: -10, rotateZ: -5 }}
              animate={{ opacity: 1, x: 60, y: 60, rotateX: 10, rotateY: -15, rotateZ: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute w-[350px] bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden"
              style={{ zIndex: 30 }}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                       <Rocket className="w-4 h-4 text-brand-accent" /> Gas Optimization
                    </h3>
                    <div className="text-2xl font-bold text-gray-900">
                      -42% <span className="text-sm font-normal text-gray-500">avg. reduction</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                     <div className="flex justify-between text-xs text-gray-500 mb-1">
                       <span>Initial Implementation</span>
                       <span>85,000 gas</span>
                     </div>
                     <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                       <div className="w-full h-full bg-gray-300" />
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-xs text-brand-accent font-medium mb-1">
                       <span>Optimized by BriTech</span>
                       <span>49,300 gas</span>
                     </div>
                     <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                       <div className="w-[58%] h-full bg-brand-accent" />
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Float Left (Git Commits) */}
            <motion.div 
              initial={{ opacity: 0, x: -100, y: 0, rotateX: 10, rotateY: 10, rotateZ: 5 }}
              animate={{ opacity: 1, x: -160, y: -20, rotateX: 15, rotateY: 20, rotateZ: -2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute w-72 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden"
              style={{ zIndex: 15 }}
            >
              <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                <GitMerge className="w-4 h-4 text-gray-500" />
                <div className="text-xs font-bold text-gray-900 uppercase">Recent Commits</div>
              </div>
              <div className="p-4 space-y-4">
                {[
                  { msg: "feat: implement flash loan callback", time: "2h ago" },
                  { msg: "refactor: optimize storage packing", time: "5h ago" },
                  { msg: "fix: reentrancy guard applied", time: "1d ago" }
                ].map((commit, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-1"><Terminal className="w-3 h-3 text-gray-400" /></div>
                    <div>
                      <div className="text-xs font-medium text-gray-800 leading-snug">{commit.msg}</div>
                      <div className="text-[10px] text-gray-400">{commit.time}</div>
                    </div>
                  </div>
                ))}
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
