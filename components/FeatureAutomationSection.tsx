import React from 'react';
import { BrainCircuit, Activity, Layers } from 'lucide-react';

interface FeatureAutomationSectionProps {
  lang: 'ko' | 'en';
}

const FeatureAutomationSection: React.FC<FeatureAutomationSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "03. Key Feature 3",
      title: "Automated Intelligence",
      headline: "보고서는 AI가 1초 만에",
      desc: "주간 업무 보고, 팀 회고, 성과 분석 리포트를 AI가 자동으로 생성합니다. 관리 업무에 소모되던 시간을 실제 가치 있는 전략적 활동에 투자하세요.",
      subFeatures: [
        { icon: BrainCircuit, text: "주간/월간 리포트 자동 생성" },
        { icon: Activity, text: "팀 리소스 병목 자동 감지" },
        { icon: Layers, text: "관리자 업무 부담 80% 감소" }
      ]
    },
    en: {
      section: "03. Key Feature 3",
      title: "Automated Intelligence",
      headline: "Reports Generated in 1 Second",
      desc: "AI automatically generates weekly reports, team retrospectives, and performance analysis. Reallocate management time to strategic activities.",
      subFeatures: [
        { icon: BrainCircuit, text: "Auto-generated Weekly/Monthly Reports" },
        { icon: Activity, text: "Auto-detection of Resource Bottlenecks" },
        { icon: Layers, text: "80% Reduction in Admin Work" }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2">
              <span className="text-green-500 font-bold tracking-widest uppercase text-sm mb-3 block">{t.section}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{t.title}</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-400 mb-8">{t.headline}</h3>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10">
                  {t.desc}
              </p>
              
              <div className="space-y-4">
                  {t.subFeatures.map((sub, idx) => {
                      const Icon = sub.icon;
                      return (
                          <div key={idx} className="flex items-center gap-4 p-5 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-green-500/30 transition-colors">
                              <div className="p-2 bg-slate-800 rounded-lg text-green-500">
                                  <Icon size={24} />
                              </div>
                              <span className="text-white font-medium text-lg">{sub.text}</span>
                          </div>
                      );
                  })}
              </div>
          </div>

          <div className="lg:w-1/2 w-full">
              <div className="relative h-[400px] lg:h-[500px] bg-slate-950 rounded-3xl border border-slate-800 p-8 flex items-center justify-center overflow-hidden shadow-2xl relative">
                   <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-900/20 rounded-full blur-[100px] -z-10"></div>
                   
                   <div className="w-full max-w-md mx-auto p-6 bg-slate-900/80 backdrop-blur rounded-3xl border border-slate-700">
                      <div className="flex justify-between items-center mb-8">
                          <div className="flex gap-3">
                              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                              <div className="w-32 h-3 rounded-full bg-slate-700"></div>
                          </div>
                          <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded shadow-[0_0_10px_rgba(34,197,94,0.3)] animate-pulse">AI Generated</div>
                      </div>
                      
                      <div className="space-y-5 mb-10">
                          <div className="h-3 w-full bg-slate-800 rounded animate-pulse"></div>
                          <div className="h-3 w-3/4 bg-slate-800 rounded animate-pulse"></div>
                          <div className="h-3 w-5/6 bg-slate-800 rounded animate-pulse"></div>
                          <div className="h-3 w-2/3 bg-slate-800 rounded animate-pulse"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                          <div className="p-5 bg-slate-800/50 rounded-2xl border border-slate-700 text-center hover:border-green-500/50 transition-colors">
                              <div className="text-xs text-slate-500 mb-2 uppercase font-bold">Weekly Output</div>
                              <div className="text-3xl font-bold text-white">+24%</div>
                          </div>
                          <div className="p-5 bg-slate-800/50 rounded-2xl border border-slate-700 text-center hover:border-green-500/50 transition-colors">
                              <div className="text-xs text-slate-500 mb-2 uppercase font-bold">Focus Score</div>
                              <div className="text-3xl font-bold text-green-400">92</div>
                          </div>
                      </div>
                   </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default FeatureAutomationSection;