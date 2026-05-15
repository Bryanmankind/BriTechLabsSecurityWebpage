import { motion } from 'motion/react';
import { Shield, Menu, Search, Globe, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
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
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink label="Solutions" hasDropdown />
            <NavLink label="Resources" hasDropdown />
            <NavLink label="Leaderboard" />
            <NavLink label="About" />
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
            <button className="bg-brand-accent text-brand-bg font-bold px-6 py-2 rounded-full hover:glow-cyan transition-all text-sm">
              Request Audit
            </button>
            <button className="md:hidden p-2 text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ label, hasDropdown }: { label: string; hasDropdown?: boolean }) {
  return (
    <div className="group flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white cursor-pointer transition-colors">
      <span>{label}</span>
      {hasDropdown && <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />}
    </div>
  );
}
