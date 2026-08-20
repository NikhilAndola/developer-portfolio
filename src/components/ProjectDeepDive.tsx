import React, { useState } from 'react';
import { Smartphone, Zap, Sliders, HardDrive, CheckCircle2, ChevronRight, Code2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CASE_STUDY_PILLARS = [
  {
    id: 'timing',
    title: 'Zero-Drift Audio Engine',
    subtitle: 'Low-Latency Scheduling Loop',
    icon: Zap,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
    bgColor: 'bg-cyan-500/10',
    description: 'In React Native, JavaScript thread garbage collection causes perceptible audio jitter. We decoupled the audio playback using pre-warmed audio buffers and predictive lookahead queues, achieving sub-millisecond beat precision.',
    features: [
      'Pre-loaded low-latency PCM audio buffers into native audio memory',
      'Lookahead scheduling interval eliminating timer jitter during background UI renders',
      'Independent subdivision clock supporting 1/4, 1/8, 1/16, and triplet pulses'
    ],
    tech: ['Expo AV', 'Web Audio API', 'React 19 Hooks', 'TypeScript Strict']
  },
  {
    id: 'haptics',
    title: 'Tri-Modal Multisensory Sync',
    subtitle: 'Sound + Heavy Haptic + Strobe',
    icon: Smartphone,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    bgColor: 'bg-amber-500/10',
    description: 'For drummers and live stage performers in loud acoustic environments, audible clicks alone are inadequate. We engineered simultaneous visual strobe flashes and hardware haptic pulses.',
    features: [
      'Downbeat differentiation via Expo Haptics ImpactFeedbackStyle.Heavy',
      'Hardware-accelerated native driver screen flash strobe (90ms decay)',
      'Subdivision pulse markers with low-impact tactile feedback'
    ],
    tech: ['Expo Haptics', 'Animated Native Driver', 'React Native Safe Area']
  },
  {
    id: 'architecture',
    title: 'Scalable Preset & Setlist Engine',
    subtitle: 'Atomic Offline Persistence',
    icon: HardDrive,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    bgColor: 'bg-purple-500/10',
    description: 'Musicians require instant song tempo recall during live gigging. Designed an atomic setlist storage engine supporting complex time signatures (5/4, 7/8, 6/8), song transitions, and cloud sync.',
    features: [
      'Optimistic state updates backed by atomic AsyncStorage persistence',
      'Custom time signature matrix parser with dynamic bar length calculations',
      'Setlist auto-advance mode for seamless gig performance flow'
    ],
    tech: ['AsyncStorage', 'React Context API', 'Custom Hooks', 'Type Safe Reducers']
  },
  {
    id: 'paywall',
    title: 'Monetization & In-App Paywall',
    subtitle: 'Plus Tier Upgrade Architecture',
    icon: Sliders,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    bgColor: 'bg-emerald-500/10',
    description: 'Engineered a modular Plus Tier subscription system granting unlocked sound libraries, custom setlists, and polyrhythm engines, wrapped in a frictionless native upgrade modal.',
    features: [
      'Subscription context provider with feature gate hooks (useSubscription)',
      'Graceful offline tier fallback and restore purchases validation',
      'Conversion-optimized pricing tiers (Monthly, Annual, Lifetime Pro)'
    ],
    tech: ['Subscription Context', 'Modal Animations', 'Glassmorphism UI']
  }
];

export const ProjectDeepDive: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>(CASE_STUDY_PILLARS[0].id);

  const selected = CASE_STUDY_PILLARS.find(p => p.id === activePillar) || CASE_STUDY_PILLARS[0];
  const IconComponent = selected.icon;

  return (
    <section id="project-spotlight" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Debut Production Application Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Metronome Pro <span className="gradient-text-cyan">(BeatPulse)</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            My first flagship production mobile release — demonstrating end-to-end software engineering, DSP timing, native haptics, and clean architecture on iOS & Android.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl glass-panel border border-slate-700 hover:border-cyan-400 text-xs font-mono text-slate-200 hover:text-white transition-all flex items-center gap-2"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>View Source on GitHub</span>
          </a>
        </div>
      </div>

      {/* Case Study Interactive Navigation & Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Navigation Tabs (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          {CASE_STUDY_PILLARS.map((pillar) => {
            const PillarIcon = pillar.icon;
            const isCurrent = pillar.id === activePillar;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between group ${
                  isCurrent
                    ? 'bg-slate-900/90 border-cyan-500/60 shadow-neon-cyan'
                    : 'bg-brand-dark/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`p-2.5 rounded-xl ${pillar.bgColor} border ${pillar.borderColor} ${pillar.color}`}>
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{pillar.subtitle}</p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 mt-1 transition-transform ${isCurrent ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Dive Panel (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-panel-glow border border-slate-800 bg-brand-dark/95 flex flex-col justify-between">
          
          <div className="space-y-6">
            {/* Pillar Header */}
            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
              <div className={`p-3 rounded-2xl ${selected.bgColor} border ${selected.borderColor} ${selected.color}`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold">
                  Engineering Pillar
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  {selected.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {selected.description}
            </p>

            {/* Key Deliverables Bullet Points */}
            <div className="space-y-3 pt-2">
              <h5 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                Technical Highlights & Architectural Solutions:
              </h5>
              <div className="space-y-2.5">
                {selected.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 block mb-2">Technologies Used:</span>
              <div className="flex flex-wrap gap-2">
                {selected.tech.map((t, idx) => (
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

    </section>
  );
};
