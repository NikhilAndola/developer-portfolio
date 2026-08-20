import React from 'react';
import { Play, ArrowRight, Github, Linkedin, Layers, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_STATS } from '../data/portfolioData';

interface HeroProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  bpm: number;
}

export const Hero: React.FC<HeroProps> = ({ isPlaying, onTogglePlay, bpm }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background glow halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center space-y-6">
        
        {/* Status Pill & Location */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-neon-cyan animate-subtle-float">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
            Architecting <span className="gradient-text-cyan">Frontend Monorepos</span> & Scalable Systems.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            I’m <span className="text-white font-semibold">{PERSONAL_INFO.name}</span> — a <strong className="text-cyan-400 font-semibold">Software Development Engineer</strong> specializing in TypeScript/React component libraries, Turborepo modular architecture, Keycloak SSO authentication, and automated Docker/Kubernetes CI/CD pipelines.
          </p>
        </div>

        {/* Quick CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          
          <a
            href="#skills"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold text-sm shadow-neon-cyan hover:shadow-cyan-400/50 transition-all duration-300 flex items-center gap-2.5 group"
          >
            <Layers className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
            <span>Explore Skills Matrix</span>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#project-spotlight"
            className="px-6 py-3.5 rounded-2xl glass-panel border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/60 text-slate-200 hover:text-white font-medium text-sm transition-all flex items-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Debut App Spotlight</span>
          </a>

          <button
            onClick={onTogglePlay}
            className="px-5 py-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs transition-all flex items-center gap-2 group"
          >
            <Play className={`w-3.5 h-3.5 fill-current text-cyan-400 ${isPlaying ? 'animate-spin-slow' : 'group-hover:scale-110 transition-transform'}`} />
            <span>{isPlaying ? 'Pause Simulator' : 'Test Audio Simulator'}</span>
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
              {bpm} BPM
            </span>
          </button>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3.5 rounded-2xl bg-blue-950/30 border border-blue-800/50 hover:border-blue-400 text-blue-300 hover:text-white font-mono text-xs transition-all flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-500 text-slate-300 hover:text-white font-mono text-xs transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-8">
          {HIGHLIGHT_STATS.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl glass-panel border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 text-left relative overflow-hidden group hover:scale-[1.02]"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all" />
              <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
