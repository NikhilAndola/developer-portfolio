import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#050609] py-8 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-slate-900 border border-cyan-500/40 flex items-center justify-center p-1 shadow-neon-cyan overflow-hidden">
            <img 
              src="/andolalabs_icon.svg" 
              alt="AndolaLabs Brand Icon" 
              className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(0,242,254,0.5)]" 
            />
          </div>
          <div>
            <div className="font-display font-bold text-white text-sm flex items-center gap-2">
              <span>Andola<span className="gradient-text-cyan">Labs</span></span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                Engineering
              </span>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Full Stack Software Development Engineer • Web & Mobile Systems
            </div>
          </div>
        </div>

        {/* Social & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-300 transition-colors"
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-400 text-slate-400 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
