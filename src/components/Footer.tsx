import { Shield, Twitter, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#08090C] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-accent p-1.5 rounded-lg">
                <Shield className="w-6 h-6 text-brand-bg" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                BriTech <span className="text-brand-accent">Labs</span>
              </span>
            </div>
            <p className="text-white/40 mb-8 max-w-sm leading-relaxed">
              BriTech Labs is a blockchain security pioneer, utilizing best-in-class AI technology 
              to secure and monitor blockchains, smart contracts, and Web3 applications.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Github} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={MessageSquare} />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-widest text-white/40">Products</h4>
            <ul className="space-y-4">
              <FooterLink label="Skynet" />
              <FooterLink label="Leaderboard" />
              <FooterLink label="Bug Bounty" />
              <FooterLink label="KYC" />
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-widest text-white/40">Company</h4>
            <ul className="space-y-4">
              <FooterLink label="About" />
              <FooterLink label="Careers" />
              <FooterLink label="Press" />
              <FooterLink label="Contact" />
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-widest text-white/40">Legal</h4>
            <ul className="space-y-4">
              <FooterLink label="Privacy Policy" />
              <FooterLink label="Terms of Service" />
              <FooterLink label="Security Policy" />
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xs text-white/30 font-medium">
            © 2026 BriTech Labs Security. All rights reserved.
          </span>
          <div className="flex gap-8">
            <button className="text-[10px] uppercase font-bold tracking-widest text-white/40 hover:text-white transition-colors">Audit Verification</button>
            <button className="text-[10px] uppercase font-bold tracking-widest text-white/40 hover:text-white transition-colors">English (US)</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <button className="text-sm text-white/50 hover:text-brand-accent transition-colors">
        {label}
      </button>
    </li>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-accent hover:border-brand-accent/50 transition-all">
      <Icon className="w-5 h-5" />
    </button>
  );
}
