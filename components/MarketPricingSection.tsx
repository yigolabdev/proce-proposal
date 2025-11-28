import React from 'react';
import { PieChart, TrendingUp, CreditCard, Building2 } from 'lucide-react';

interface MarketPricingSectionProps {
  lang: 'ko' | 'en';
}

const MarketPricingSection: React.FC<MarketPricingSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "06. Business Model",
      title: "타겟 시장 및 성장 전략",
      marketTitle: "Market Opportunity",
      marketSubtitle: "Target & Growth",
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
      },
      pricingTitle: "Pricing Model",
      pricingSubtitle: "Hybrid Subscription",
      plans: {
        basic: {
            name: "Core Platform",
            price: "Seat-based",
            features: ["기본 Task/OKR 관리", "실시간 대시보드", "기본 리포팅"]
        },
        enterprise: {
            badge: "Premium",
            name: "Add-on",
            price: "Enterprise Insight",
            features: ["고급 AI 전략 고문", "커스터마이징 리포트", "전담 매니저 지원"]
        }
      },
      note: "* 대기업을 위한 Enterprise Insight Add-on 패키지를 통해 추가 수익 모델을 확보합니다."
    },
    en: {
      section: "06. Business Model",
      title: "Target Market & Growth Strategy",
      marketTitle: "Market Opportunity",
      marketSubtitle: "Target & Growth",
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
      },
      pricingTitle: "Pricing Model",
      pricingSubtitle: "Hybrid Subscription",
      plans: {
        basic: {
            name: "Core Platform",
            price: "Seat-based",
            features: ["Basic Task/OKR Mgmt", "Real-time Dashboard", "Basic Reporting"]
        },
        enterprise: {
            badge: "Premium",
            name: "Add-on",
            price: "Enterprise Insight",
            features: ["Advanced AI Advisor", "Custom Reporting", "Dedicated Manager"]
        }
      },
      note: "* Additional revenue stream secured via Enterprise Insight Add-on package."
    }
  };

  const t = content[lang];

  return (
    <div className="py-32 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-l-4 border-brand-500 pl-6">
           <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-2 block">{t.section}</span>
           <h2 className="text-4xl font-bold text-white">{t.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            {/* Market Opportunity */}
            <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center text-brand-400">
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">{t.marketTitle}</h3>
                        <p className="text-slate-400">{t.marketSubtitle}</p>
                    </div>
                </div>
                
                <div className="space-y-8">
                    <div>
                        <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                            <Building2 size={20} className="text-brand-500" />
                            {t.target.title}
                        </h4>
                        <p className="text-slate-400 leading-relaxed pl-7 border-l border-slate-800">
                            {t.target.desc}
                        </p>
                    </div>

                    <div>
                        <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                            <PieChart size={20} className="text-brand-500" />
                            {t.size.title}
                        </h4>
                        <p className="text-slate-400 leading-relaxed pl-7 border-l border-slate-800">
                            {t.size.desc}
                        </p>
                    </div>
                </div>
            </div>

            {/* Pricing Model */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[60px] -z-10"></div>
                
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                        <CreditCard size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">{t.pricingTitle}</h3>
                        <p className="text-slate-400">{t.pricingSubtitle}</p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {/* Basic Plan */}
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-brand-500/50 transition-colors">
                        <div className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-2">{t.plans.basic.name}</div>
                        <div className="text-2xl font-bold text-white mb-4">{t.plans.basic.price}</div>
                        <ul className="space-y-2 text-sm text-slate-300">
                            {t.plans.basic.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>{f}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-slate-950 p-6 rounded-2xl border border-accent-purple/30 hover:border-accent-purple/60 transition-colors relative">
                        <div className="absolute -top-2 -right-2 bg-accent-purple text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">{t.plans.enterprise.badge}</div>
                        <div className="text-sm text-accent-purple uppercase font-bold tracking-wider mb-2">{t.plans.enterprise.name}</div>
                        <div className="text-2xl font-bold text-white mb-4">{t.plans.enterprise.price}</div>
                        <ul className="space-y-2 text-sm text-slate-300">
                             {t.plans.enterprise.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent-purple"></div>{f}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-slate-800/30 rounded-xl border border-slate-800 text-sm text-center text-slate-400">
                    {t.note}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPricingSection;