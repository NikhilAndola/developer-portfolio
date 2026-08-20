import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Plus, Minus, 
  Radio, Zap
} from 'lucide-react';
import { webAudioEngine } from '../audio/WebAudioEngine';
import { SoundType, TimeSignature, Subdivision } from '../types';

interface MetronomeDemoProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  bpm: number;
  setBpm: (bpm: number) => void;
}

const TIME_SIGNATURES: TimeSignature[] = [
  { beats: 2, noteValue: 4, name: '2/4 March' },
  { beats: 3, noteValue: 4, name: '3/4 Waltz' },
  { beats: 4, noteValue: 4, name: '4/4 Standard' },
  { beats: 5, noteValue: 4, name: '5/4 Odd Time' },
  { beats: 6, noteValue: 8, name: '6/8 Compound' },
  { beats: 7, noteValue: 8, name: '7/8 Progressive' },
];

const SOUND_PRESETS: { type: SoundType; name: string; desc: string }[] = [
  { type: 'woodblock', name: 'Woodblock', desc: 'Acoustic resonant percussion' },
  { type: 'digital', name: 'Digital Click', desc: 'Crisp electronic pulse' },
  { type: 'beep808', name: '808 Pop', desc: 'Punchy low-transient pop' },
  { type: 'rimshot', name: 'Rimshot', desc: 'Dual-harmonic metal strike' },
];

const SUBDIVISIONS: { type: Subdivision; factor: number; label: string; notation: string }[] = [
  { type: 'quarter', factor: 1, label: 'Quarter', notation: '1/4' },
  { type: 'eighth', factor: 2, label: 'Eighth', notation: '1/8' },
  { type: 'triplet', factor: 3, label: 'Triplet', notation: '1/3' },
  { type: 'sixteenth', factor: 4, label: '16th', notation: '1/16' },
];

export const MetronomeDemo: React.FC<MetronomeDemoProps> = ({
  isPlaying,
  onTogglePlay,
  isMuted,
  onToggleMute,
  bpm,
  setBpm,
}) => {
  const [activeBeat, setActiveBeat] = useState<number>(0);
  const [isAccentFlash, setIsAccentFlash] = useState<boolean>(false);
  const [timeSig, setTimeSig] = useState<TimeSignature>(TIME_SIGNATURES[2]); // 4/4
  const [subdivision, setSubdivision] = useState<Subdivision>('quarter');
  const [soundType, setSoundType] = useState<SoundType>('woodblock');
  const [flashEnabled, setFlashEnabled] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0.85);

  // Tap tempo state
  const tapTimesRef = useRef<number[]>([]);

  // Get Italian tempo marking
  const getTempoMarking = (val: number) => {
    if (val < 60) return { label: 'Largo', color: 'text-blue-400' };
    if (val < 76) return { label: 'Adagio', color: 'text-cyan-400' };
    if (val < 108) return { label: 'Andante', color: 'text-emerald-400' };
    if (val < 120) return { label: 'Moderato', color: 'text-amber-400' };
    if (val < 168) return { label: 'Allegro', color: 'text-orange-400' };
    if (val < 200) return { label: 'Presto', color: 'text-red-400' };
    return { label: 'Prestissimo', color: 'text-purple-400' };
  };

  const tempoInfo = getTempoMarking(bpm);

  // Setup Web Audio callbacks
  useEffect(() => {
    webAudioEngine.setOnBeatCallback((beatIndex, isAccent) => {
      setActiveBeat(beatIndex);
      if (isAccent && flashEnabled) {
        setIsAccentFlash(true);
        setTimeout(() => setIsAccentFlash(false), 90);
      }
    });
  }, [flashEnabled]);

  // Sync parameters to engine
  useEffect(() => {
    webAudioEngine.setBpm(bpm);
  }, [bpm]);

  useEffect(() => {
    webAudioEngine.setTimeSignature(timeSig.beats);
  }, [timeSig]);

  useEffect(() => {
    const subObj = SUBDIVISIONS.find(s => s.type === subdivision);
    webAudioEngine.setSubdivisionFactor(subObj?.factor || 1);
  }, [subdivision]);

  useEffect(() => {
    webAudioEngine.setSoundType(soundType);
  }, [soundType]);

  useEffect(() => {
    webAudioEngine.setMuted(isMuted);
  }, [isMuted]);

  useEffect(() => {
    webAudioEngine.setVolume(volume);
  }, [volume]);

  // Tap tempo handler
  const handleTapTempo = useCallback(() => {
    const now = performance.now();
    const taps = tapTimesRef.current;

    // Reset if last tap was more than 2 seconds ago
    if (taps.length > 0 && now - taps[taps.length - 1] > 2000) {
      tapTimesRef.current = [now];
      return;
    }

    taps.push(now);
    if (taps.length > 5) taps.shift();

    if (taps.length > 1) {
      let totalDiff = 0;
      for (let i = 1; i < taps.length; i++) {
        totalDiff += taps[i] - taps[i - 1];
      }
      const avgDiff = totalDiff / (taps.length - 1);
      const calculatedBpm = Math.round(60000 / avgDiff);
      const clampedBpm = Math.max(40, Math.min(280, calculatedBpm));
      setBpm(clampedBpm);
    }
  }, [setBpm]);

  // Quick adjust step
  const adjustBpm = (delta: number) => {
    setBpm(Math.max(40, Math.min(280, bpm + delta)));
  };

  return (
    <section id="metronome-demo" className="pt-6 pb-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>Interactive Web Audio Simulator</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Metronome Pro <span className="gradient-text-cyan">Live Playground</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Experience the zero-jitter timing engine, dynamic sound synthesizer, and beat visualization built for musicians and audio professionals.
        </p>
      </div>

      {/* Main Hardware-Style Instrument Shell */}
      <div className={`relative rounded-3xl p-6 sm:p-8 lg:p-10 glass-panel-glow border transition-all duration-300 ${
        isAccentFlash ? 'border-cyan-400 bg-cyan-950/30 shadow-neon-cyan' : 'border-slate-800 bg-brand-dark/95'
      }`}>
        
        {/* Accent Flash Strobe Layer */}
        {isAccentFlash && flashEnabled && (
          <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 pointer-events-none transition-opacity duration-100" />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Central Dial & BPM Controller (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center space-y-6">
            
            {/* Beat Lights Indicator Bar */}
            <div className="flex items-center gap-3 sm:gap-4 p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 shadow-inner">
              {Array.from({ length: timeSig.beats }).map((_, idx) => {
                const isActive = isPlaying && activeBeat === idx;
                const isDownbeat = idx === 0;

                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-1.5 transition-all duration-100"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-100 ${
                        isActive
                          ? isDownbeat
                            ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-neon-amber scale-110 border-2 border-amber-300'
                            : 'bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-950 shadow-neon-cyan scale-105 border-2 border-cyan-300'
                          : isDownbeat
                          ? 'bg-slate-900 border border-amber-500/30 text-amber-400/60'
                          : 'bg-slate-900 border border-slate-800 text-slate-500'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      {isDownbeat ? 'ACCENT' : 'BEAT'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Central BPM Display with Tempo Tag */}
            <div className="flex flex-col items-center space-y-2 relative group">
              <div className="text-[11px] uppercase tracking-widest font-mono text-slate-400 flex items-center gap-2">
                <span>TEMPO SPEED</span>
                <span className={`px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 font-bold ${tempoInfo.color}`}>
                  {tempoInfo.label}
                </span>
              </div>

              {/* Huge Numeric BPM Display */}
              <div className="relative font-display font-extrabold text-7xl sm:text-8xl tracking-tighter text-white select-none flex items-baseline">
                <span className="gradient-text-cyan">{bpm}</span>
                <span className="text-xl sm:text-2xl font-mono text-slate-500 ml-2 font-normal">BPM</span>
              </div>

              {/* Slider Scrub Bar */}
              <div className="w-full max-w-md px-2 pt-2">
                <input
                  type="range"
                  min="40"
                  max="280"
                  value={bpm}
                  onChange={(e) => setBpm(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>40 Largo</span>
                  <span>120 Mod</span>
                  <span>200 Presto</span>
                  <span>280 Max</span>
                </div>
              </div>
            </div>

            {/* Stepper Buttons & Tap Tempo */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
              <button
                onClick={() => adjustBpm(-5)}
                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 font-mono text-xs hover:text-white transition-colors"
              >
                -5
              </button>
              <button
                onClick={() => adjustBpm(-1)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 font-mono text-xs hover:text-white transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>

              {/* TAP TEMPO BUTTON */}
              <button
                onClick={handleTapTempo}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 hover:border-amber-400 text-amber-300 font-bold font-mono text-xs hover:shadow-neon-amber transition-all flex items-center gap-2 active:scale-95"
              >
                <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>TAP TEMPO</span>
              </button>

              <button
                onClick={() => adjustBpm(1)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 font-mono text-xs hover:text-white transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                onClick={() => adjustBpm(5)}
                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 font-mono text-xs hover:text-white transition-colors"
              >
                +5
              </button>
            </div>

            {/* MAIN PLAY / PAUSE TRIGGER */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onTogglePlay}
                className={`px-10 py-4 rounded-2xl font-display font-extrabold text-base sm:text-lg transition-all duration-300 flex items-center gap-3 shadow-xl active:scale-98 ${
                  isPlaying
                    ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-rose-500/30 hover:from-red-400 hover:to-rose-500'
                    : 'bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 text-slate-950 shadow-neon-cyan hover:shadow-cyan-400/60'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-6 h-6 fill-current" />
                    <span>STOP ENGINE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6 fill-current" />
                    <span>START METRONOME</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* RIGHT: Controls & Sound Settings (5 cols) */}
          <div className="lg:col-span-5 space-y-6 bg-slate-950/60 p-5 sm:p-6 rounded-2xl border border-slate-800/80">
            
            {/* Time Signature Selector */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between mb-2">
                <span>Time Signature</span>
                <span className="text-cyan-400 font-bold">{timeSig.name}</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SIGNATURES.map((ts) => (
                  <button
                    key={ts.name}
                    onClick={() => setTimeSig(ts)}
                    className={`py-2 px-3 rounded-xl border text-xs font-mono font-medium transition-all ${
                      timeSig.name === ts.name
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-neon-cyan'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {ts.beats}/{ts.noteValue}
                  </button>
                ))}
              </div>
            </div>

            {/* Subdivisions */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between mb-2">
                <span>Subdivision</span>
                <span className="text-amber-400 font-bold">{subdivision}</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {SUBDIVISIONS.map((sub) => (
                  <button
                    key={sub.type}
                    onClick={() => setSubdivision(sub.type)}
                    className={`py-2 px-2 rounded-xl border text-xs font-mono font-medium transition-all ${
                      subdivision === sub.type
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-neon-amber'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {sub.notation}
                  </button>
                ))}
              </div>
            </div>

            {/* Synthesizer Sound Engine Selector */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between mb-2">
                <span>Sound Synthesis</span>
                <span className="text-purple-400 font-bold">{soundType}</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SOUND_PRESETS.map((snd) => (
                  <button
                    key={snd.type}
                    onClick={() => setSoundType(snd.type)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      soundType === snd.type
                        ? 'bg-purple-500/20 border-purple-400 text-purple-200 shadow-neon-purple'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{snd.name}</div>
                    <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{snd.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Volume & Flash Options */}
            <div className="pt-2 border-t border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Accent Screen Flash</span>
                <button
                  onClick={() => setFlashEnabled(!flashEnabled)}
                  className={`px-2.5 py-1 rounded-lg border text-xs transition-colors ${
                    flashEnabled 
                      ? 'bg-cyan-950 border-cyan-500/50 text-cyan-300' 
                      : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  {flashEnabled ? 'ENABLED' : 'DISABLED'}
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <button onClick={onToggleMute} className="text-slate-300 hover:text-white">
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    if (isMuted) onToggleMute();
                    setVolume(parseFloat(e.target.value));
                  }}
                  className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
