import React from 'react';
import { Bot, Search } from 'lucide-react';

interface AIAdvisorSectionProps {
  lang: 'ko' | 'en';
}

const AIAdvisorSection: React.FC<AIAdvisorSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      tag: "AI Strategic Advisor",
      title: <>경영진을 위한 <br /><span className="text-accent-purple">AI 전략 참모</span></>,
      desc: "단순한 대시보드를 넘어섭니다. AI가 과거 데이터를 학습하여 미래의 리스크를 예측하고, 최적의 액션 플랜을 제안합니다.",
      features: [
        { title: "Proactive Alerts", desc: "문제가 발생하기 전에 미리 경고하여 선제적 대응이 가능합니다." },
        { title: "Resource Analysis", desc: "조직의 시간과 인력이 어디에 쓰이고 있는지 정확히 파악하고 비효율을 제거합니다." },
        { title: "Opportunity Detection", desc: "시장의 시그널을 포착하여 새로운 기회를 제시합니다." }
      ],
      chat: {
        user: "현재 우리 핵심 프로젝트 A의 진행 상황은 어때?",
        ai: <>
          <span className="text-red-400 font-bold">주의가 필요합니다.</span> 현재 속도라면 마감이 2주 지연될 것으로 예측됩니다.
        </>,
        ai2: "운영 리소스의 40%가 비전략적 유지보수에 사용되고 있습니다. 리소스 재배치를 제안합니다.",
        btn: "리소스 분석 보고서 보기",
        input: "전략에 대해 물어보세요..."
      }
    },
    en: {
      tag: "AI Strategic Advisor",
      title: <>AI Strategic Advisor <br /><span className="text-accent-purple">for Executives</span></>,
      desc: "Beyond simple dashboards. AI learns from past data to predict future risks and propose optimal action plans.",
      features: [
        { title: "Proactive Alerts", desc: "Warns before problems occur, enabling preemptive response." },
        { title: "Resource Analysis", desc: "Identifies exactly where time and manpower are spent to eliminate inefficiencies." },
        { title: "Opportunity Detection", desc: "Captures market signals to suggest new opportunities." }
      ],
      chat: {
        user: "How is our core Project A progressing?",
        ai: <>
          <span className="text-red-400 font-bold">Attention needed.</span> At current pace, deadline is forecast to slip by 2 weeks.
        </>,
        ai2: "40% of operating resources are used on non-strategic maintenance. Resource reallocation suggested.",
        btn: "View Analysis Report",
        input: "Ask Proce about your strategy..."
      }
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[100px] -z-10"></div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left: Text Content */}
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 mb-6 lg:mb-8">
            <Bot size={14} className="text-accent-purple" />
            <span className="text-xs font-semibold text-accent-purple uppercase tracking-wider">
              {t.tag}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
            {t.title}
          </h2>
          
          <p className="text-slate-300 text-lg lg:text-xl mb-10 lg:mb-12 leading-relaxed">
            {t.desc}
          </p>

          <div className="space-y-6 lg:space-y-8">
            {t.features.map((feature, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="mt-1 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-lg lg:text-xl font-bold text-white shrink-0">
                    {idx + 1}
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-base lg:text-lg">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Chat UI Mockup */}
        <div className="lg:w-1/2 w-full">
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 lg:p-8 shadow-2xl relative transform hover:scale-[1.02] transition-transform duration-500">
             {/* Chat Header */}
             <div className="flex items-center gap-4 border-b border-slate-800 pb-6 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-500 to-accent-purple p-[2px]">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                      <Bot size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Proce AI</h3>
                  <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-sm text-slate-400">Online & Analyzing</span>
                  </div>
                </div>
             </div>

             {/* Chat Messages */}
             <div className="space-y-6">
                <div className="flex gap-4 justify-end">
                    <div className="bg-brand-600 text-white px-6 py-4 rounded-3xl rounded-tr-none max-w-[85%] text-base lg:text-lg">
                        <p>{t.chat.user}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <Bot size={20} className="text-accent-purple" />
                    </div>
                    <div className="bg-slate-800 border border-slate-700 text-slate-200 px-6 py-4 rounded-3xl rounded-tl-none max-w-[90%]">
                        <p className="mb-4 text-base lg:text-lg">
                          {t.chat.ai}
                        </p>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 mb-4">
                           <div className="flex justify-between text-sm text-slate-400 mb-2">
                              <span>Progress</span>
                              <span>65%</span>
                           </div>
                           <div className="w-full h-2 bg-slate-700 rounded-full">
                              <div className="w-[65%] h-full bg-red-500 rounded-full"></div>
                           </div>
                        </div>
                        <p className="text-slate-300 text-base lg:text-lg">
                           {t.chat.ai2}
                        </p>
                        <button className="mt-4 text-sm bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full transition-colors font-semibold">
                          {t.chat.btn}
                        </button>
                    </div>
                </div>
             </div>

             {/* Input Area (Visual only) */}
             <div className="mt-6 lg:mt-8 relative">
                <div className="w-full bg-slate-950 border border-slate-700 rounded-2xl py-4 px-6 text-slate-400 flex justify-between items-center">
                    <span>{t.chat.input}</span>
                    <div className="p-2 bg-brand-600 rounded-lg opacity-50">
                        <Search size={18} className="text-white" />
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisorSection;