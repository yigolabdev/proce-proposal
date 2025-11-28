import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, Legend
} from 'recharts';
import { Activity, TrendingUp, AlertTriangle, PieChart } from 'lucide-react';

interface DashboardPreviewProps {
  lang: 'ko' | 'en';
}

// Data showing the shift from "Admin/Busy Work" to "Strategic Execution"
const data = [
  { name: 'W1', admin: 75, strategic: 25 },
  { name: 'W2', admin: 65, strategic: 35 },
  { name: 'W3', admin: 55, strategic: 45 },
  { name: 'W4', admin: 40, strategic: 60 }, // Crossover point
  { name: 'W5', admin: 30, strategic: 70 },
  { name: 'W6', admin: 20, strategic: 80 },
  { name: 'W7', admin: 15, strategic: 85 },
];

const riskData = [
  { name: 'Budget', value: 82, color: '#ef4444' }, // Red (High Risk)
  { name: 'Time', value: 45, color: '#eab308' }, // Yellow (Medium)
  { name: 'Scope', value: 20, color: '#22c55e' }, // Green (Safe)
];

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ lang }) => {
  const content = {
    ko: {
      title: "조직의 건강 상태를 한눈에",
      subtitle: "Company Health Check Dashboard",
      mainChartTitle: "리소스 배분 최적화 (Resource Optimization)",
      chartDesc: "AI 도입 후 단순 반복 업무(Admin)가 줄고, 전략적 실행(Strategic) 비중이 3.4배 증가했습니다.",
      legend: {
        strategic: "핵심 전략 업무 (Strategic)",
        admin: "단순/유지보수 (Admin)"
      },
      items: [
        { type: "RISK ALERT", text: "프로젝트 A의 마감이 2주 지연될 것으로 예측됩니다.", priority: "high" },
        { type: "OPPORTUNITY", text: "고객 피드백 급증: '기능 B'에 대한 긍정 반응 300% 상승", priority: "low" }
      ]
    },
    en: {
      title: "Organizational Health at a Glance",
      subtitle: "Company Health Check Dashboard",
      mainChartTitle: "Resource Optimization",
      chartDesc: "Admin tasks decreased while Strategic Execution increased by 3.4x after AI adoption.",
      legend: {
        strategic: "Strategic Execution",
        admin: "Admin / Maintenance"
      },
      items: [
        { type: "RISK ALERT", text: "Project A deadline forecasted to slip by 2 weeks.", priority: "high" },
        { type: "OPPORTUNITY", text: "Opportunity: Positive feedback for 'Feature B' surged 300%.", priority: "low" }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="text-center mb-10 lg:mb-12">
        <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3 block">05. Dashboard</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t.title}</h2>
        <p className="text-slate-400 text-xl">{t.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto w-full">
        {/* Main Chart - Resource Optimization */}
        <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-900/10 rounded-full blur-[80px] -z-10 group-hover:bg-brand-900/20 transition-colors"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
                <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-3 text-white">
                <PieChart size={24} className="text-brand-500" />
                {t.mainChartTitle}
                </h3>
                <p className="text-slate-400 text-sm mt-2">{t.chartDesc}</p>
            </div>
            {/* Custom Legend */}
            <div className="flex gap-4 text-xs font-bold">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-500"></span>
                    <span className="text-white">{t.legend.strategic}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-600"></span>
                    <span className="text-slate-400">{t.legend.admin}</span>
                </div>
            </div>
          </div>

          <div className="flex-1 min-h-[300px] lg:h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorStrategic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorAdmin" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#475569" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#475569" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#475569" tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis unit="%" stroke="#475569" tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '12px' }}
                  itemStyle={{ fontSize: '14px', fontWeight: 'bold' }}
                />
                <Area 
                    type="monotone" 
                    dataKey="strategic" 
                    stackId="1" 
                    stroke="#0ea5e9" 
                    fill="url(#colorStrategic)" 
                    name={t.legend.strategic}
                    animationDuration={1500}
                />
                <Area 
                    type="monotone" 
                    dataKey="admin" 
                    stackId="1" 
                    stroke="#64748b" 
                    fill="url(#colorAdmin)" 
                    name={t.legend.admin} 
                    animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Panel - Risk & Alerts */}
        <div className="flex flex-col gap-6 h-full">
            {/* Risk Chart */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-white">
                    <AlertTriangle size={20} className="text-red-500" />
                    Risk Analysis
                    </h3>
                </div>
                <div className="h-[180px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={riskData} layout="vertical" barSize={24}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={60} tick={{fill: '#cbd5e1', fontSize: 12, fontWeight: 600}} />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }} />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} background={{ fill: '#1e293b', radius: [0, 4, 4, 0] }}>
                            {riskData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Action Items */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl flex-1 flex flex-col justify-center">
                 <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-white">
                    <Activity size={20} className="text-green-500" />
                    AI Insights
                </h3>
                <ul className="space-y-3">
                    {t.items.map((item, idx) => (
                      <li key={idx} className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          item.priority === 'high' 
                          ? 'bg-red-500/10 border-red-500/30 hover:border-red-500' 
                          : 'bg-brand-500/10 border-brand-500/30 hover:border-brand-500'
                      }`}>
                          <div className={`text-xs font-bold mb-1 tracking-wider ${
                              item.priority === 'high' ? 'text-red-400' : 'text-brand-400'
                          }`}>
                              {item.type}
                          </div>
                          <div className="text-sm text-slate-200 font-medium leading-snug">
                            {item.text}
                          </div>
                      </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;