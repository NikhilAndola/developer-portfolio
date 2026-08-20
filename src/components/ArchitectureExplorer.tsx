import React, { useState } from 'react';
import { Copy, Check, Terminal, FileCode2 } from 'lucide-react';
import { ARCHITECTURE_MODULES } from '../data/portfolioData';

export const ArchitectureExplorer: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string>(ARCHITECTURE_MODULES[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const activeModule = ARCHITECTURE_MODULES.find(m => m.id === activeModuleId) || ARCHITECTURE_MODULES[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeModule.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="pt-4 pb-10 md:pt-6 md:pb-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-6 md:mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-400">
          <Terminal className="w-3 h-3" />
          <span>Systems Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
          Clean Architectural <span className="gradient-text-cyan">Patterns</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
          Inspect the real TypeScript architecture powering high-precision timing, native haptic feedback, and atomic preset storage.
        </p>
      </div>

      {/* Code Browser Container */}
      <div className="rounded-2xl glass-panel-glow border border-slate-800 bg-brand-dark/95 overflow-hidden">
        
        {/* Top Tab Bar */}
        <div className="flex flex-wrap items-center justify-between px-3.5 sm:px-5 py-2.5 border-b border-slate-800/80 bg-slate-950/80 gap-2.5">
          
          {/* Module Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {ARCHITECTURE_MODULES.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  mod.id === activeModuleId
                    ? 'bg-cyan-500/20 border border-cyan-400/80 text-cyan-300 shadow-neon-cyan'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileCode2 className="w-3 h-3" />
                <span>{mod.title}</span>
              </button>
            ))}
          </div>

          {/* Copy Button & Lang Tag */}
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">TypeScript 5.5 • React Native</span>
            <button
              onClick={handleCopyCode}
              className="p-1 sm:px-2.5 sm:py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white text-[11px] font-mono transition-all flex items-center gap-1"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

        </div>

        {/* Content Area: Highlights & Code Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left: Highlights & Specs (4 cols) */}
          <div className="lg:col-span-4 p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-slate-800/80 space-y-3.5 bg-slate-950/30">
            <div>
              <span className="text-[10px] uppercase font-mono text-cyan-400 font-semibold">{activeModule.subtitle}</span>
              <h3 className="text-base sm:text-lg font-display font-bold text-white mt-0.5">{activeModule.title}</h3>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              {activeModule.description}
            </p>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Key Design Decisions:</span>
              <ul className="space-y-1.5">
                {activeModule.highlights.map((h, i) => (
                  <li key={i} className="text-[11px] sm:text-xs text-slate-300 flex items-start gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Code Block (8 cols) */}
          <div className="lg:col-span-8 p-3.5 sm:p-4 bg-[#090b10] overflow-x-auto">
            <pre className="font-mono text-[11px] sm:text-xs text-cyan-100/90 leading-relaxed">
              <code>{activeModule.codeSnippet}</code>
            </pre>
          </div>

        </div>

      </div>

    </section>
  );
};
