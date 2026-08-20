import React from 'react';
import { Github, Linkedin, Volume2, VolumeX, Sparkles, Coffee } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isPlaying: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isPlaying, isMuted, onToggleMute, onOpenContact }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === '#' || !targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const cleanId = targetId.replace('#', '');
    const element = document.getElementById(cleanId);
    if (element) {
      const targetContent = (element.firstElementChild as HTMLElement) || element;
      const navbarOffset = 78;
      const targetRect = targetContent.getBoundingClientRect();
      const offsetPosition = targetRect.top + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      window.history.pushState(null, '', targetId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-4 py-2.5 flex items-center justify-between shadow-glass-card border border-slate-800/80 bg-brand-bg/85 backdrop-blur-xl">
        
        {/* Brand & Identity */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-slate-900 border border-cyan-500/40 group-hover:border-cyan-400 transition-all duration-300 shadow-neon-cyan overflow-hidden p-1">
            <img 
              src="/gemini-svg.svg" 
              alt="AndoLabs Brand Icon" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]" 
            />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold text-white group-hover:text-cyan-400 transition-colors tracking-tight text-lg sm:text-xl">
              Ando<span className="gradient-text-cyan">Labs</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a 
            href="#metronome-demo" 
            onClick={(e) => handleNavClick(e, '#metronome-demo')}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Simulator
          </a>
          <a 
            href="#architecture" 
            onClick={(e) => handleNavClick(e, '#architecture')}
            className="hover:text-cyan-400 transition-colors"
          >
            Architecture
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hover:text-cyan-400 transition-colors"
          >
            Contact
          </a>
          <a 
            href="#donate" 
            onClick={(e) => handleNavClick(e, '#donate')}
            className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-medium"
          >
            <Coffee className="w-3.5 h-3.5 text-amber-400" />
            <span>Buy Coffee</span>
          </a>
        </nav>

        {/* Actions & Profiles */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Mute Audio Toggle */}
          <button
            onClick={onToggleMute}
            title={isMuted ? "Unmute Audio Synthesis" : "Mute Audio Synthesis"}
            className={`p-2 rounded-xl border transition-all duration-200 ${
              isMuted 
                ? 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200' 
                : 'bg-cyan-950/60 border-cyan-500/40 text-cyan-400 shadow-neon-cyan hover:bg-cyan-900/40'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
          </button>

          {/* GitHub Button */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-600 text-slate-200 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono group"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform text-slate-300" />
            <span className="hidden lg:inline">GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-blue-950/40 border border-blue-800/60 hover:border-blue-500 text-blue-300 hover:text-blue-200 transition-all flex items-center gap-1.5 text-xs font-mono group"
          >
            <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform text-blue-400" />
            <span className="hidden lg:inline">LinkedIn</span>
          </a>

          {/* Connect CTA */}
          <button
            onClick={onOpenContact}
            className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs transition-all shadow-neon-cyan hover:shadow-cyan-500/50 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect</span>
          </button>

        </div>

      </div>
    </header>
  );
};
