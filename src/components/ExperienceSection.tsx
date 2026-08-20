import React, { useState } from 'react';
import { 
  Briefcase, GraduationCap, Award, CheckCircle2, 
  Calendar, MapPin, ChevronRight, TrendingUp
} from 'lucide-react';
import { WORK_EXPERIENCES, EDUCATION_DATA, AWARDS_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [activeExpIdx, setActiveExpIdx] = useState<number>(0);
  const activeExp = WORK_EXPERIENCES[activeExpIdx] || WORK_EXPERIENCES[0];

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Experience & Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Engineering Leadership & <span className="gradient-text-cyan">Impact</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Proven history of architecting enterprise monorepos, leading developer teams, cutting CI/CD deployment times, and securing applications for 10,000+ users.
        </p>
      </div>

      {/* Experience Showcase Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* Left: Company Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs uppercase font-mono text-slate-400 tracking-wider px-1 font-semibold mb-2">
            Work Experience
          </div>
          {WORK_EXPERIENCES.map((exp, idx) => {
            const isSelected = idx === activeExpIdx;
            return (
              <button
                key={exp.company}
                onClick={() => setActiveExpIdx(idx)}
                className={`w-full p-5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/60 shadow-neon-cyan'
                    : 'bg-brand-dark/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                      {exp.company}
                    </span>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-mono">
                        Present
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-cyan-400/90 font-mono font-medium">
                    {exp.role}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
              </button>
            );
          })}

          {/* Quick Stats Summary Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-brand-card border border-slate-800/80 space-y-3 mt-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-semibold">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Core Track Record Highlights</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-lg font-bold text-white font-mono">50+</div>
                <div className="text-[10px] text-slate-400">Reusable Components</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-lg font-bold text-cyan-400 font-mono">10,000+</div>
                <div className="text-[10px] text-slate-400">Users SSO Scale</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-lg font-bold text-emerald-400 font-mono">77%</div>
                <div className="text-[10px] text-slate-400">CI/CD Time Saved</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-lg font-bold text-amber-400 font-mono">85%</div>
                <div className="text-[10px] text-slate-400">Jest/Cypress Tests</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Selected Role Deep Dive (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-panel-glow border border-slate-800 bg-brand-dark/95 flex flex-col justify-between">
          
          <div className="space-y-6">
            
            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-display font-bold text-white">
                    {activeExp.role}
                  </h3>
                  <span className="text-lg font-semibold text-cyan-400">@ {activeExp.company}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1 font-mono flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {activeExp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {activeExp.location}
                  </span>
                </p>
              </div>
              {activeExp.current && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Current Organization</span>
                </div>
              )}
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
              {activeExp.tagline}
            </p>

            {/* Impact Metric Chips */}
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                Measurable Impact & Scale:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {activeExp.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-xs font-bold text-cyan-300 font-mono">{m.value}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements Bullet Points */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Key Deliverables & Engineering Accomplishments:
              </span>
              <div className="space-y-2.5">
                {activeExp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 block mb-2">Technologies & Tools:</span>
              <div className="flex flex-wrap gap-2">
                {activeExp.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Education & Awards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Education Card */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-slate-800 bg-brand-dark/95 space-y-5">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Academic Foundation</span>
              <h3 className="text-xl font-display font-bold text-white">Education</h3>
            </div>
          </div>

          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white font-display">
                    {edu.degree} in {edu.field}
                  </h4>
                  <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                    2014 – 2018
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-mono mt-1 font-medium">{edu.institution}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">{edu.location}</div>
              </div>

              {edu.highlights && (
                <div className="space-y-2 pt-1">
                  {edu.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Awards & Achievements Card */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-amber-500/30 bg-brand-dark/95 space-y-5">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <div className="p-3 rounded-2xl bg-amber-950/80 border border-amber-500/40 text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Recognition & Honors</span>
              <h3 className="text-xl font-display font-bold text-white">Awards & Achievements</h3>
            </div>
          </div>

          <div className="space-y-4">
            {AWARDS_DATA.map((award, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {award.title}
                  </h4>
                  <span className="px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-400 border border-amber-800/60 text-[10px] font-mono shrink-0">
                    {award.badgeText}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="text-slate-300 font-semibold">{award.organization}</span>
                  <span>•</span>
                  <span>{award.date}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
