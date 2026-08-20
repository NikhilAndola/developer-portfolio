import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { AudioVisualizerCanvas } from './components/AudioVisualizerCanvas';
import { Hero } from './components/Hero';
import { SkillsGrid } from './components/SkillsGrid';
import { MetronomeDemo } from './components/MetronomeDemo';
import { ProjectDeepDive } from './components/ProjectDeepDive';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { PolyrhythmVisualizer } from './components/PolyrhythmVisualizer';
import { SocialConnect } from './components/SocialConnect';
import { DonateSection } from './components/DonateSection';
import { Footer } from './components/Footer';
import { webAudioEngine } from './audio/WebAudioEngine';

export function App() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [bpm, setBpm] = useState<number>(120);

  const handleTogglePlay = useCallback(() => {
    if (isPlaying) {
      webAudioEngine.stop();
      setIsPlaying(false);
    } else {
      webAudioEngine.start();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const handleToggleMute = useCallback(() => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    webAudioEngine.setMuted(nextMute);
  }, [isMuted]);

  const handleOpenContact = useCallback(() => {
    const el = document.getElementById('contact');
    if (el) {
      const targetContent = (el.firstElementChild as HTMLElement) || el;
      const navbarOffset = 78;
      const targetRect = targetContent.getBoundingClientRect();
      const offsetPosition = targetRect.top + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      window.history.pushState(null, '', '#contact');
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-bg text-slate-100 gradient-mesh overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Interactive Audio Waveform Canvas */}
      <AudioVisualizerCanvas isPlaying={isPlaying} bpm={bpm} />

      {/* Fixed Sticky Glass Navbar */}
      <Navbar
        isPlaying={isPlaying}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Area */}
      <main className="relative z-10 space-y-4 md:space-y-6">
        <Hero
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          bpm={bpm}
        />

        <SkillsGrid />

        <ProjectDeepDive />

        <MetronomeDemo
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          bpm={bpm}
          setBpm={setBpm}
        />

        <ArchitectureExplorer />

        <PolyrhythmVisualizer />

        <SocialConnect />

        <DonateSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
