import React from 'react';
import { Check, X, Minus } from 'lucide-react';

interface ComparisonSectionProps {
  lang: 'ko' | 'en';
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      title: "왜 기존 툴로는 부족한가?",
      desc: <>엑셀은 인사이트가 없고, 협업 툴은 전략이 부재합니다. <br />Proce는 실행(Execution)과 전략(Strategy), 그리고 AI Insight가 결합된 유일한 올인원 솔루션입니다.</>,
      tag: "Proce's Edge: Execution + Strategy + AI Insight",
      rows: [
        { feature: "Task Management", excel: "Weak", asana: "Strong", proce: "Strong" },
        { feature: "Strategic Linkage", excel: "None", asana: "Weak", proce: "Excellent" },
        { feature: "AI Insight & Prediction", excel: "None", asana: "Basic", proce: "Advanced" },
        { feature: "Resource Optimization", excel: "Manual", asana: "Manual", proce: "Automated" },
        { feature: "Ease of Use", excel: "High", asana: "High", proce: "High" },
      ]
    },
    en: {
      title: "Why Existing Tools Fall Short?",
      desc: <>Spreadsheets lack insight, Collaboration tools lack strategy. <br />Proce is the only all-in-one solution combining Execution, Strategy, and AI Insight.</>,
      tag: "Proce's Edge: Execution + Strategy + AI Insight",
      rows: [
        { feature: "Task Management", excel: "Weak", asana: "Strong", proce: "Strong" },
        { feature: "Strategic Linkage", excel: "None", asana: "Weak", proce: "Excellent" },
        { feature: "AI Insight & Prediction", excel: "None", asana: "Basic", proce: "Advanced" },
        { feature: "Resource Optimization", excel: "Manual", asana: "Manual", proce: "Automated" },
        { feature: "Ease of Use", excel: "High", asana: "High", proce: "High" },
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center py-16 lg:py-24">
      <div className="text-center mb-10 lg:mb-12 flex-none">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {t.desc}
        </p>
      </div>

      <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex-none overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="p-4 lg:p-5 text-slate-500 font-medium border-b border-slate-800 text-sm lg:text-base">Feature</th>
              <th className="p-4 lg:p-5 text-slate-400 font-bold border-b border-slate-800 w-1/4 text-sm lg:text-base">Excel / Spreadsheet</th>
              <th className="p-4 lg:p-5 text-slate-400 font-bold border-b border-slate-800 w-1/4 text-sm lg:text-base">Asana / Monday</th>
              <th className="p-4 lg:p-5 text-brand-400 font-extrabold text-base lg:text-lg border-b border-brand-500/30 bg-brand-500/10 w-1/4">Proce</th>
            </tr>
          </thead>
          <tbody>
            {t.rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-4 lg:p-5 border-b border-slate-800 text-slate-300 font-medium text-sm lg:text-base">{row.feature}</td>
                
                <td className="p-4 lg:p-5 border-b border-slate-800 text-slate-400 text-sm lg:text-base">
                  {row.excel === 'High' && <span className="flex items-center gap-2 text-white"><Check size={18}/> High</span>}
                  {row.excel === 'Weak' && <span className="flex items-center gap-2 text-slate-500"><Minus size={18}/> Weak</span>}
                  {row.excel === 'Manual' && <span className="text-slate-500">Manual</span>}
                  {row.excel === 'None' && <span className="flex items-center gap-2 text-slate-600"><X size={18}/> None</span>}
                </td>

                <td className="p-4 lg:p-5 border-b border-slate-800 text-slate-400 text-sm lg:text-base">
                  {row.asana === 'Strong' && <span className="flex items-center gap-2 text-white"><Check size={18}/> Strong</span>}
                  {row.asana === 'Weak' && <span className="flex items-center gap-2 text-slate-500"><Minus size={18}/> Weak</span>}
                  {row.asana === 'Basic' && <span className="text-slate-400">Basic</span>}
                  {row.asana === 'Manual' && <span className="text-slate-500">Manual</span>}
                  {row.asana === 'High' && <span className="text-white">High</span>}
                </td>

                <td className="p-4 lg:p-5 border-b border-brand-500/10 bg-brand-500/5 text-sm lg:text-base">
                  <span className="flex items-center gap-2 text-brand-400 font-bold">
                      <Check size={20} className="text-brand-400" />
                      {row.proce}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 lg:mt-12 text-center flex-none">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-brand-500 to-accent-purple shadow-lg">
              <div className="px-6 py-3 lg:px-8 lg:py-4 bg-slate-950 rounded-full">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-accent-purple font-bold text-base lg:text-xl">
                      {t.tag}
                  </span>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ComparisonSection;