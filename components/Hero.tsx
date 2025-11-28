import React from 'react';
import { ArrowDown, ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: 'ko' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = {
    ko: {
      tag: "AI Strategic OS",
      title: "데이터의 복잡함은 덜고, 성장의 확신을 더하다",
      subtitle: "흩어진 업무를 하나의 나침반으로 만들어, 조직이 나아갈 가장 빠른 길을 안내합니다.",
      cta: "Proce 시작하기"
    },
    en: {
      tag: "AI Strategic OS",
      title: "Simplify Data, Amplify Growth",
      subtitle: "Turning scattered work into a compass to guide your organization's fastest path to success.",
      cta: "Start Proce"
    }
  };

  const t = content[lang];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Effects: Minimal & Clean */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.08),_rgba(2,6,23,1)_70%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center relative">
        
        {/* Tag */}
        <div className="mb-8 animate-fade-in-up flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md shadow-lg" style={{animationDelay: '0.1s'}}>
            <Sparkles size={14} className="text-brand-400" />
            <span className="text-slate-300 font-semibold text-xs tracking-wide">
                {t.tag}
            </span>
        </div>

        {/* Main Title: Empathetic & Benefit-driven */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-white animate-fade-in-up drop-shadow-2xl whitespace-pre-line" style={{animationDelay: '0.2s'}}>
          {t.title}
        </h1>

        {/* Subtitle: Helpful Guidance */}
        <p className="text-lg md:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up break-keep" style={{animationDelay: '0.3s'}}>
          {t.subtitle}
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button className="group relative px-10 py-4 bg-brand-600 text-white rounded-full font-bold text-lg transition-all hover:bg-brand-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] flex items-center gap-3">
                <span>{t.cta}</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex flex-col items-center gap-3 opacity-30 hover:opacity-100 transition-opacity cursor-pointer animate-pulse">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Scroll</span>
                <ArrowDown size={16} className="text-slate-500" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;