import React from 'react';
import { Target, Zap, Microscope, GitMerge } from 'lucide-react';

interface SolutionSectionProps {
  lang: 'ko' | 'en';
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "02. Our Solution",
      desc: <>Proce는 단순한 협업 툴이 아닙니다. 태스크 관리를 넘어선 <strong>전략 실행 플랫폼</strong>입니다.<br/><br/>데이터를 분석하여 경영진에게 다음 단계의 방향(Direction)을 제시합니다.</>,
      features: [
        {
          title: "Strategic Alignment",
          desc: "조직의 최상위 목표(OKR)와 개인의 일상 업무(Task)를 실시간으로 연결하여 정렬합니다."
        },
        {
          title: "Bottom-up Visibility",
          desc: "가장 작은 단위의 실행 데이터가 모여 거대한 전략 달성률을 자동으로 시각화합니다."
        },
        {
          title: "Resource Intelligence",
          desc: "전략적 가치가 낮은 업무에 낭비되는 리소스를 감지하고 최적의 배분을 제안합니다."
        },
        {
          title: "Real-time Execution",
          desc: "계획에 머무르지 않고, 실제 실행(Execution) 데이터를 기반으로 살아있는 전략을 운용합니다."
        }
      ]
    },
    en: {
      section: "02. Our Solution",
      desc: <>Proce is not just a collaboration tool. It is a <strong>Strategic Execution Platform</strong> beyond task management.<br/><br/>It analyzes data to provide the next Direction for executives.</>,
      features: [
        {
          title: "Strategic Alignment",
          desc: "Real-time alignment between top-level objectives (OKRs) and individual daily tasks."
        },
        {
          title: "Bottom-up Visibility",
          desc: "Execution data from the smallest units aggregates to visualize strategic progress automatically."
        },
        {
          title: "Resource Intelligence",
          desc: "Detects resources wasted on low-value tasks and suggests optimal allocation."
        },
        {
          title: "Real-time Execution",
          desc: "Move beyond static planning. Operate a living strategy based on real-time execution data."
        }
      ]
    }
  };

  const t = content[lang];
  const icons = [GitMerge, Target, Microscope, Zap];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-24">
            
            <div className="xl:w-1/3">
                <div className="border-l-4 border-brand-500 pl-6 mb-8 lg:mb-10">
                    <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3 block">{t.section}</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                        Proce <br />
                        <span className="text-2xl md:text-3xl text-slate-400 font-normal mt-2 block">
                            The Strategic Intelligence Platform
                        </span>
                    </h2>
                </div>
                <p className="text-slate-300 text-lg lg:text-xl leading-relaxed">
                    {t.desc}
                </p>
            </div>

            <div className="xl:w-2/3 grid md:grid-cols-2 gap-6 w-full">
            {t.features.map((feature, idx) => {
                const Icon = icons[idx];
                return (
                  <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800/80 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl flex flex-col justify-center h-full">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-300 mb-6">
                          <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                      {feature.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-base lg:text-lg">
                      {feature.desc}
                      </p>
                  </div>
                );
            })}
            </div>
        </div>
    </div>
  );
};

export default SolutionSection;