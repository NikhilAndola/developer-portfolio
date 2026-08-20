# ⚡ Nikhil Andola — Developer Portfolio & Brand Showcase

A high-performance, dark-mode-first developer portfolio and brand showcase built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Web Audio API**.

The portfolio highlights full-stack web and mobile engineering, spotlighting the **AndolaLabs Metronome** cross-platform flagship project built with React Native & Web Audio API.

---

## ✨ Features

- 🎛️ **Live Web Audio Metronome Simulator**: Zero-drift Lookahead scheduler synthesizing real woodblocks, electronic clicks, 808 beeps, and rimshots directly in the browser with tap tempo and time signature support.
- 💫 **Accent Screen Flash & Beat LED Visualizer**: Visual beat indicators with downbeat accent strobe.
- 🌀 **Polyrhythm Phasing Simulator**: Interactive dual concentric ring visualizer for 3:2, 4:3, and 5:4 cross-rhythms.
- 📱 **Metronome Pro Case Study**: Technical breakdown of real-time audio synchronization, native haptics, and atomic preset storage on iOS & Android.
- 💻 **Architecture Code Explorer**: Interactive syntax-highlighted code viewer showcasing clean architecture patterns.
- 🌐 **Social & Professional Profiles**: Verified GitHub and LinkedIn cards with direct profile links and interactive contact form.
- 🚀 **GitHub Pages Ready**: Configured relative asset paths and automated GitHub Actions workflow for zero-config hosting.

---

## 🛠️ Tech Stack

- **Framework**: React 18 / 19 + Vite + TypeScript
- **Styling**: Tailwind CSS + Custom Obsidian Glassmorphism System
- **Audio Synthesis**: Web Audio API (`AudioContext`, `BiquadFilterNode`, `GainNode`, `AnalyserNode`)
- **Icons**: Lucide React (`lucide-react`)
- **Hosting**: GitHub Pages (`gh-pages` / GitHub Actions)

---

## 🚀 Quick Start (Local Development)

1. **Install Dependencies**:
   ```bash
   cd developer-portfolio
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to GitHub Pages

### Method 1: Automatic GitHub Actions (Recommended)
1. Push this repository to GitHub (e.g. `https://github.com/nikhilandola/nikhilandola.github.io` or `https://github.com/nikhilandola/developer-portfolio`).
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Push to `main` branch. GitHub Actions will automatically build and publish your portfolio!

### Method 2: Manual Deploy with `gh-pages`
```bash
npm run deploy
```

---

## ⚙️ Customizing Links & Profile Data

All profile information, GitHub URL, LinkedIn URL, email, skills, and stats are centralized in:
📁 `src/data/portfolioData.ts`

