import React from 'react';
import { Database, MessageSquare, ArrowRight, Cpu, LayoutDashboard, Bell, FileText, GitMerge, Layers, Keyboard, ListTodo } from 'lucide-react';

interface SystemArchitectureSectionProps {
  lang: 'ko' | 'en';
}

const SystemArchitectureSection: React.FC<SystemArchitectureSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      section: "03. How it Works",
      title: "파편화된 데이터를 살아있는 전략으로",
      subtitle: "Proce의 AI 엔진이 데이터를 어떻게 가치로 전환하는지 확인하세요.",
      input: {
        title: "Diverse Inputs",
        desc: "모든 형태의 업무 데이터 수집",
        items: ["직접 입력 (Direct Input)", "문서 (Excel, PDF)", "이메일 / 메신저"]
      },
      core: {
        title: "Proce AI Engine",
        desc: "컨텍스트 분석 및 정렬",
        modules: ["Context Analyzer", "Strategy Aligner", "Risk Predictor"]
      },
      output: {
        title: "Strategic Intelligence",
        desc: "실행 가능한 액션과 인사이트",
        items: ["Auto Task Generation", "Real-time Dashboard", "Proactive Alerts"]
      }
    },
    en: {
      section: "03. How it Works",
      title: "Turning Fragmented Data into Strategy",
      subtitle: "See how Proce's AI engine transforms raw data into value.",
      input: {
        title: "Diverse Inputs",
        desc: "Collect All Work Data",
        items: ["Direct Input", "Documents (Excel, PDF)", "Email / Messenger"]
      },
      core: {
        title: "Proce AI Engine",
        desc: "Context & Alignment",
        modules: ["Context Analyzer", "Strategy Aligner", "Risk Predictor"]
      },
      output: {
        title: "Strategic Intelligence",
        desc: "Actionable Insights",
        items: ["Auto Task Generation", "Real-time Dashboard", "Proactive Alerts"]
      }
    }
  };

  const t = content[lang];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="text-center mb-16 lg:mb-20">
        <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3 block">{t.section}</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
        <p className="text-slate-400 text-xl">{t.subtitle}</p>
      </div>

      <div className="relative max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        
        {/* Layer 1: Input (Fragmented) */}
        <div className="flex flex-col items-center w-full lg:w-1/4 z-10">
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700 w-full shadow-lg relative overflow-hidden group hover:border-slate-500 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-700 group-hover:bg-slate-500 transition-colors"></div>
                <h3 className="text-lg font-bold text-slate-300 mb-4 flex items-center gap-2">
                    <Database size={18} /> {t.input.title}
                </h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800 text-sm text-slate-400">
                        <Keyboard size={16} className="text-pink-500" /> {t.input.items[0]}
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800 text-sm text-slate-400">
                        <FileText size={16} className="text-green-500" /> {t.input.items[1]}
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800 text-sm text-slate-400">
                        <MessageSquare size={16} className="text-blue-500" /> {t.input.items[2]}
                    </div>
                </div>
                <div className="mt-4 text-center text-xs text-slate-500">{t.input.desc}</div>
            </div>
        </div>

        {/* Connection Flow 1 */}
        <div className="hidden lg:flex flex-1 h-20 items-center justify-center relative px-4">
            <div className="w-full h-[2px] bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500 to-transparent w-1/2 h-full animate-flow-right"></div>
            </div>
            <div className="absolute bg-slate-950 border border-slate-700 p-2 rounded-full">
                <ArrowRight size={16} className="text-brand-500" />
            </div>
        </div>
        <div className="lg:hidden h-16 w-[2px] bg-slate-800 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500 to-transparent h-1/2 w-full animate-flow-right"></div>
        </div>

        {/* Layer 2: The Core (Proce AI) */}
        <div className="flex flex-col items-center w-full lg:w-1/3 z-20">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-brand-500/30 w-full shadow-[0_0_50px_rgba(14,165,233,0.15)] relative transform hover:scale-105 transition-transform duration-500">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/20 rounded-full blur-[60px] -z-10 animate-pulse-slow"></div>
                
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-500/40">
                        <Cpu size={32} />
                    </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-6">{t.core.title}</h3>
                
                <div className="space-y-2">
                    {t.core.modules.map((mod, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 text-sm lg:text-base text-brand-100/80 bg-brand-900/20 py-2 rounded-lg border border-brand-500/20">
                           <GitMerge size={14} className="text-brand-400" />
                           {mod}
                        </div>
                    ))}
                </div>
                 <div className="mt-6 text-center text-xs text-brand-300/50 uppercase tracking-widest font-bold">{t.core.desc}</div>
            </div>
        </div>

        {/* Connection Flow 2 */}
        <div className="hidden lg:flex flex-1 h-20 items-center justify-center relative px-4">
             <div className="w-full h-[2px] bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-purple to-transparent w-1/2 h-full animate-flow-right" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="absolute bg-slate-950 border border-slate-700 p-2 rounded-full">
                <ArrowRight size={16} className="text-accent-purple" />
            </div>
        </div>
        <div className="lg:hidden h-16 w-[2px] bg-slate-800 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple to-transparent h-1/2 w-full animate-flow-right"></div>
        </div>

        {/* Layer 3: Output (Strategic) */}
        <div className="flex flex-col items-center w-full lg:w-1/4 z-10">
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-accent-purple/30 w-full shadow-lg relative overflow-hidden group hover:border-accent-purple/60 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent-purple group-hover:bg-accent-purple/80 transition-colors"></div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Layers size={18} className="text-accent-purple" /> {t.output.title}
                </h3>
                <div className="space-y-3">
                     <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800 text-sm text-slate-200">
                        <ListTodo size={16} className="text-green-400" /> {t.output.items[0]}
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800 text-sm text-slate-200">
                        <LayoutDashboard size={16} className="text-brand-400" /> {t.output.items[1]}
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800 text-sm text-slate-200">
                        <Bell size={16} className="text-red-400" /> {t.output.items[2]}
                    </div>
                </div>
                <div className="mt-4 text-center text-xs text-slate-500">{t.output.desc}</div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default SystemArchitectureSection;