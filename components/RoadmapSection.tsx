import React from 'react';

interface RoadmapSectionProps {
  lang: 'ko' | 'en';
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      title: "From 'Managing Work' to 'Guiding Growth'",
      subtitle: "Proce와 함께 성장하는 3단계 로드맵",
      steps: [
        {
          phase: "Phase 1",
          title: "Alignment (정렬)",
          description: "개인의 업무와 조직의 전략을 연결하고, 전사적 가시성을 확보합니다. 모든 구성원이 'Why'를 이해하고 일하는 조직을 만듭니다."
        },
        {
          phase: "Phase 2",
          title: "Insight (통찰)",
          description: "AI 기반의 리스크 예측 및 의사결정 제안 기능을 고도화합니다. 단순 현황 파악을 넘어, 최적의 액션 플랜을 제시합니다."
        },
        {
          phase: "Phase 3",
          title: "Automation (자동화)",
          description: "조직 운영의 자율 주행(Autonomous Operations)을 실현합니다. AI가 리소스 배분, 우선순위 조정을 자동으로 수행합니다."
        }
      ]
    },
    en: {
      title: "From 'Managing Work' to 'Guiding Growth'",
      subtitle: "3-Step Growth Roadmap with Proce",
      steps: [
        {
          phase: "Phase 1",
          title: "Alignment",
          description: "Connect individual work to strategy and secure enterprise-wide visibility. Build an org where everyone understands 'Why'."
        },
        {
          phase: "Phase 2",
          title: "Insight",
          description: "Advance AI-based risk prediction and decision proposals. Go beyond status checks to suggest optimal action plans."
        },
        {
          phase: "Phase 3",
          title: "Automation",
          description: "Realize Autonomous Operations. AI automatically handles resource allocation and priority adjustments."
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="text-center mb-16 lg:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
        <p className="text-slate-400 text-xl">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-10 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-500/20 via-brand-500 to-brand-500/20 -z-0"></div>

        {t.steps.map((step, index) => (
          <div key={index} className="relative group">
            {/* Dot */}
            <div className="w-8 h-8 mx-auto bg-slate-900 border-4 border-brand-500 rounded-full mb-8 z-10 relative group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
            
            <div className="bg-slate-950 p-8 lg:p-10 rounded-3xl border border-slate-800 hover:border-brand-500/50 transition-colors h-full flex flex-col items-center shadow-xl hover:-translate-y-2 duration-300 min-h-[300px]">
              <span className="text-brand-500 font-bold text-sm uppercase tracking-widest mb-3">{step.phase}</span>
              <h3 className="text-2xl font-bold text-white mb-6">{step.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed text-center">
                  {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapSection;