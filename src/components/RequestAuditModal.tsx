import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';

interface RequestAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestAuditModal({ isOpen, onClose }: RequestAuditModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ margin: 0 }}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-6xl bg-brand-bg rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col md:flex-row h-full max-h-[90vh]"
          >
            {/* Close Button Mobile */}
            <button 
              onClick={onClose}
              className="md:hidden absolute top-4 right-4 z-10 p-2 bg-black/20 rounded-full text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side (Dark) */}
            <div className="w-full md:w-5/12 bg-black p-8 md:p-12 flex-col relative overflow-hidden hidden md:flex border-r border-white/5">
              {/* Logo */}
              <div className="flex items-center gap-2 text-white mb-16">
                <div className="bg-brand-accent p-1.5 rounded-lg">
                  <ShieldCheck className="w-8 h-8 text-brand-bg" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  BriTech <span className="text-brand-accent">Labs</span>
                </span>
              </div>

              {/* Title */}
              <div className="mb-auto">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
                  Elevate Your
                </h2>
                <h2 className="text-4xl lg:text-5xl font-bold text-brand-accent leading-tight mb-8">
                  Web3 Journey
                </h2>
              </div>
            </div>

            {/* Right Side (Form) */}
            <div className="w-full md:w-7/12 bg-[#0a0a0a] p-6 md:p-12 overflow-y-auto relative">
              <button 
                onClick={onClose}
                className="hidden md:flex absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-w-xl mx-auto py-4">
                <h2 className="text-3xl font-medium text-white mb-3 tracking-tight">
                  Protect Your Project Today
                </h2>
                <p className="text-gray-400 mb-10 text-lg">
                  Strengthen your project with the leading web3 security provider.
                </p>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">
                      Project / Company <span className="text-brand-accent">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Project or company name"
                      className="w-full px-4 py-3 bg-[#111111] rounded-lg border border-white/10 focus:border-brand-accent focus:ring-0 outline-none transition-all placeholder:text-gray-500 text-white shadow-sm disabled:opacity-50"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        Email <span className="text-brand-accent">*</span>
                      </label>
                      <input 
                        type="email" 
                        placeholder="Enter your work email"
                        className="w-full px-4 py-3 bg-[#111111] rounded-lg border border-white/10 focus:border-brand-accent focus:ring-0 outline-none transition-all placeholder:text-gray-500 text-white shadow-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        Contact Method <span className="text-brand-accent">*</span>
                      </label>
                      <div className="flex border border-white/10 rounded-lg overflow-hidden focus-within:border-brand-accent transition-all shadow-sm bg-[#111111]">
                        <select className="bg-white/5 px-3 py-3 border-r border-white/10 outline-none text-white/90 text-sm font-medium focus:ring-0">
                          <option className="bg-[#111111]">Telegram</option>
                          <option className="bg-[#111111]">Discord</option>
                          <option className="bg-[#111111]">Twitter</option>
                        </select>
                        <input 
                          type="text" 
                          placeholder="Enter handle or ID"
                          className="flex-1 px-4 py-3 outline-none placeholder:text-gray-500 text-white bg-transparent w-full min-w-0"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-[#111111] rounded-lg border border-white/10 focus:border-brand-accent focus:ring-0 outline-none transition-all placeholder:text-gray-500 text-white shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        Job Title
                      </label>
                      <input 
                        type="text" 
                        placeholder="Enter your job title"
                        className="w-full px-4 py-3 bg-[#111111] rounded-lg border border-white/10 focus:border-brand-accent focus:ring-0 outline-none transition-all placeholder:text-gray-500 text-white shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">
                      Service Interest
                    </label>
                    <select className="w-full px-4 py-3 bg-[#111111] rounded-lg border border-white/10 focus:border-brand-accent focus:ring-0 outline-none transition-all text-white/90 shadow-sm appearance-none cursor-pointer">
                      <option value="" className="bg-[#111111]">Select a service</option>
                      <option value="audit" className="bg-[#111111]">Smart Contract Audit</option>
                      <option value="dev" className="bg-[#111111]">Smart Contract Development</option>
                      <option value="defi" className="bg-[#111111]">DeFi Architecture</option>
                      <option value="other" className="bg-[#111111]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">
                      Additional Information
                    </label>
                    <textarea 
                      placeholder="Tell us more about your project. Share details, relevant links, or any questions you might have."
                      rows={4}
                      className="w-full px-4 py-3 bg-[#111111] rounded-lg border border-white/10 focus:border-brand-accent focus:ring-0 outline-none transition-all placeholder:text-gray-500 resize-none text-white shadow-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full bg-brand-accent hover:glow-cyan text-brand-bg font-bold px-8 py-3.5 rounded-lg transition-all text-lg shadow-lg"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
