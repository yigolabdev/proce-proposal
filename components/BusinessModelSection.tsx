import React from 'react';
import { CreditCard } from 'lucide-react';

interface BusinessModelSectionProps {
  lang: 'ko' | 'en';
}

const BusinessModelSection: React.FC<BusinessModelSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "07. Pricing",
      title: "비즈니스 모델",
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
      section: "07. Pricing",
      title: "Business Model",
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
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/3">
             <span className="text-accent-purple font-bold tracking-widest uppercase text-sm mb-3 block">{t.section}</span>
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t.title}</h2>
             <p className="text-slate-400 text-xl leading-relaxed">
               기본적인 Seat 기반 구독 모델에, 고부가가치 AI 기능을 더한 하이브리드 수익 모델을 구축했습니다.
             </p>
        </div>

        <div className="lg:w-2/3 w-full">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 lg:p-10 border border-slate-800 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-[80px] -z-10"></div>
                
                <div className="flex items-center gap-5 mb-8 lg:mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                        <CreditCard size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">{t.pricingTitle}</h3>
                        <p className="text-slate-400 text-base lg:text-lg">{t.pricingSubtitle}</p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                    {/* Basic Plan */}
                    <div className="bg-slate-950 p-6 lg:p-8 rounded-3xl border border-slate-800 hover:border-brand-500/50 transition-colors">
                        <div className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-3">{t.plans.basic.name}</div>
                        <div className="text-2xl lg:text-3xl font-bold text-white mb-6">{t.plans.basic.price}</div>
                        <ul className="space-y-3 lg:space-y-4 text-slate-300">
                            {t.plans.basic.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-500"></div>{f}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-slate-950 p-6 lg:p-8 rounded-3xl border border-accent-purple/30 hover:border-accent-purple/60 transition-colors relative transform scale-105 shadow-xl">
                        <div className="absolute -top-3 -right-3 bg-accent-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">{t.plans.enterprise.badge}</div>
                        <div className="text-sm text-accent-purple uppercase font-bold tracking-wider mb-3">{t.plans.enterprise.name}</div>
                        <div className="text-2xl lg:text-3xl font-bold text-white mb-6">{t.plans.enterprise.price}</div>
                        <ul className="space-y-3 lg:space-y-4 text-slate-300">
                             {t.plans.enterprise.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent-purple"></div>{f}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 lg:mt-10 p-4 lg:p-5 bg-slate-800/30 rounded-2xl border border-slate-800 text-sm text-center text-slate-400">
                    {t.note}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSection;