import React, { useState } from 'react';
import { Smartphone, Volume2, Layout, Layers, Sparkles, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const ICONS_MAP: Record<string, React.ElementType> = {
  Smartphone,
  Volume2,
  Layout,
  Layers,
  Cpu,
};

export const SkillsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="skills" className="pt-4 pb-10 md:pt-6 md:pb-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-6 md:mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-400">
          <Sparkles className="w-3 h-3" />
          <span>Full-Stack & Mobile Stack</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
          Full Stack & Mobile <span className="gradient-text-cyan">Skills Matrix</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
          Specialized expertise spanning cross-platform mobile (iOS & Android), TypeScript monorepos, Node.js REST APIs, Keycloak SSO, and Docker/K8s cloud CI/CD.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = ICONS_MAP[cat.icon] || Layers;
          const isSelected = activeCategory === idx;

          return (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-start gap-2.5 ${
                isSelected
                  ? 'bg-slate-900 border-cyan-500/60 shadow-neon-cyan'
                  : 'bg-brand-dark/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800/60 text-slate-400'}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="font-display font-bold text-xs text-white truncate">{cat.title}</h4>
                <span className="text-[10px] font-mono text-slate-500">{cat.skills.length} skills</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Category Skill Details */}
      <div className="rounded-2xl glass-panel-glow border border-slate-800 bg-brand-dark/95 p-4 sm:p-6">
        <div className="mb-4">
          <h3 className="text-base sm:text-lg font-display font-bold text-white">
            {SKILL_CATEGORIES[activeCategory].title}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {SKILL_CATEGORIES[activeCategory].description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-xs text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 text-[9px] font-mono">
                      Core
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-cyan-400 font-bold">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="flex justify-between items-center mt-1.5">
                <span className="text-[9px] font-mono text-slate-500 uppercase">{skill.tag}</span>
                <span className="text-[9px] font-mono text-slate-400">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
