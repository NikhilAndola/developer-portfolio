import { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsGrid } from './components/SkillsGrid';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SocialConnect } from './components/SocialConnect';
import { DonateSection } from './components/DonateSection';
import { Footer } from './components/Footer';

export function App() {
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
      
      {/* Fixed Sticky Glass Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Area */}
      <main className="relative z-10 space-y-4 md:space-y-6">
        <Hero onOpenContact={handleOpenContact} />

        <SkillsGrid />

        <FeaturedProjects />

        <SocialConnect />

        <DonateSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
