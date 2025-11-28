import React, { useState } from 'react';
import { Layers, Zap, MessageSquare, BrainCircuit, FileCode, Trophy, Activity } from 'lucide-react';

interface CoreValuesSectionProps {
  lang: 'ko' | 'en';
}

const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(0);

  const content = {
    ko: {
      section: "03. Key Features",
      title: "모든 구성원을 위한 업무 혁신",
      subtitle: "기존 업무 방식을 방해하지 않으면서, 생산성을 극대화합니다.",
      tabs: ["Frictionless Interface", "Deep Work Environment", "Automated Intelligence"],
      features: [
        {
          id: 0,
          title: "Frictionless Interface",
          headline: "입력은 최소화하고, 통합은 완벽하게",
          desc: "자연어 처리(NLP) 기술로 복잡한 양식 없이 업무를 기록합니다. 엑셀, 이메일 등 기존 파일과 연동되어 중복 입력을 제거합니다.",
          subFeatures: [
            { icon: FileCode, text: "Smart Input (NLP 기반 자동 분류)" },
            { icon: FileCode, text: "Excel/CSV 파일 호환" },
            { icon: Trophy, text: "Motivation (기여도 시각화 및 성취감)" }
          ]
        },
        {
          id: 1,
          title: "Deep Work Environment",
          headline: "회의 대신, '맥락'이 있는 의사결정",
          desc: "불필요한 동기식 미팅을 제거하여 실무자의 몰입 시간을 확보합니다. 'NoMeet' 모듈을 통해 모든 논의를 기록하고 맥락 기반으로 비동기 소통합니다.",
          subFeatures: [
            { icon: MessageSquare, text: "Async Discussion (비동기 토론)" },
            { icon: Zap, text: "몰입 시간(Deep Work) 3배 증가" },
            { icon: Layers, text: "히스토리가 남는 맥락 기반 결정" }
          ]
        },
        {
          id: 2,
          title: "Automated Intelligence",
          headline: "보고서는 AI가 1초 만에",
          desc: "주간 업무 보고, 팀 회고, 성과 분석 리포트를 AI가 자동으로 생성합니다. 관리 업무에 소모되던 시간을 실제 가치 있는 전략적 활동에 투자하세요.",
          subFeatures: [
            { icon: BrainCircuit, text: "주간/월간 리포트 자동 생성" },
            { icon: Activity, text: "팀 리소스 병목 자동 감지" },
            { icon: Layers, text: "관리자 업무 부담 80% 감소" }
          ]
        }
      ]
    },
    en: {
      section: "03. Key Features",
      title: "Work Innovation for All Members",
      subtitle: "Maximize productivity without disrupting existing workflows.",
      tabs: ["Frictionless Interface", "Deep Work Environment", "Automated Intelligence"],
      features: [
        {
          id: 0,
          title: "Frictionless Interface",
          headline: "Minimal Input, Perfect Integration",
          desc: "Log work without complex forms using NLP. Compatible with Excel/Files to eliminate duplicate entry.",
          subFeatures: [
            { icon: FileCode, text: "Smart Input (NLP Auto-classification)" },
            { icon: FileCode, text: "Excel/CSV Compatibility" },
            { icon: Trophy, text: "Motivation (Contribution Visibility)" }
          ]
        },
        {
          id: 1,
          title: "Deep Work Environment",
          headline: "Context-driven Decisions, Not Meetings",
          desc: "Eliminate unnecessary synchronous meetings to secure deep work time. 'NoMeet' modules ensure context-based asynchronous communication.",
          subFeatures: [
            { icon: MessageSquare, text: "Async Discussion Modules" },
            { icon: Zap, text: "3x Increase in Deep Work Time" },
            { icon: Layers, text: "Context-rich Decision History" }
          ]
        },
        {
          id: 2,
          title: "Automated Intelligence",
          headline: "Reports Generated in 1 Second",
          desc: "AI automatically generates weekly reports, team retrospectives, and performance analysis. Reallocate management time to strategic activities.",
          subFeatures: [
            { icon: BrainCircuit, text: "Auto-generated Weekly/Monthly Reports" },
            { icon: Activity, text: "Auto-detection of Resource Bottlenecks" },
            { icon: Layers, text: "80% Reduction in Admin Work" }
          ]
        }
      ]
    }
  };

  const t = content[lang];
  const activeFeature = t.features[activeTab];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="text-center mb-8 lg:mb-10">
        <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3 block">{t.section}</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
        <p className="text-slate-400 text-xl">{t.subtitle}</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 lg:mb-10">
        {t.tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
              activeTab === idx
                ? 'bg-brand-600 border-brand-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)]'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 lg:p-12 transition-all duration-500 min-h-[400px] flex items-center relative overflow-hidden shadow-2xl">
          {/* Background Glow */}
          <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 transition-colors duration-500 ${
              activeTab === 0 ? 'bg-brand-900/20' : activeTab === 1 ? 'bg-accent-purple/20' : 'bg-green-900/20'
          }`}></div>

          <div className="grid lg:grid-cols-2 gap-12 w-full items-center">
              <div className="flex flex-col justify-center animate-fade-in-up" key={`text-${activeTab}`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                      {activeFeature.headline}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      {activeFeature.desc}
                  </p>
                  <div className="space-y-4">
                      {activeFeature.subFeatures.map((sub, idx) => {
                          const Icon = sub.icon;
                          return (
                              <div key={idx} className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                                  <div className="p-2 bg-slate-800 rounded-lg text-brand-400">
                                      <Icon size={24} />
                                  </div>
                                  <span className="text-slate-200 font-medium text-lg">{sub.text}</span>
                              </div>
                          );
                      })}
                  </div>
              </div>

              {/* Dynamic Visual Area based on Tab */}
              <div className="relative h-[350px] lg:h-[400px] bg-slate-950 rounded-2xl border border-slate-800 p-8 flex items-center justify-center overflow-hidden animate-fade-in-up shadow-inner" key={`visual-${activeTab}`}>
                    {activeTab === 0 && (
                      <div className="w-full space-y-6 opacity-90">
                          <div className="bg-slate-900 p-5 rounded-xl border border-slate-700 shadow-lg">
                              <div className="text-xs text-brand-400 font-bold mb-2 uppercase tracking-wide">Natural Language Processing</div>
                              <div className="text-lg text-white font-medium mb-2">"Q3 마케팅 예산안 작성 완료"</div>
                              <div className="flex items-center gap-2 text-slate-500 text-sm">
                                  <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center">↓</span>
                                  <span>AI Analysis</span>
                              </div>
                          </div>
                          
                          <div className="bg-slate-900 p-5 rounded-xl border border-slate-700 shadow-lg border-l-4 border-l-green-500">
                              <div className="flex justify-between items-start mb-2">
                                  <span className="text-xs font-bold text-slate-400 uppercase">New Task Created</span>
                                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-bold">Auto-tagged</span>
                              </div>
                              <div className="text-white font-bold mb-1">Q3 마케팅 예산안 작성</div>
                              <div className="text-sm text-slate-400 flex gap-3">
                                  <span>Category: <span className="text-slate-200">Finance</span></span>
                                  <span>Due: <span className="text-slate-200">Today</span></span>
                              </div>
                          </div>
                      </div>
                    )}

                    {activeTab === 1 && (
                      <div className="w-full space-y-4">
                            <div className="flex items-center gap-3 mb-6 p-3 bg-red-500/10 rounded-lg border border-red-500/20 w-fit">
                              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                              <span className="text-sm font-bold text-red-200 uppercase">Meeting Cancelled</span>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 relative shadow-xl">
                              <div className="absolute -top-3 right-4 bg-accent-purple text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">Async Thread</div>
                              <div className="flex gap-4 mb-4">
                                  <div className="w-10 h-10 rounded-full bg-slate-700 flex-shrink-0"></div>
                                  <div className="text-sm">
                                      <div className="text-white font-bold text-base">Sarah (PM)</div>
                                      <div className="text-slate-400 mt-1">디자인 시안 A안으로 확정해도 될까요? @DesignTeam</div>
                                  </div>
                              </div>
                              <div className="flex gap-4 pl-14">
                                  <div className="w-10 h-10 rounded-full bg-slate-700 flex-shrink-0"></div>
                                  <div className="text-sm">
                                      <div className="text-white font-bold text-base">Mike (Designer)</div>
                                      <div className="text-slate-400 mt-1">네, 피드백 반영 완료했습니다. 바로 진행 가능합니다. 👍</div>
                                  </div>
                              </div>
                            </div>
                            <div className="text-center text-sm text-green-400 font-mono mt-4">
                                Saved 1 hour meeting time
                            </div>
                      </div>
                    )}

                    {activeTab === 2 && (
                        <div className="w-full p-4">
                          <div className="flex justify-between items-center mb-6">
                              <div className="flex gap-2">
                                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                  <div className="w-24 h-3 rounded-full bg-slate-700"></div>
                              </div>
                              <div className="px-3 py-1 bg-brand-500/20 text-brand-400 text-xs font-bold rounded shadow-[0_0_10px_rgba(14,165,233,0.2)] animate-pulse">AI Generated</div>
                          </div>
                          <div className="space-y-4">
                              <div className="h-3 w-full bg-slate-800 rounded"></div>
                              <div className="h-3 w-3/4 bg-slate-800 rounded"></div>
                              <div className="h-3 w-5/6 bg-slate-800 rounded"></div>
                              <div className="h-3 w-2/3 bg-slate-800 rounded"></div>
                          </div>
                          <div className="mt-8 grid grid-cols-2 gap-6">
                              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                                  <div className="text-xs text-slate-500 mb-2 uppercase font-bold">Weekly Output</div>
                                  <div className="text-2xl font-bold text-white">+24%</div>
                              </div>
                              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                                  <div className="text-xs text-slate-500 mb-2 uppercase font-bold">Focus Score</div>
                                  <div className="text-2xl font-bold text-brand-400">92</div>
                              </div>
                          </div>
                        </div>
                    )}
              </div>
          </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;