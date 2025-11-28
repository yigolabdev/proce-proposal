import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Clock, Zap } from 'lucide-react';

interface EarlyAdoptionSectionProps {
  lang: 'ko' | 'en';
}

const data = [
  { month: 'Start', proce: 100, others: 100 },
  { month: 'Q1', proce: 130, others: 110 },
  { month: 'Q2', proce: 180, others: 120 },
  { month: 'Q3', proce: 260, others: 130 },
  { month: 'Q4', proce: 400, others: 140 },
  { month: 'Q5', proce: 650, others: 150 },
];

const EarlyAdoptionSection: React.FC<EarlyAdoptionSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      tag: "Compounding Growth",
      title: "지금 시작하는 조직만이\n압도적 격차를 만듭니다",
      desc: "전략 실행의 효율화는 복리 효과(Compound Effect)를 가집니다. 도입이 늦어질수록 경쟁사와의 격차는 좁힐 수 없이 벌어집니다.",
      chart: {
        proce: "Proce 도입 기업",
        others: "일반 기업",
        gap: "성장 격차 (Growth Gap)"
      },
      points: [
        { title: "선점 효과", desc: "먼저 도입하여 시장 내 경쟁 우위를 확보하세요." },
        { title: "복리 성장", desc: "매일 축적되는 데이터가 미래의 성장 동력이 됩니다." },
        { title: "비용 절감", desc: "비효율을 조기에 제거하여 기회비용을 최소화합니다." }
      ],
      btn: "지금 도입 상담 신청하기"
    },
    en: {
      tag: "Compounding Growth",
      title: "Only Early Adopters\nCreate Overwhelming Gaps",
      desc: "Strategic execution efficiency compounds over time. The later you start, the wider the gap with competitors becomes.",
      chart: {
        proce: "With Proce",
        others: "Without Proce",
        gap: "Growth Gap"
      },
      points: [
        { title: "First Mover Advantage", desc: "Secure a competitive edge by adopting early." },
        { title: "Compounding Growth", desc: "Daily data accumulation fuels future growth." },
        { title: "Cost Reduction", desc: "Eliminate inefficiencies early to minimize opportunity costs." }
      ],
      btn: "Schedule a Consultation Now"
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left: Content */}
          <div className="lg:w-1/2 z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6 lg:mb-8">
                <TrendingUp size={14} className="text-brand-400" />
                <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                  {t.tag}
                </span>
             </div>

             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 lg:mb-8 leading-tight whitespace-pre-line">
                {t.title}
             </h2>
             
             <p className="text-slate-400 text-lg lg:text-xl mb-8 lg:mb-12 leading-relaxed">
                {t.desc}
             </p>

             <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-12">
                {t.points.map((point, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                        <div className="mt-1 p-2 bg-brand-500/20 rounded-full">
                           <Zap size={20} className="text-brand-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg lg:text-xl">{point.title}</h4>
                            <p className="text-slate-500 text-sm lg:text-base">{point.desc}</p>
                        </div>
                    </div>
                ))}
             </div>

             <button className="px-8 py-4 lg:px-10 lg:py-5 bg-white text-slate-900 hover:bg-slate-200 font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-3 text-base lg:text-lg">
                 <Clock size={24} />
                 {t.btn}
             </button>
          </div>

          {/* Right: Chart Visualization */}
          <div className="lg:w-1/2 w-full hidden md:block">
             <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-8 shadow-2xl relative backdrop-blur-sm">
                
                {/* Chart Label Overlay */}
                <div className="absolute top-1/4 right-10 bg-brand-600/90 text-white px-5 py-3 rounded-xl shadow-lg border border-brand-400 animate-pulse">
                    <span className="font-bold text-base block">{t.chart.gap}</span>
                    <span className="text-xs opacity-80">Exponential Advantage</span>
                </div>

                <div className="h-[300px] lg:h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorProce" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorOthers" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#64748b" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#64748b" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                            <XAxis dataKey="month" stroke="#475569" tick={{fill: '#94a3b8'}} />
                            <YAxis hide />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="proce" 
                                stroke="#0ea5e9" 
                                strokeWidth={4}
                                fillOpacity={1} 
                                fill="url(#colorProce)" 
                                name={t.chart.proce}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="others" 
                                stroke="#64748b" 
                                strokeWidth={2}
                                strokeDasharray="5 5"
                                fillOpacity={1} 
                                fill="url(#colorOthers)" 
                                name={t.chart.others}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                
                <div className="flex justify-center gap-10 mt-6 text-base font-medium">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-brand-500 rounded-full"></div>
                        <span className="text-white">{t.chart.proce}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-slate-500 rounded-full opacity-50"></div>
                        <span className="text-slate-400">{t.chart.others}</span>
                    </div>
                </div>

             </div>
          </div>
        </div>
    </div>
  );
};

export default EarlyAdoptionSection;