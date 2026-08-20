import React, { useState } from 'react';
import { 
  Coffee, Copy, Check, QrCode, Smartphone, 
  ShieldCheck, Zap, Heart
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const DonateSection: React.FC = () => {
  const [copiedUpi, setCopiedUpi] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(150);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  // Compute coffee cup equivalent
  const coffeeCups = Math.max(1, Math.round(amount / 150));
  const getCoffeeDescription = (val: number) => {
    if (val <= 150) return '1 Warm Cup of Espresso ☕';
    if (val <= 300) return '2 Large Cappuccinos ☕☕';
    if (val <= 600) return '4 Cups & Late-Night Coding Fuel ☕☕☕☕';
    return 'Supercharged Coffee Feast for the Month! ☕⚡';
  };

  // Generate dynamic UPI URI based on slider amount
  const upiUri = `upi://pay?pa=${encodeURIComponent(PERSONAL_INFO.upiId)}&pn=${encodeURIComponent(PERSONAL_INFO.name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(`Buy ${coffeeCups} Coffee for Nikhil Andola`)}`;

  // Dynamic QR Code URL reflecting the exact slider value
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(upiUri)}`;

  return (
    <section id="donate" className="pt-6 pb-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-xs font-mono text-amber-400">
          <Coffee className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Support the Creator</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Buy Me a <span className="gradient-text-amber">Coffee</span> ☕
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          If Metronome Pro, my open-source code, or mobile engineering work brought you value, fuel my coding sessions with a cup of coffee!
        </p>
      </div>

      {/* Main Card Container */}
      <div className="rounded-3xl glass-panel-glow border border-amber-500/30 bg-brand-dark/95 p-6 sm:p-10 relative overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Dynamic UPI QR Code (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-center space-y-4">
            
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400">
              <QrCode className="w-4 h-4" />
              <span>Instant QR Scan & Pay</span>
            </div>

            {/* QR Code Container with Amber Glow Frame */}
            <div className="p-3 bg-white rounded-2xl shadow-neon-amber border-2 border-amber-400/80 inline-block transition-transform hover:scale-105">
              <img
                src={qrCodeUrl}
                alt={`UPI QR Code to Buy Coffee for Nikhil Andola - ₹${amount}`}
                width={200}
                height={200}
                className="w-44 h-44 sm:w-48 sm:h-48 object-contain rounded-xl"
                loading="lazy"
              />
            </div>

            <div className="space-y-1">
              <div className="text-sm font-mono text-slate-200 font-bold">
                Amount: <span className="text-amber-400 text-base">₹{amount} INR</span>
              </div>
              <p className="text-[11px] font-mono text-slate-500">
                Scan with Google Pay • PhonePe • Paytm • BHIM • Any UPI App
              </p>
            </div>

            {/* Direct Mobile UPI Intent Link Button */}
            <a
              href={upiUri}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold font-mono text-xs shadow-neon-amber transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <Smartphone className="w-4 h-4 text-slate-950" />
              <span>Pay ₹{amount} via Mobile UPI App</span>
            </a>

          </div>

          {/* Right Column: Amount Slider & Coffee Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header / Pitch */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-amber-950/50 border border-amber-500/30 text-xs font-mono text-amber-300">
                <Heart className="w-3.5 h-3.5 fill-current text-amber-400" />
                <span>Fueling Independent Development</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Every Cup Keeps the Code Flowing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Choose how many cups of coffee you’d like to treat me to. Use the slider below to select any amount between <strong>₹150</strong> and <strong>₹1,000</strong>.
              </p>
            </div>

            {/* Interactive Amount Slider Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800/80 space-y-4">
              
              {/* Header with Selected Amount & Cups Badge */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Contribution Amount
                  </span>
                  <div className="text-xs text-amber-300 font-mono mt-0.5 font-medium">
                    {getCoffeeDescription(amount)}
                  </div>
                </div>
                <div className="flex items-baseline gap-1 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-xl text-amber-400 font-mono font-bold text-lg sm:text-xl">
                  <span>₹{amount}</span>
                  <span className="text-xs text-amber-500/80 font-normal">INR</span>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="150"
                  max="1000"
                  step="50"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
                />
                
                {/* Min / Max Labels */}
                <div className="flex justify-between text-xs font-mono text-slate-500">
                  <span>₹150 (Min)</span>
                  <span>₹300</span>
                  <span>₹500</span>
                  <span>₹750</span>
                  <span>₹1,000 (Max)</span>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[150, 300, 500, 750, 1000].map((val) => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      amount === val
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-neon-amber'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    ₹{val}
                  </button>
                ))}
              </div>

            </div>

            {/* UPI ID Display & Copy */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                UPI ID / VPA:
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-mono text-xs sm:text-sm font-bold text-amber-400 select-all truncate">
                  {PERSONAL_INFO.upiId}
                </div>
                <button
                  onClick={handleCopyUpi}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-white text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 active:scale-95"
                >
                  {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedUpi ? 'Copied!' : 'Copy UPI ID'}</span>
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct bank-to-bank settlement</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Instant QR scan via any UPI app</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
