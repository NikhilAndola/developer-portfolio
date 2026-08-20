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
    <section id="skills" className="pt-6 pb-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Multi-Disciplinary Technical Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Software Engineering <span className="gradient-text-cyan">Skills Matrix</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Specialized expertise across TypeScript monorepos, micro-frontends, Keycloak SSO, Docker/K8s CI/CD, and full-stack systems.
        </p>
      </div>

      {/* Category Tabs on Mobile / Desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = ICONS_MAP[cat.icon] || Layers;
          const isSelected = activeCategory === idx;

          return (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3 ${
                isSelected
                  ? 'bg-slate-900 border-cyan-500/60 shadow-neon-cyan'
                  : 'bg-brand-dark/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div className={`p-2 rounded-xl ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800/60 text-slate-400'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs sm:text-sm text-white line-clamp-1">{cat.title}</h4>
                <span className="text-[11px] font-mono text-slate-500">{cat.skills.length} skills</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Category Skill Details */}
      <div className="rounded-3xl glass-panel-glow border border-slate-800 bg-brand-dark/95 p-6 sm:p-8">
        <div className="mb-6">
          <h3 className="text-xl font-display font-bold text-white">
            {SKILL_CATEGORIES[activeCategory].title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {SKILL_CATEGORIES[activeCategory].description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-mono">
                      Core Stack
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-cyan-400 font-bold">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="flex justify-between items-center mt-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase">{skill.tag}</span>
                <span className="text-[10px] font-mono text-slate-400">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
