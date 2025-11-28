import React from 'react';
import { Clock, CheckCircle2, TrendingUp, Users } from 'lucide-react';

interface DailyFlowSectionProps {
  lang: 'ko' | 'en';
}

const DailyFlowSection: React.FC<DailyFlowSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "03. Impact",
      title: "Proce가 바꾸는 조직의 하루",
      subtitle: "One Platform, Three Perspectives",
      timeline: [
        {
          time: "AM 09:00",
          role: "Makers",
          title: "오늘의 전략적 업무 확인",
          desc: "실무자는 AI가 추천하는 '전략적 업무'를 확인하여 우선순위를 명확히 합니다."
        },
        {
          time: "PM 02:00",
          role: "Managers",
          title: "병목 현상 감지 및 리소스 재배치",
          desc: "매니저는 대시보드에서 프로젝트 병목 현상을 감지하고 리소스를 즉시 재배치합니다."
        },
        {
          time: "PM 05:00",
          role: "Executives",
          title: "실시간 전략 회의 준비",
          desc: "경영진은 실시간 OKR 달성률, 리스크를 파악하고 5분 만에 회의 준비를 마칩니다."
        }
      ]
    },
    en: {
      section: "03. Impact",
      title: "A Day Transformed by Proce",
      subtitle: "One Platform, Three Perspectives",
      timeline: [
        {
          time: "AM 09:00",
          role: "Makers",
          title: "Check Today's Strategic Tasks",
          desc: "Makers check AI-recommended 'Strategic Tasks' and clarify priorities instantly."
        },
        {
          time: "PM 02:00",
          role: "Managers",
          title: "Detect Bottlenecks & Reallocate",
          desc: "Managers detect bottlenecks and immediately reallocate resources based on AI suggestions."
        },
        {
          time: "PM 05:00",
          role: "Executives",
          title: "Real-time Strategy Prep",
          desc: "Executives review real-time OKR progress and risks. Strategy meeting prep takes 5 minutes."
        }
      ]
    }
  };

  const t = content[lang];
  
  const styles = [
    { icon: CheckCircle2, color: "border-blue-500", text: "text-blue-400" },
    { icon: Users, color: "border-purple-500", text: "text-purple-400" },
    { icon: TrendingUp, color: "border-emerald-500", text: "text-emerald-400" }
  ];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="text-center mb-10 lg:mb-16">
          <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3 block">{t.section}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-slate-400 text-xl">{t.subtitle}</p>
      </div>

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Vertical Line for Desktop */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-8 lg:space-y-12">
          {t.timeline.map((item, index) => {
             const style = styles[index];
             const Icon = style.icon;
             return (
              <div key={index} className={`flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Time Badge */}
                <div className={`md:w-1/2 flex ${index % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 flex items-center gap-3 shadow-lg z-10 hover:scale-105 transition-transform">
                        <Clock size={18} className="text-slate-400" />
                        <span className="font-mono font-bold text-white text-lg">{item.time}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded bg-slate-800 ${style.text} uppercase`}>{item.role}</span>
                    </div>
                </div>

                {/* Center Node (Hidden on Mobile) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-4 border-slate-800 items-center justify-center z-10 shadow-lg">
                    <div className={`w-3 h-3 rounded-full ${style.text.replace('text', 'bg')}`}></div>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 w-full pl-10 md:pl-0">
                    <div className={`bg-slate-950 p-6 lg:p-8 rounded-2xl border-l-4 shadow-xl ${style.color} hover:bg-slate-900 transition-colors`}>
                        <div className="flex items-center gap-3 mb-3">
                            <Icon className={style.text} size={28} />
                            <h3 className="text-xl lg:text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-base">
                            {item.desc}
                        </p>
                    </div>
                </div>

              </div>
             );
          })}
        </div>
      </div>
    </div>
  );
};

export default DailyFlowSection;