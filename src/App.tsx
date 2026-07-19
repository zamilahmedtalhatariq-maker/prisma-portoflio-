/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useSmoothScroll, MagneticHover } from './lib/utils';
import {
  WordsPullUp,
  WordsPullUpMultiStyle,
  AnimatedLetter,
  FadeUp,
  AnimatedWordmark,
  cn
} from './components/animations';
import { FeatureCard } from './components/FeatureCard';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-500",
      scrolled ? "pt-4" : "pt-0"
    )}>
      <div className={cn(
        "flex items-center gap-4 sm:gap-8 md:gap-14 transition-all duration-500",
        scrolled 
          ? "bg-[#080808]/85 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl"
          : "bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 border border-t-0 border-white/5"
      )}>
        {['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries'].map((item) => (
          <MagneticHover key={item} strength={0.2}>
            <a href="#" className="font-ui text-[10px] sm:text-xs md:text-sm font-medium text-[#A0A0A0] hover:text-[#E8FF47] transition-colors whitespace-nowrap">
              {item}
            </a>
          </MagneticHover>
        ))}
      </div>
    </nav>
  );
}

export default function App() {
  useSmoothScroll();

  return (
    <main className="bg-[var(--color-v-bg)] min-h-screen text-[var(--color-v-text)] font-body selection:bg-[var(--color-v-primary)] selection:text-[var(--color-v-bg)]">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="h-[100svh] p-4 md:p-6 flex flex-col relative">
        <div className="flex-1 w-full relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-[var(--color-v-deep)] border border-[var(--color-v-border)]">
          
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 mix-blend-multiply" />
          
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(232,255,71,0.07)_0%,transparent_70%)] pointer-events-none" />

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
            
            <div className="md:w-8/12">
              <FadeUp delay={0.2} y={20}>
                <span className="eyebrow mb-6 md:mb-8">VELLRA STUDIOS</span>
              </FadeUp>
              
              <div className="hero-text-outer font-display text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] leading-[0.85] tracking-[-0.04em] font-bold uppercase">
                <div className="hero-text-background" aria-hidden="true">
                  Prisma
                </div>
                <div className="hero-text-foreground flex">
                  <WordsPullUp text="Prisma" showAsterisk={true} />
                </div>
              </div>
            </div>

            <div className="md:w-4/12 flex flex-col items-start gap-6 lg:gap-8 pb-4">
              <FadeUp delay={0.5}>
                <p className="text-[var(--color-v-muted)] text-sm sm:text-base leading-relaxed max-w-md">
                  Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.
                </p>
              </FadeUp>

              <FadeUp delay={0.7}>
                <MagneticHover strength={0.3}>
                  <button className="btn-primary group">
                    <span>Join the lab</span>
                    <div className="bg-[var(--color-v-bg)] text-[var(--color-v-primary)] rounded-full w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </MagneticHover>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="py-24 md:py-32 lg:py-40 px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-card max-w-5xl mx-auto text-center py-16 px-8 md:py-24 md:px-16 flex flex-col items-center">
          <span className="eyebrow mb-8">Visual arts</span>
          
          <WordsPullUpMultiStyle
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[1.05] tracking-tight text-[var(--color-v-text)] mb-12 max-w-4xl"
            segments={[
              { text: "I am Marcus Chen," },
              { text: " a self-taught director. ", className: "font-serif italic font-normal text-[var(--color-v-secondary)]" },
              { text: "I have skills in color grading, visual effects, and narrative design." }
            ]}
          />

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-v-muted)] font-body leading-relaxed">
              <AnimatedLetter>
                Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.
              </AnimatedLetter>
            </p>
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* SECTION 3: FEATURES */}
      <section className="py-24 md:py-32 lg:py-40 px-6 max-w-[1440px] mx-auto relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col gap-4">
          <span className="eyebrow">PROCESS</span>
          <WordsPullUpMultiStyle
            className="text-3xl sm:text-4xl md:text-5xl font-display max-w-2xl justify-start text-left"
            segments={[
              { text: "Studio-grade workflows for visionary creators." },
              { text: " Built for pure vision. Powered by art.", className: "text-[var(--color-v-muted)]" }
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:h-[480px]">
          
          <div className="glass-card p-0 h-80 sm:h-auto overflow-hidden relative group">
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-ui text-xl md:text-2xl font-semibold text-[var(--color-v-text)]">
                Your creative canvas.
              </h3>
            </div>
          </div>

          <FeatureCard
            index={1}
            num="01"
            title="Project Storyboard."
            iconUrl="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
            items={[
              "Visual timeline mapping",
              "Asset organization tags",
              "Director's notes sync",
              "Export to Premiere/Resolve"
            ]}
          />

          <FeatureCard
            index={2}
            num="02"
            title="Smart Critiques."
            iconUrl="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
            items={[
              "AI pacing analysis",
              "Collaborative creative notes",
              "Native frame.io integration"
            ]}
          />

          <FeatureCard
            index={3}
            num="03"
            title="Immersion Capsule."
            iconUrl="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
            items={[
              "Notification silencing",
              "Ambient focus soundscapes",
              "Calendar schedule syncing"
            ]}
          />

        </div>
      </section>
      
      <hr className="gradient-divider" />
      
      {/* SECTION 4: CTA SECTION */}
      <section className="py-32 md:py-48 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(200,185,154,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <FadeUp delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-8 tracking-tight font-bold max-w-4xl mx-auto">
            Where Craft Meets Code.
          </h2>
        </FadeUp>
        
        <FadeUp delay={0.3}>
          <p className="font-body text-lg text-[var(--color-v-muted)] max-w-xl mx-auto mb-10">
            Vellra Studios builds digital identities for fashion, hospitality, and technology brands across Pakistan and the diaspora. Not templates. Original work.
          </p>
        </FadeUp>
        
        <FadeUp delay={0.5}>
          <MagneticHover strength={0.4}>
            <button className="btn-primary text-lg px-8 py-4 group">
              <span>Start Your Project</span>
              <div className="bg-[var(--color-v-bg)] text-[var(--color-v-primary)] rounded-full w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </MagneticHover>
        </FadeUp>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--color-v-deep)] pt-24 pb-12 px-6 border-t border-[var(--color-v-border)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="w-full md:w-1/3">
            <span className="eyebrow mb-6">VELLRA STUDIOS</span>
            <p className="text-[var(--color-v-muted)] font-body max-w-xs mt-4">
              Where Vision Becomes Velocity. Premium agency + freelancer hybrid operating globally.
            </p>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-ui font-semibold text-sm tracking-wider text-[var(--color-v-text)] mb-2">SERVICES</h4>
              <a href="#" className="font-body text-[var(--color-v-muted)] hover:text-[var(--color-v-primary)] transition-colors text-sm">Digital Identity</a>
              <a href="#" className="font-body text-[var(--color-v-muted)] hover:text-[var(--color-v-primary)] transition-colors text-sm">Creative Engine</a>
              <a href="#" className="font-body text-[var(--color-v-muted)] hover:text-[var(--color-v-primary)] transition-colors text-sm">Platform Design</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-ui font-semibold text-sm tracking-wider text-[var(--color-v-text)] mb-2">AGENCY</h4>
              <a href="#" className="font-body text-[var(--color-v-muted)] hover:text-[var(--color-v-primary)] transition-colors text-sm">Our Work</a>
              <a href="#" className="font-body text-[var(--color-v-muted)] hover:text-[var(--color-v-primary)] transition-colors text-sm">The Collective</a>
              <a href="#" className="font-body text-[var(--color-v-muted)] hover:text-[var(--color-v-primary)] transition-colors text-sm">Careers</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-ui font-semibold text-sm tracking-wider text-[var(--color-v-text)] mb-2">CONNECT</h4>
              <a href="#" className="font-body text-[var(--color-v-muted)] hover:text-[var(--color-v-primary)] transition-colors text-sm">Twitter / X</a>
              <a href="#" className="font-body text-[var(--color-v-muted)] hover:text-[var(--color-v-primary)] transition-colors text-sm">Instagram</a>
              <a href="#" className="font-body text-[var(--color-v-muted)] hover:text-[var(--color-v-primary)] transition-colors text-sm">Dribbble</a>
            </div>
          </div>
        </div>

        {/* Mandatory Footer Wordmark */}
        <div className="w-full max-w-7xl mx-auto pt-12 border-t border-white/5 overflow-hidden flex flex-col items-center">
          <AnimatedWordmark 
            text="VELLRA" 
            className="text-[15vw] sm:text-[18vw] font-display font-bold leading-none tracking-tighter text-[var(--color-v-text)] opacity-90"
          />
          <div className="flex w-full justify-between items-center mt-8 font-ui text-xs text-[var(--color-v-muted)] uppercase tracking-widest">
            <span>© 2026 Vellra Studios</span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
