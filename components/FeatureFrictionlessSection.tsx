import React from 'react';
import { FileCode, Trophy } from 'lucide-react';

interface FeatureFrictionlessSectionProps {
  lang: 'ko' | 'en';
}

const FeatureFrictionlessSection: React.FC<FeatureFrictionlessSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "03. Key Feature 1",
      title: "Frictionless Interface",
      headline: "입력은 최소화하고, 통합은 완벽하게",
      desc: "자연어 처리(NLP) 기술로 복잡한 양식 없이 업무를 기록합니다. 엑셀, 이메일 등 기존 파일과 연동되어 중복 입력을 제거합니다.",
      subFeatures: [
        { icon: FileCode, text: "Smart Input (NLP 기반 자동 분류)" },
        { icon: FileCode, text: "Excel/CSV 파일 호환" },
        { icon: Trophy, text: "Motivation (기여도 시각화 및 성취감)" }
      ]
    },
    en: {
      section: "03. Key Feature 1",
      title: "Frictionless Interface",
      headline: "Minimal Input, Perfect Integration",
      desc: "Log work without complex forms using NLP. Compatible with Excel/Files to eliminate duplicate entry.",
      subFeatures: [
        { icon: FileCode, text: "Smart Input (NLP Auto-classification)" },
        { icon: FileCode, text: "Excel/CSV Compatibility" },
        { icon: Trophy, text: "Motivation (Contribution Visibility)" }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2">
              <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3 block">{t.section}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{t.title}</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-400 mb-8">{t.headline}</h3>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10">
                  {t.desc}
              </p>
              
              <div className="space-y-4">
                  {t.subFeatures.map((sub, idx) => {
                      const Icon = sub.icon;
                      return (
                          <div key={idx} className="flex items-center gap-4 p-5 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-brand-500/30 transition-colors">
                              <div className="p-2 bg-slate-800 rounded-lg text-brand-400">
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
                   <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-900/20 rounded-full blur-[100px] -z-10"></div>
                   
                   <div className="w-full space-y-6 opacity-90 max-w-md mx-auto">
                      <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 shadow-xl transform translate-x-4">
                          <div className="text-xs text-brand-400 font-bold mb-2 uppercase tracking-wide">Natural Language Processing</div>
                          <div className="text-xl text-white font-medium mb-3">"Q3 마케팅 예산안 작성 완료"</div>
                          <div className="flex items-center gap-2 text-slate-500 text-sm">
                              <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center">↓</span>
                              <span>AI Analysis</span>
                          </div>
                      </div>
                      
                      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 shadow-xl border-l-4 border-l-green-500 transform -translate-x-4">
                          <div className="flex justify-between items-start mb-3">
                              <span className="text-xs font-bold text-slate-400 uppercase">New Task Created</span>
                              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-bold">Auto-tagged</span>
                          </div>
                          <div className="text-white text-xl font-bold mb-2">Q3 마케팅 예산안 작성</div>
                          <div className="text-base text-slate-400 flex gap-4">
                              <span>Category: <span className="text-slate-200">Finance</span></span>
                              <span>Due: <span className="text-slate-200">Today</span></span>
                          </div>
                      </div>
                   </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default FeatureFrictionlessSection;