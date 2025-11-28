import React from 'react';
import { PieChart, TrendingUp, Building2 } from 'lucide-react';

interface MarketSectionProps {
  lang: 'ko' | 'en';
}

const MarketSection: React.FC<MarketSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "06. Market",
      title: "타겟 시장 및 성장 기회",
      marketTitle: "Market Opportunity",
      target: {
        title: "Target Market",
        desc: <>
            <span className="text-white font-semibold">Scale-ups (50인 이상 성장 기업)</span>을 주요 타겟으로 합니다.
            이들은 빠르게 성장하면서 조직 복잡도가 증가하고, 전략적 실행 관리의 필요성을 절감하는 단계에 있습니다.
        </>
      },
      size: {
        title: "Market Size",
        desc: <>
            전 세계 협업 툴 시장과 BI(Business Intelligence) 시장의 교차점을 공략합니다. 
            이 시장은 <span className="text-white font-semibold">연평균 15% 이상 성장</span>하고 있으며, 
            특히 AI 기반 인사이트에 대한 수요가 폭발적으로 증가하고 있습니다.
        </>
      }
    },
    en: {
      section: "06. Market",
      title: "Target Market & Opportunity",
      marketTitle: "Market Opportunity",
      target: {
        title: "Target Market",
        desc: <>
            Primary target: <span className="text-white font-semibold">Scale-ups (50+ employees)</span>.
            These companies face increasing organizational complexity and acutely feel the need for strategic execution management.
        </>
      },
      size: {
        title: "Market Size",
        desc: <>
            Targeting the intersection of Collaboration Software and BI markets. 
            This market is growing at <span className="text-white font-semibold">CAGR 15%+</span>, 
            with explosive demand for AI-driven insights.
        </>
      }
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="lg:w-1/2">
                <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3 block">{t.section}</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t.title}</h2>
                <div className="w-24 h-1.5 bg-brand-500 rounded-full mb-10"></div>
            </div>

            <div className="lg:w-1/2 w-full">
                <div className="bg-slate-900/50 rounded-3xl p-8 lg:p-10 border border-slate-800 shadow-2xl">
                    <div className="flex items-center gap-4 mb-8 lg:mb-10">
                        <div className="w-16 h-16 rounded-2xl bg-brand-500/20 flex items-center justify-center text-brand-400">
                            <TrendingUp size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-white">{t.marketTitle}</h3>
                        </div>
                    </div>
                    
                    <div className="space-y-8 lg:space-y-10">
                        <div>
                            <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                                <Building2 size={24} className="text-brand-500" />
                                {t.target.title}
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-9 border-l-2 border-slate-800 text-lg">
                                {t.target.desc}
                            </p>
                        </div>

                        <div>
                            <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                                <PieChart size={24} className="text-brand-500" />
                                {t.size.title}
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-9 border-l-2 border-slate-800 text-lg">
                                {t.size.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MarketSection;