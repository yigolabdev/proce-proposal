import React from 'react';
import { Mail, Phone, Building2 } from 'lucide-react';

interface FooterProps {
  lang: 'ko' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-accent-purple flex items-center justify-center">
                 <span className="font-bold text-white text-xl">P</span>
               </div>
               <span className="text-3xl font-bold text-white">Proce</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-slate-400 text-sm md:text-base">
                <div className="flex items-center gap-2">
                    <Mail size={18} className="text-brand-500" />
                    <a href="mailto:choi@yigolab.com" className="hover:text-white transition-colors">choi@yigolab.com</a>
                </div>
                <div className="flex items-center gap-2">
                    <Phone size={18} className="text-brand-500" />
                    <span>010-8985-1051</span>
                </div>
                <div className="flex items-center gap-2">
                    <Building2 size={18} className="text-brand-500" />
                    <span>YIGO Corp.</span>
                </div>
            </div>
            
            <p className="text-slate-600 text-xs">
               © 2025 YIGO Corp. All rights reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;