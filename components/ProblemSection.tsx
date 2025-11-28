import React from 'react';
import { EyeOff, Layers, BarChart3, AlertTriangle } from 'lucide-react';

interface ProblemSectionProps {
  lang: 'ko' | 'en';
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "01. The Problem",
      mainTitle: <>데이터는 쏟아지는데, <br /><span className="text-slate-500">왜 여전히 '감'으로 결정할까요?</span></>,
      items: [
        {
          title: "도구의 늪 (Tool Chaos)",
          subtitle: "Productivity Paradox",
          desc: "슬랙, 노션, 지라... 도구가 늘어날수록 오히려 정보는 파편화됩니다. 흩어진 데이터 속에서 조직의 진짜 현황은 보이지 않습니다."
        },
        {
          title: "전략의 실종 (Strategic Gap)",
          subtitle: "Execution Disconnect",
          desc: "경영진의 비전이 실무단까지 내려가지 않습니다. '열심히'는 하지만, '전략적으로' 일하고 있는지 아무도 확신하지 못합니다."
        },
        {
          title: "보이지 않는 위기 (Invisible Risk)",
          subtitle: "Blind Management",
          desc: "통합된 뷰가 없기에 문제는 항상 터지고 난 뒤에야 발견됩니다. 예측 불가능한 경영은 결국 막대한 비용 손실로 이어집니다."
        }
      ]
    },
    en: {
      section: "01. The Problem",
      mainTitle: <>Drowning in Data, <br /><span className="text-slate-500">Yet Deciding by Gut Feeling?</span></>,
      items: [
        {
          title: "Tool Chaos",
          subtitle: "Productivity Paradox",
          desc: "Slack, Notion, Jira... More tools mean more fragmentation. Amidst scattered data, the true state of the organization remains invisible."
        },
        {
          title: "Strategic Gap",
          subtitle: "Execution Disconnect",
          desc: "Executive vision doesn't reach the frontline. Everyone works 'hard', but no one is sure if they are working 'strategically'."
        },
        {
          title: "Invisible Risk",
          subtitle: "Blind Management",
          desc: "Without a unified view, problems are only found after they explode. Unpredictable management leads to massive opportunity costs."
        }
      ]
    }
  };

  const t = content[lang];
  const icons = [Layers, EyeOff, AlertTriangle];
  const styles = [
    { color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-500/20" },
    { color: "text-red-400", bg: "bg-red-400/10", border: "border-red-500/20" },
    { color: "text-slate-400", bg: "bg-slate-800", border: "border-slate-700" }
  ];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="mb-12 lg:mb-16 border-l-4 border-brand-500 pl-6">
        <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-2 block">{t.section}</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          {t.mainTitle}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {t.items.map((item, index) => {
          const Icon = icons[index];
          const style = styles[index];
          return (
            <div 
              key={index} 
              className={`p-8 lg:p-10 rounded-3xl bg-slate-900/50 border ${style.border} hover:bg-slate-900 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group shadow-lg`}
            >
              <div>
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 ${style.bg} ${style.color} group-hover:scale-110 transition-transform shadow-inner`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight break-keep">{item.title}</h3>
                <p className="text-xs lg:text-sm font-bold text-slate-500 mb-6 uppercase tracking-wide">{item.subtitle}</p>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg break-keep">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProblemSection;