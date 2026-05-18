import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, Search, Globe, ChevronDown, FileCheck, Code2, Cpu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RequestAuditModal from './RequestAuditModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <motion.div 
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                className="bg-brand-accent p-1.5 rounded-lg"
              >
                <Shield className="w-6 h-6 text-brand-bg" fill="currentColor" />
              </motion.div>
              <span className="text-xl font-bold tracking-tight text-white">
                BriTech <span className="text-brand-accent">Labs</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/"
                label="Solutions" 
                hasDropdown 
                dropdownItems={[
                  { label: 'Smart Contract Audit', icon: FileCheck, to: '/audit' },
                  { label: 'Smart Contract Dev', icon: Code2, to: '/dev' },
                  { label: 'DeFi Architecture', icon: Cpu, to: '/defi' },
                ]}
              />
              <NavLink to="/" label="Resources" hasDropdown 
                dropdownItems={[
                  { label: 'Blog', icon: FileCheck },
                ]}
              />
              <NavLink label="About" to="/about" />
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-white/70 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/50 text-brand-accent font-medium hover:bg-brand-accent/10 transition-all text-sm">
                <Globe className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-brand-accent text-brand-bg font-bold px-6 py-2 rounded-full hover:glow-cyan transition-all text-sm"
              >
                Request Audit
              </button>
              <button className="md:hidden p-2 text-white">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <RequestAuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function NavLink({ 
  label, 
  to,
  hasDropdown, 
  dropdownItems 
}: { 
  label: string; 
  to?: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; icon?: any; to?: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const innerContent = (
    <>
      {to ? (
        <Link to={to} onClick={() => window.scrollTo(0, 0)} className="hover:text-white">
          {label}
        </Link>
      ) : (
        <span>{label}</span>
      )}
      {hasDropdown && (
        <ChevronDown className={`w-4 h-4 opacity-50 transition-all ${isOpen ? 'rotate-180 opacity-100' : 'group-hover:opacity-100'}`} />
      )}

      {/* Dropdown Menu */}
      {hasDropdown && dropdownItems && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[68px] left-0 w-64 rounded-xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl overflow-hidden py-2"
            >
              {dropdownItems.map((item, idx) => {
                const isLink = Boolean(item.to);
                return (
                  <div key={idx}>
                    {isLink ? (
                      <Link 
                        to={item.to!}
                        onClick={() => {
                          setIsOpen(false);
                          window.scrollTo(0, 0);
                        }}
                        className="px-4 py-3 hover:bg-white/5 flex items-center gap-3 transition-colors group/item w-full cursor-pointer"
                      >
                        <div className="bg-white/5 p-2 rounded-lg group-hover/item:bg-brand-accent/10 transition-colors">
                          {item.icon && <item.icon className="w-4 h-4 text-white/50 group-hover/item:text-brand-accent transition-colors" />}
                        </div>
                        <span className="text-white/80 group-hover/item:text-white font-medium">{item.label}</span>
                      </Link>
                    ) : (
                      <div 
                        className="px-4 py-3 hover:bg-white/5 flex items-center gap-3 transition-colors group/item w-full cursor-pointer"
                      >
                        <div className="bg-white/5 p-2 rounded-lg group-hover/item:bg-brand-accent/10 transition-colors">
                          {item.icon && <item.icon className="w-4 h-4 text-white/50 group-hover/item:text-brand-accent transition-colors" />}
                        </div>
                        <span className="text-white/80 group-hover/item:text-white font-medium">{item.label}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );

  return (
    <div 
      className="relative group flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white cursor-pointer transition-colors py-8"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {innerContent}
    </div>
  );
}
