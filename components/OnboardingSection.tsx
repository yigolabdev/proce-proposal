import React from 'react';
import { MousePointerClick, Zap, Rocket, BarChart } from 'lucide-react';

interface OnboardingSectionProps {
  lang: 'ko' | 'en';
}

const OnboardingSection: React.FC<OnboardingSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "04. Adoption",
      title: "Proce는 또 다른 업무가 되지 않습니다",
      subtitle: "기존의 비효율을 제거하고 효율성을 극대화하기 위해 설계되었습니다.",
      items: [
        {
          title: "제로 학습 곡선",
          desc: "첫날부터 자연스럽게 느껴지는 직관적인 인터페이스로, 별도의 교육 없이 바로 핵심 업무에 집중할 수 있습니다.",
          icon: MousePointerClick
        },
        {
          title: "최소한의 입력",
          desc: "복잡한 데이터 입력이나 설정 없이, AI가 대부분의 작업을 대신 처리하여 실무자의 부담을 획기적으로 줄여줍니다.",
          icon: Zap
        },
        {
          title: "신속한 도입과 확산",
          desc: "별도의 구축 기간 없이 즉시 사용 가능합니다. 작은 팀부터 시작하여 전사 조직으로 자연스럽게 확장할 수 있습니다.",
          icon: Rocket
        },
        {
          title: "관리 부담 감소",
          desc: "보고서 작성이나 데이터 취합 같은 관리 업무를 자동화하여, 조직의 귀중한 시간을 전략적 활동에 재배치합니다.",
          icon: BarChart
        }
      ]
    },
    en: {
      section: "04. Adoption",
      title: "Proce Won't Be Another Chore",
      subtitle: "Designed to eliminate inefficiencies and maximize productivity from day one.",
      items: [
        {
          title: "Zero Learning Curve",
          desc: "Intuitive interface that feels natural from day one. Focus on core work immediately without training.",
          icon: MousePointerClick
        },
        {
          title: "Minimal Input",
          desc: "No complex data entry. AI handles most of the processing, drastically reducing the burden on makers.",
          icon: Zap
        },
        {
          title: "Rapid Deployment",
          desc: "No setup time required. Start immediately with a single team and scale naturally to the entire enterprise.",
          icon: Rocket
        },
        {
          title: "Reduced Admin Burden",
          desc: "Automates management tasks like reporting and data aggregation, freeing up time for strategy.",
          icon: BarChart
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="text-center mb-16 lg:mb-20">
        <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3 block">{t.section}</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-xl">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {t.items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-slate-900/50 p-6 lg:p-8 rounded-3xl border border-slate-800 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-2 group shadow-xl h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-brand-400 mb-6 lg:mb-8 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{item.title}</h3>
              </div>
              <p className="text-slate-400 text-base lg:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnboardingSection;