import { motion } from 'motion/react';
import { FileText, CheckCircle2, TrendingUp, AlertTriangle, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import RequestAuditModal from './RequestAuditModal';

export default function SmartContractAudit() {
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
              Smart Contract Audit
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 leading-relaxed max-w-xl"
            >
              A comprehensive security assessment of your smart contract and blockchain code to identify vulnerabilities and recommend ways to fix them.
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
                Request Audit
              </button>
            </motion.div>
          </div>

          {/* Right Floating Elements Mockup */}
        <div className="relative h-[400px] lg:h-[500px] hidden md:block perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center transform-gpu preserve-3d">
            
            {/* Top Back Card (Files) */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: -20, rotateX: 10, rotateY: -15, rotateZ: 5 }}
              animate={{ opacity: 1, x: 30, y: -50, rotateX: 15, rotateY: -20, rotateZ: 5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute w-80 bg-white shadow-2xl rounded-lg border border-gray-100 overflow-hidden"
              style={{ zIndex: 10 }}
            >
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Audited Files/SHA256 (5)
              </div>
              <div className="p-4 space-y-3 text-sm">
                <div className="flex justify-between items-center text-gray-700">
                  <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-gray-400" /> README.md</div>
                  <div className="font-mono text-xs text-gray-400">409e8f...8a636b</div>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-gray-400" /> bim.sol</div>
                  <div className="font-mono text-xs text-gray-400">e53f8e...4bb0e06</div>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-gray-400" /> bim_buyback.sol</div>
                  <div className="font-mono text-xs text-gray-400">b33f98...9576a4</div>
                </div>
              </div>
            </motion.div>

            {/* Middle Main Card (Tokens/Projects Tracker) */}
            <motion.div 
              initial={{ opacity: 0, x: 0, y: 50, rotateX: 15, rotateY: -15, rotateZ: 0 }}
              animate={{ opacity: 1, x: -20, y: 0, rotateX: 20, rotateY: -25, rotateZ: 2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute w-96 bg-white shadow-2xl rounded-lg border border-gray-100 overflow-hidden"
              style={{ zIndex: 20 }}
            >
               <div className="p-4 bg-gray-50 flex justify-between text-xs font-semibold text-gray-500 border-b border-gray-100 uppercase tracking-wide">
                 <div className="w-8">#</div>
                 <div className="flex-1">Name</div>
                 <div className="w-20 text-right">Market Cap</div>
               </div>
               <div className="divide-y divide-gray-50">
                 {[
                   { id: 1, name: 'PancakeSwap', val: '94', change: '+1.05%', positive: true },
                   { id: 2, name: 'Aave', val: '93', change: '+4.49%', positive: true },
                   { id: 3, name: '1inch', val: '92', change: '+1.08%', positive: true },
                   { id: 4, name: 'BriTech', val: '91', change: '-3.18%', positive: false },
                 ].map((item, i) => (
                   <div key={item.id} className="p-3 flex justify-between items-center text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                     <div className="w-8 font-medium text-gray-400">{item.id}</div>
                     <div className="flex-1 flex items-center gap-2 font-semibold">
                       <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600">
                         {item.name[0]}
                       </div>
                       {item.name}
                     </div>
                     <div className="w-28 flex items-center justify-end gap-2">
                       <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold border border-green-200">{item.val}</span>
                       <span className={`text-xs font-medium flex items-center ${item.positive ? 'text-green-500' : 'text-red-500'}`}>
                         <TrendingUp className={`w-3 h-3 mr-0.5 ${!item.positive && 'rotate-180 text-red-500'}`} />
                         {item.change}
                       </span>
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* Bottom Front Card (Code Audit Summary) */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 100, rotateX: 20, rotateY: -10, rotateZ: -5 }}
              animate={{ opacity: 1, x: 60, y: 60, rotateX: 10, rotateY: -15, rotateZ: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute w-[400px] bg-white shadow-2xl rounded-lg border border-gray-100 overflow-hidden"
              style={{ zIndex: 30 }}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Code Audit <span className="text-gray-400 font-normal">(3 Audits available)</span></h3>
                    <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center border border-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-gray-700" />
                      </div>
                      24 <span className="text-sm font-normal text-gray-500">Findings in the latest audit</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-gray-100 border border-gray-200 rounded text-xs font-semibold text-gray-700 flex items-center gap-1">
                    Smart Contract... <ChevronDown className="w-3 h-3 ml-1" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-green-500" /> 2 Resolved
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" /> 18 Partially Resolved
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-blue-500" /> 4 Acknowledged
                    </div>
                  </div>
                  <div className="space-y-2 border-l border-gray-100 pl-4">
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Critical</span> <span className="font-mono text-gray-400">0</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Major</span> <span className="font-mono text-gray-400">3</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Medium</span> <span className="font-mono text-gray-400">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Float Left (Risks Card) */}
            <motion.div 
              initial={{ opacity: 0, x: -100, y: 0, rotateX: 10, rotateY: 10, rotateZ: 5 }}
              animate={{ opacity: 1, x: -160, y: -20, rotateX: 15, rotateY: 20, rotateZ: -2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute w-72 bg-white shadow-2xl rounded-lg border border-gray-100 overflow-hidden"
              style={{ zIndex: 15 }}
            >
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="text-xs font-bold text-gray-900 uppercase">Centralization Related Risks</div>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">Acknowledged</span>
                    <span className="text-[10px] text-gray-400 font-mono">AST-01</span>
                  </div>
                  <div className="text-xs font-semibold text-gray-900 leading-snug">
                    Description
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">
                    In the function <code className="bg-gray-100 text-pink-600 px-1 rounded">transferOwnership</code>, when the function is triggered, the owner...
                  </p>
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
