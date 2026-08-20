import React, { useState, useEffect } from 'react';
import { Play, Pause, Disc3 } from 'lucide-react';

interface PolyrhythmOption {
  name: string;
  ratioA: number;
  ratioB: number;
  labelA: string;
  labelB: string;
  description: string;
}

const POLYRHYTHM_PRESETS: PolyrhythmOption[] = [
  { name: '3 : 2 Hemiola', ratioA: 3, ratioB: 2, labelA: 'Triplet (3)', labelB: 'Duplet (2)', description: 'Classic afro-cuban & baroque hemiola cross-rhythm' },
  { name: '4 : 3 Cross-Beat', ratioA: 4, ratioB: 3, labelA: '4 Beats', labelB: '3 Beats', description: 'Complex polyrhythm found in jazz, math-rock & contemporary percussion' },
  { name: '5 : 4 Progressive', ratioA: 5, ratioB: 4, labelA: '5 Pulses', labelB: '4 Pulses', description: 'Advanced odd-meter polyrhythmic layering' },
];

export const PolyrhythmVisualizer: React.FC = () => {
  const [selectedRatio, setSelectedRatio] = useState<PolyrhythmOption>(POLYRHYTHM_PRESETS[0]);
  const [activeStepA, setActiveStepA] = useState<number>(0);
  const [activeStepB, setActiveStepB] = useState<number>(0);
  const [isPlayingLocal, setIsPlayingLocal] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlayingLocal) return;

    // LCM (least common multiple) loop period in ms
    const period = 2400; // ms for one full polyrhythm cycle
    const intervalA = period / selectedRatio.ratioA;
    const intervalB = period / selectedRatio.ratioB;

    let timerA: number;
    let timerB: number;

    const stepA = () => {
      setActiveStepA((prev) => (prev + 1) % selectedRatio.ratioA);
      timerA = window.setTimeout(stepA, intervalA);
    };

    const stepB = () => {
      setActiveStepB((prev) => (prev + 1) % selectedRatio.ratioB);
      timerB = window.setTimeout(stepB, intervalB);
    };

    timerA = window.setTimeout(stepA, intervalA);
    timerB = window.setTimeout(stepB, intervalB);

    return () => {
      clearTimeout(timerA);
      clearTimeout(timerB);
    };
  }, [isPlayingLocal, selectedRatio]);

  return (
    <section id="polyrhythm" className="pt-6 pb-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-400">
          <Disc3 className="w-3.5 h-3.5 animate-spin-slow" />
          <span>Advanced Polyrhythmic Phasing</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Concentric <span className="gradient-text-purple">Polyrhythms</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Visualizing dual independent tempo phase meters intersecting on the primary downbeat.
        </p>
      </div>

      <div className="rounded-3xl glass-panel-glow border border-slate-800 bg-brand-dark/95 p-6 sm:p-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls & Preset Selection (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase font-mono text-purple-400 font-semibold">Select Ratio Preset</span>
              <div className="space-y-2 mt-3">
                {POLYRHYTHM_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => {
                      setSelectedRatio(preset);
                      setActiveStepA(0);
                      setActiveStepB(0);
                    }}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all ${
                      selectedRatio.name === preset.name
                        ? 'bg-purple-950/50 border-purple-400 text-white shadow-neon-purple'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="font-display font-bold text-sm text-purple-300">{preset.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{preset.description}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsPlayingLocal(!isPlayingLocal)}
              className={`w-full py-3.5 rounded-xl font-bold font-mono text-sm transition-all flex items-center justify-center gap-2 ${
                isPlayingLocal
                  ? 'bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-neon-purple hover:opacity-90'
              }`}
            >
              {isPlayingLocal ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlayingLocal ? 'PAUSE POLYRHYTHM LOOP' : 'SIMULATE POLYRHYTHM PHASE'}</span>
            </button>
          </div>

          {/* Interactive Dual Ring Visualizer (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-slate-950/70 rounded-2xl border border-slate-800/80">
            
            <div className="w-full space-y-6 max-w-md">
              
              {/* Outer Voice A Nodes */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-cyan-400 font-bold">Voice A ({selectedRatio.labelA})</span>
                  <span className="text-slate-400">Step {activeStepA + 1} / {selectedRatio.ratioA}</span>
                </div>
                <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${selectedRatio.ratioA}, minmax(0, 1fr))` }}>
                  {Array.from({ length: selectedRatio.ratioA }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-12 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-150 ${
                        isPlayingLocal && activeStepA === i
                          ? 'bg-cyan-400 text-slate-950 shadow-neon-cyan scale-105 border-2 border-white'
                          : 'bg-slate-900 border border-slate-800 text-slate-500'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inner Voice B Nodes */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-amber-400 font-bold">Voice B ({selectedRatio.labelB})</span>
                  <span className="text-slate-400">Step {activeStepB + 1} / {selectedRatio.ratioB}</span>
                </div>
                <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${selectedRatio.ratioB}, minmax(0, 1fr))` }}>
                  {Array.from({ length: selectedRatio.ratioB }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-12 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-150 ${
                        isPlayingLocal && activeStepB === i
                          ? 'bg-amber-400 text-slate-950 shadow-neon-amber scale-105 border-2 border-white'
                          : 'bg-slate-900 border border-slate-800 text-slate-500'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Intersection Info */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-xs font-mono text-slate-400">
                {activeStepA === 0 && activeStepB === 0 && isPlayingLocal ? (
                  <span className="text-cyan-300 font-bold animate-pulse">
                    ⚡ DOWNBEAT INTERSECTION (Beat 1 of Both Meters In Sync)
                  </span>
                ) : (
                  <span>Phase offset active across time signature divisions</span>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
