import React, { useState, useEffect, useRef } from 'react';
import { Printer } from 'lucide-react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ProblemTrapSection from './components/ProblemTrapSection';
import SolutionSection from './components/SolutionSection';
import SystemArchitectureSection from './components/SystemArchitectureSection';
// import CoreValuesSection from './components/CoreValuesSection'; // Removed
import FeatureFrictionlessSection from './components/FeatureFrictionlessSection';
import FeatureDeepWorkSection from './components/FeatureDeepWorkSection';
import FeatureAutomationSection from './components/FeatureAutomationSection';
import DailyFlowSection from './components/DailyFlowSection';
import OnboardingSection from './components/OnboardingSection';
import DashboardPreview from './components/DashboardPreview';
import AIAdvisorSection from './components/AIAdvisorSection';
import ComparisonSection from './components/ComparisonSection';
import RoadmapSection from './components/RoadmapSection';
import MarketSection from './components/MarketSection';
import BusinessModelSection from './components/BusinessModelSection';
import EarlyAdoptionSection from './components/EarlyAdoptionSection';
import Footer from './components/Footer';

interface SlideWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, id, className = "" }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
             // Optional: remove 'active' to re-trigger animation on scroll back up
             // entry.target.classList.remove('active'); 
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of the slide is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={`h-screen w-full flex flex-col justify-center relative snap-center snap-always border-b border-slate-900/50 overflow-hidden ${className}`}
    >
      <div className="reveal-content w-full h-full">
        {children}
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Use useRef to persist scrolling state across renders without causing re-renders
  const isScrolling = useRef(false);

  const totalSlides = 17; // Increased due to splitting features

  // Handle Wheel & Touch for Full Page Scrolling
  useEffect(() => {
    const container = document.getElementById('slide-container');
    if (!container) return;

    let touchStartY = 0;

    const scrollToSlide = (index: number) => {
        if (index < 0 || index >= totalSlides) return;
        
        // Prevent scroll if lock is active
        if (isScrolling.current) return;

        isScrolling.current = true;
        setCurrentSlide(index);
        container.style.transform = `translateY(-${index * 100}vh)`;
        
        // Cooldown to prevent double skips (especially for inertial scrolling)
        setTimeout(() => { 
            isScrolling.current = false; 
        }, 1000); 
    };

    const handleWheel = (e: WheelEvent) => {
        if (isScrolling.current) return;

        // Threshold to ignore tiny movements (touchpad jitter)
        if (Math.abs(e.deltaY) < 20) return;

        if (e.deltaY > 0) {
            scrollToSlide(currentSlide + 1);
        } else if (e.deltaY < 0) {
            scrollToSlide(currentSlide - 1);
        }
    };

    const handleTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
        if (isScrolling.current) return;
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > 50) { // Swipe Threshold
            if (diff > 0) {
                 scrollToSlide(currentSlide + 1);
            } else {
                 scrollToSlide(currentSlide - 1);
            }
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (isScrolling.current) return;
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            scrollToSlide(currentSlide + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            scrollToSlide(currentSlide - 1);
        }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, totalSlides]);

  return (
    <div className="bg-slate-950 text-white selection:bg-brand-500 selection:text-white font-sans antialiased overflow-hidden h-screen w-full relative">
      
      {/* Fixed UI: Language & Progress */}
      <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* Language Toggle */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-full shadow-2xl">
          <button 
            onClick={() => setLang('ko')} 
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
              lang === 'ko' 
                ? 'bg-brand-600 text-white shadow-lg' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            한글
          </button>
          <button 
            onClick={() => setLang('en')} 
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
              lang === 'en' 
                ? 'bg-brand-600 text-white shadow-lg' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ENG
          </button>
        </div>

        {/* Print Button */}
        <button
            onClick={() => window.print()}
            className="p-2 text-slate-400 hover:text-white bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-full shadow-2xl transition-all duration-300 hover:bg-slate-800"
            title="PDF 저장 / 인쇄"
            aria-label="Print"
        >
            <Printer size={16} />
        </button>

        {/* Slide Indicator */}
        <div className="bg-slate-900/50 backdrop-blur rounded-full px-3 py-1 border border-slate-800 text-xs font-mono text-slate-500 hidden md:block transition-all">
          Slide <span className="text-white font-bold">{currentSlide + 1}</span> / {totalSlides}
        </div>
      </div>

      {/* Main Slide Container */}
      <div id="slide-container" className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]">

        {/* Slide 1: Cover */}
        <SlideWrapper id="cover">
            <Hero lang={lang} />
        </SlideWrapper>

        {/* Slide 2: The Problem (Pain Points) */}
        <SlideWrapper id="problem">
            <ProblemSection lang={lang} />
        </SlideWrapper>

        {/* Slide 3: The Insight (Measurement Trap) */}
        <SlideWrapper id="problem-trap">
            <ProblemTrapSection lang={lang} />
        </SlideWrapper>

        {/* Slide 4: The Solution (Overview) */}
        <SlideWrapper id="solution">
            <SolutionSection lang={lang} />
        </SlideWrapper>

        {/* Slide 5: System Architecture */}
        <SlideWrapper id="architecture">
            <SystemArchitectureSection lang={lang} />
        </SlideWrapper>

        {/* Slide 6: Feature 1 - Frictionless */}
        <SlideWrapper id="feature-frictionless">
            <FeatureFrictionlessSection lang={lang} />
        </SlideWrapper>

        {/* Slide 7: Feature 2 - Deep Work */}
        <SlideWrapper id="feature-deepwork">
            <FeatureDeepWorkSection lang={lang} />
        </SlideWrapper>

        {/* Slide 8: Feature 3 - Automation */}
        <SlideWrapper id="feature-automation">
            <FeatureAutomationSection lang={lang} />
        </SlideWrapper>

        {/* Slide 9: User Journey (Daily Flow) */}
        <SlideWrapper id="daily-flow" className="bg-slate-900/30">
            <DailyFlowSection lang={lang} />
        </SlideWrapper>

        {/* Slide 10: Adoption (Zero Friction) */}
        <SlideWrapper id="onboarding">
            <OnboardingSection lang={lang} />
        </SlideWrapper>
        
        {/* Slide 11: Product Preview (Dashboard) */}
        <SlideWrapper id="dashboard" className="bg-slate-900/50">
            <DashboardPreview lang={lang} />
        </SlideWrapper>

        {/* Slide 12: AI Features */}
        <SlideWrapper id="ai-advisor">
            <AIAdvisorSection lang={lang} />
        </SlideWrapper>

        {/* Slide 13: Market Comparison */}
        <SlideWrapper id="comparison">
            <ComparisonSection lang={lang} />
        </SlideWrapper>

        {/* Slide 14: Roadmap */}
        <SlideWrapper id="roadmap">
            <RoadmapSection lang={lang} />
        </SlideWrapper>

        {/* Slide 15: Market Opportunity */}
        <SlideWrapper id="market">
            <MarketSection lang={lang} />
        </SlideWrapper>

        {/* Slide 16: Business Model */}
        <SlideWrapper id="business">
            <BusinessModelSection lang={lang} />
        </SlideWrapper>

        {/* Slide 17: Closing & Contact */}
        <SlideWrapper id="closing">
            <div className="h-full flex flex-col">
                <div className="flex-1 flex flex-col justify-end">
                    <EarlyAdoptionSection lang={lang} />
                </div>
                <div className="flex-none">
                    <Footer lang={lang} />
                </div>
            </div>
        </SlideWrapper>
      </div>

    </div>
  );
};

export default App;