import React from 'react';
import { MessageSquare, Zap, Layers } from 'lucide-react';

interface FeatureDeepWorkSectionProps {
  lang: 'ko' | 'en';
}

const FeatureDeepWorkSection: React.FC<FeatureDeepWorkSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "03. Key Feature 2",
      title: "Deep Work Environment",
      headline: "회의 대신, '맥락'이 있는 의사결정",
      desc: "불필요한 동기식 미팅을 제거하여 실무자의 몰입 시간을 확보합니다. 'NoMeet' 모듈을 통해 모든 논의를 기록하고 맥락 기반으로 비동기 소통합니다.",
      subFeatures: [
        { icon: MessageSquare, text: "Async Discussion (비동기 토론)" },
        { icon: Zap, text: "몰입 시간(Deep Work) 3배 증가" },
        { icon: Layers, text: "히스토리가 남는 맥락 기반 결정" }
      ]
    },
    en: {
      section: "03. Key Feature 2",
      title: "Deep Work Environment",
      headline: "Context-driven Decisions, Not Meetings",
      desc: "Eliminate unnecessary synchronous meetings to secure deep work time. 'NoMeet' modules ensure context-based asynchronous communication.",
      subFeatures: [
        { icon: MessageSquare, text: "Async Discussion Modules" },
        { icon: Zap, text: "3x Increase in Deep Work Time" },
        { icon: Layers, text: "Context-rich Decision History" }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2">
              <span className="text-accent-purple font-bold tracking-widest uppercase text-sm mb-3 block">{t.section}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{t.title}</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-400 mb-8">{t.headline}</h3>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10">
                  {t.desc}
              </p>
              
              <div className="space-y-4">
                  {t.subFeatures.map((sub, idx) => {
                      const Icon = sub.icon;
                      return (
                          <div key={idx} className="flex items-center gap-4 p-5 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-accent-purple/30 transition-colors">
                              <div className="p-2 bg-slate-800 rounded-lg text-accent-purple">
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
                   <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent-purple/20 rounded-full blur-[100px] -z-10"></div>
                   
                   <div className="w-full space-y-6 max-w-md mx-auto">
                        <div className="flex items-center gap-3 mb-6 p-4 bg-red-500/10 rounded-2xl border border-red-500/20 w-fit mx-auto lg:mx-0">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                          <span className="text-base font-bold text-red-200 uppercase">Meeting Cancelled</span>
                        </div>
                        
                        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-700 relative shadow-2xl">
                          <div className="absolute -top-4 right-6 bg-accent-purple text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">Async Thread</div>
                          
                          <div className="flex gap-5 mb-6">
                              <div className="w-12 h-12 rounded-full bg-slate-700 flex-shrink-0"></div>
                              <div>
                                  <div className="text-white font-bold text-lg">Sarah (PM)</div>
                                  <div className="text-slate-400 mt-2 text-base leading-relaxed">디자인 시안 A안으로 확정해도 될까요? @DesignTeam</div>
                              </div>
                          </div>
                          
                          <div className="flex gap-5 pl-16 border-l-2 border-slate-800">
                              <div className="w-10 h-10 rounded-full bg-slate-700 flex-shrink-0"></div>
                              <div>
                                  <div className="text-white font-bold text-base">Mike (Designer)</div>
                                  <div className="text-slate-400 mt-1 text-base">네, 피드백 반영 완료했습니다. 바로 진행 가능합니다. 👍</div>
                              </div>
                          </div>
                        </div>

                        <div className="text-center text-lg text-green-400 font-mono mt-4 font-bold">
                            Saved 1 hour meeting time
                        </div>
                   </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default FeatureDeepWorkSection;