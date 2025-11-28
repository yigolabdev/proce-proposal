import React from 'react';
import { HelpCircle, Layers, Target } from 'lucide-react';

interface ProblemTrapSectionProps {
  lang: 'ko' | 'en';
}

const ProblemTrapSection: React.FC<ProblemTrapSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "01. The Insight",
      title: "데이터는 있지만, '인사이트'는 없다",
      subtitle: "단순한 숫자를 쫓다가 정작 중요한 목표를 놓치고 있지 않습니까?",
      trap: {
        title: "측정의 함정 (Measurement Trap)",
        output: {
          label: "Output (산출물)",
          question: "할 일을 완료했는가?",
          status: "대부분의 조직이 체크하는 것"
        },
        outcome: {
          label: "Outcome (성과)",
          question: "목표에 가까워졌는가?",
          status: "정작 중요한 것"
        },
        desc: "완료된 태스크의 개수는 많지만, 그것이 실제로 조직의 핵심 목표 달성에 얼마나 기여했는지는 불명확합니다."
      },
      quote: <>"미래의 리스크를 예측하고 나아갈 방향을 제시해 줄 <br/><span className="text-brand-400 font-bold not-italic decoration-brand-500 underline decoration-2 underline-offset-4">나침반</span>이 절실히 필요합니다."</>
    },
    en: {
      section: "01. The Insight",
      title: "Data Everywhere, Insights Nowhere",
      subtitle: "Are you chasing numbers but missing the goal?",
      trap: {
        title: "The Measurement Trap",
        output: {
          label: "Output",
          question: "Did we finish the task?",
          status: "What most orgs check"
        },
        outcome: {
          label: "Outcome",
          question: "Did we approach the goal?",
          status: "What actually matters"
        },
        desc: "Lots of tasks are completed, but their contribution to the core strategic goals remains unclear."
      },
      quote: <>"We desperately need a <span className="text-brand-400 font-bold not-italic decoration-brand-500 underline decoration-2 underline-offset-4">compass</span> to predict future risks and guide our path forward."</>
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center py-12 lg:py-20">
      <div className="text-center mb-8 lg:mb-12 flex-none">
        <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3 block">{t.section}</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="flex-1 flex flex-col justify-center min-h-0 w-full max-w-6xl mx-auto">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden shadow-2xl w-full">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] -z-10"></div>
             
             <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8 lg:mb-10">
                {/* Output (Bad) */}
                <div className="flex-1 w-full p-6 lg:p-8 bg-slate-950/50 rounded-2xl border border-slate-800 text-center opacity-60 grayscale hover:opacity-100 transition-opacity">
                    <div className="mx-auto w-12 h-12 lg:w-14 lg:h-14 bg-slate-800 rounded-full flex items-center justify-center mb-4 lg:mb-6 text-slate-400">
                        <HelpCircle size={24} className="lg:w-7 lg:h-7" />
                    </div>
                    <div className="text-xs lg:text-sm text-slate-500 uppercase font-bold tracking-wider mb-2">{t.trap.output.label}</div>
                    <div className="text-lg lg:text-2xl font-bold text-slate-300 mb-2">"{t.trap.output.question}"</div>
                    <div className="text-sm text-slate-500">{t.trap.output.status}</div>
                </div>

                {/* Arrow */}
                <div className="hidden md:block text-slate-600">
                    <Layers size={32} className="rotate-90 md:rotate-0 lg:w-10 lg:h-10" />
                </div>

                {/* Outcome (Good) */}
                <div className="flex-1 w-full p-8 lg:p-10 bg-brand-900/20 rounded-2xl border border-brand-500/50 text-center relative shadow-[0_0_30px_rgba(14,165,233,0.1)] transform md:scale-105">
                    <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 bg-brand-500 text-white text-[10px] lg:text-xs font-bold px-3 py-1 lg:px-4 lg:py-1.5 rounded-full shadow-lg">CORE VALUE</div>
                    <div className="mx-auto w-14 h-14 lg:w-20 lg:h-20 bg-brand-500 rounded-full flex items-center justify-center mb-4 lg:mb-6 text-white shadow-lg shadow-brand-500/30 animate-pulse-slow">
                        <Target size={30} className="lg:w-9 lg:h-9" />
                    </div>
                    <div className="text-xs lg:text-sm text-brand-400 uppercase font-bold tracking-wider mb-2 lg:mb-3">{t.trap.outcome.label}</div>
                    <div className="text-xl lg:text-3xl font-bold text-white mb-2 lg:mb-3">"{t.trap.outcome.question}"</div>
                    <div className="text-sm lg:text-base text-brand-200">{t.trap.outcome.status}</div>
                </div>
             </div>
             
             <p className="text-center text-slate-400 text-sm lg:text-lg max-w-3xl mx-auto leading-relaxed border-t border-slate-800 pt-6 lg:pt-8">
                {t.trap.desc}
             </p>
        </div>
      </div>

      <div className="mt-8 lg:mt-12 text-center max-w-4xl mx-auto flex-none">
          <h3 className="text-xl md:text-3xl font-serif italic text-slate-200 leading-relaxed">
              {t.quote}
          </h3>
      </div>
    </div>
  );
};

export default ProblemTrapSection;