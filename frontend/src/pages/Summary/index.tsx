import React from "react";
import { Header } from "../../components/ui/dashboard/Header";
import { Collapse } from "../../components/ui/collapse/Collapse";

const RiskIndicatorsCard = () => (
  <div className="bg-white p-6 rounded-xl border border-red-200">
    <h2 className="text-lg font-semibold text-red-700 mb-4">🚨 Risk Indicators</h2>
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-red-600">
        <span>⚠️</span>
        <span>Suicidal thoughts reported</span>
      </div>
      <div className="flex items-center gap-2 text-red-600">
        <span>⚠️</span>
        <span>Severe memory problems</span>
      </div>
    </div>
  </div>
);

const CognitiveStatusCard = () => (
  <Collapse title="🧠 Cognitive Status" defaultOpen>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span>Memory Assessment</span>
        <span className="text-amber-600 font-medium">Moderate Decline</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Focus & Attention</span>
        <span className="text-red-600 font-medium">Significant Issues</span>
      </div>
    </div>
  </Collapse>
);

const BehavioralAssessmentCard = () => (
  <Collapse title="🎭 Behavioral Assessment">
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span>Depression Screening</span>
        <span className="text-red-600 font-medium">High Risk</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Anxiety Level</span>
        <span className="text-amber-600 font-medium">Moderate</span>
      </div>
    </div>
  </Collapse>
);

const MedicalHistoryCard = () => (
  <Collapse title="⚕️ Medical History">
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-2">Current Conditions</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Diabetes Type 2</li>
            <li>Hypertension</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">Past Surgeries</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Appendectomy (2019)</li>
          </ul>
        </div>
      </div>
    </div>
  </Collapse>
);

const FunctionalStatusCard = () => (
  <Collapse title="🔧 Functional Status">
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h3 className="font-medium mb-2">Daily Activities</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Independent in bathing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500">!</span>
            <span>Needs assistance with medication</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Mobility</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Walks independently</span>
          </div>
        </div>
      </div>
    </div>
  </Collapse>
);

const SummarySidebar = () => (
  <div className="w-64 bg-white border-r border-slate-200 h-full fixed left-0 top-[64px]">
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Patient Info</h2>
        <div className="mt-3 space-y-2">
          <div className="text-sm">
            <span className="text-slate-500">Name:</span>
            <span className="ml-2 font-medium text-slate-900">John Doe</span>
          </div>
          <div className="text-sm">
            <span className="text-slate-500">Age:</span>
            <span className="ml-2 font-medium text-slate-900">65</span>
          </div>
          <div className="text-sm">
            <span className="text-slate-500">ID:</span>
            <span className="ml-2 font-medium text-slate-900">#12345</span>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Quick Navigation</h2>
        {[
          { icon: '🚨', label: 'Risk Indicators' },
          { icon: '🧠', label: 'Cognitive Status' },
          { icon: '🎭', label: 'Behavioral Assessment' },
          { icon: '⚕️', label: 'Medical History' },
          { icon: '🔧', label: 'Functional Status' },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => {
              const element = document.getElementById(item.label.toLowerCase().replace(/ /g, '-'));
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const SummaryPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="fixed top-0 left-0 right-0 z-10">
        <Header />
      </div>

      <div className="flex">
        <SummarySidebar />
        
        <main className="flex-1 ml-64 pt-[80px] px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold text-slate-800">Patient Summary</h1>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Download Report
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div id="risk-indicators">
                  <RiskIndicatorsCard />
                </div>
                <div id="cognitive-status">
                  <CognitiveStatusCard />
                </div>
                <div id="behavioral-assessment">
                  <BehavioralAssessmentCard />
                </div>
              </div>
              <div className="space-y-6">
                <div id="medical-history">
                  <MedicalHistoryCard />
                </div>
                <div id="functional-status">
                  <FunctionalStatusCard />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SummaryPage; 