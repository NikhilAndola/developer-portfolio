import React, { useEffect, useRef } from 'react';
import { webAudioEngine } from '../audio/WebAudioEngine';

interface AudioVisualizerProps {
  isPlaying: boolean;
  bpm: number;
}

export const AudioVisualizerCanvas: React.FC<AudioVisualizerProps> = ({ isPlaying, bpm }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const analyser = webAudioEngine.getAnalyser();
      let freqData = new Uint8Array(32);
      if (analyser && isPlaying) {
        freqData = new Uint8Array(analyser.frequencyBinCount);
        // Cast analyser to any to prevent DOM / SharedArrayBuffer TS type mismatch
        (analyser as unknown as { getByteFrequencyData: (arr: Uint8Array) => void }).getByteFrequencyData(freqData);
      }

      // Draw subtle background glowing waves
      const speed = isPlaying ? (bpm / 60) * 0.03 : 0.01;
      phase += speed;

      const numWaves = 3;
      const centerY = height * 0.78;

      for (let w = 0; w < numWaves; w++) {
        ctx.beginPath();
        const wavePhase = phase + w * 1.2;
        const color = w === 0 ? 'rgba(0, 242, 254, 0.08)' : w === 1 ? 'rgba(138, 43, 226, 0.06)' : 'rgba(255, 153, 0, 0.05)';
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        const points = 40;
        const step = width / points;

        for (let i = 0; i <= points; i++) {
          const x = i * step;
          const energy = isPlaying && freqData[i % freqData.length] ? (freqData[i % freqData.length] / 255) * 35 : 0;
          const amp = (30 + energy) * (w + 1);
          const y = centerY + Math.sin((x * 0.003) + wavePhase) * amp + Math.cos((x * 0.002) - wavePhase * 0.5) * (amp * 0.4);

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, bpm]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
};
