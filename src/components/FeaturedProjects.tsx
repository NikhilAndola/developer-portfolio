import React from 'react';
import { Sparkles, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Project {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  primary?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 'metronome-pro',
    title: 'Metronome Pro (BeatPulse)',
    badge: 'Flagship Debut Mobile App',
    tagline: 'Ultra Low-Latency Audio Timing Engine & Polyrhythm Visualizer',
    description: 'Production cross-platform mobile application engineered for professional musicians, drummers, and stage performers. Features sub-millisecond zero-jitter Web Audio DSP scheduling, tri-modal haptic and visual strobe synchronization, concentric polyrhythmic phasing, and atomic offline preset storage.',
    metrics: [
      { label: 'Audio Precision', value: '< 1ms Jitter' },
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Sensory Modes', value: 'Sound + Haptic + Strobe' },
      { label: 'Architecture', value: 'Lookahead DSP' },
    ],
    tags: ['React Native', 'Expo SDK', 'Web Audio API', 'TypeScript', 'DSP Timing', 'Haptics'],
    githubUrl: 'https://github.com/NikhilAndola/andolab-metronome-page',
    liveUrl: 'https://github.com/NikhilAndola/andolab-metronome-page',
    primary: true,
  },
  {
    id: 'monorepo-design-system',
    title: 'Enterprise Turborepo UI System',
    badge: 'Frontend Monorepo Architecture',
    tagline: '50+ Reusable TypeScript Components with Distributed Caching',
    description: 'Modular enterprise frontend monorepo housing strictly-typed React design tokens, polymorphic accessible components, and automated multi-package versioning. Boosted multi-team build consistency and accelerated CI/CD pipelines by 60%.',
    metrics: [
      { label: 'Reusable Components', value: '50+ UI Tokens' },
      { label: 'Build Acceleration', value: '+60% Speed' },
      { label: 'Type Safety', value: 'Strict TypeScript' },
      { label: 'Workspace', value: 'Turborepo' },
    ],
    tags: ['Turborepo', 'React.js', 'TypeScript', 'Tailwind CSS', 'Micro-frontends', 'CI/CD'],
    githubUrl: PERSONAL_INFO.github,
    primary: false,
  },
  {
    id: 'keycloak-sso-iam',
    title: 'Keycloak Enterprise SSO & Identity',
    badge: 'Cloud & Auth Security',
    tagline: 'High-Throughput Single Sign-On Authentication for 10,000+ Users',
    description: 'Distributed authentication and IAM architecture with automated token refresh interceptors, role-based access control (RBAC), CSP/CORS security hardening, and resilient Docker/Kubernetes container orchestration.',
    metrics: [
      { label: 'Users Authenticated', value: '10,000+ Active' },
      { label: 'Deploy Reduction', value: '45m → 10m (77%)' },
      { label: 'Testing Coverage', value: '85% Jest/Cypress' },
      { label: 'Security Standard', value: 'OAuth2 / OIDC' },
    ],
    tags: ['Keycloak SSO', 'Docker', 'Kubernetes', 'OAuth2/OIDC', 'Node.js', 'GitHub Actions'],
    githubUrl: PERSONAL_INFO.github,
    primary: false,
  }
];

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="pt-4 pb-10 md:pt-6 md:pb-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-6 md:mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-400">
          <Sparkles className="w-3 h-3" />
          <span>Engineering Portfolio</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
          Featured <span className="gradient-text-cyan">Projects & Architecture</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
          Production mobile applications, scalable TypeScript monorepos, and enterprise cloud authentication infrastructure.
        </p>
      </div>

      <div className="space-y-5">
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className={`rounded-2xl p-5 sm:p-7 glass-panel-glow border transition-all duration-300 relative overflow-hidden ${
              proj.primary
                ? 'border-cyan-500/40 bg-brand-dark/95 shadow-neon-cyan'
                : 'border-slate-800 bg-brand-dark/90 hover:border-slate-700'
            }`}
          >
            {/* Ambient Background Glow for primary card */}
            {proj.primary && (
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
            )}

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              {/* Project Main Details */}
              <div className="space-y-3.5 max-w-2xl">
                
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full border ${
                    proj.primary 
                      ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' 
                      : 'bg-slate-900 text-slate-300 border-slate-700'
                  }`}>
                    {proj.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-0.5">
                    {proj.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {proj.description}
                </p>

                {/* Metrics Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {proj.metrics.map((m, idx) => (
                    <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div className="font-display font-bold text-xs sm:text-sm text-white">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons & Links */}
              <div className="flex flex-row lg:flex-col gap-2.5 shrink-0 justify-start lg:justify-center border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-4 lg:pt-0 lg:pl-6">
                
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold text-xs shadow-neon-cyan transition-all flex items-center justify-center gap-1.5 group"
                  >
                    <span>Launch Showcase Page</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-200 hover:text-white font-mono text-xs transition-all flex items-center justify-center gap-1.5 group"
                >
                  <Github className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
                  <span>View Repository</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-0.5 group-hover:text-cyan-400 transition-all" />
                </a>

              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
