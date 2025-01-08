import React from "react";
import { Wizard } from "../../components/ui/wizard/Wizard";
import { WizardSection } from "../../components/ui/wizard/WizardSection";
import { WizardNavigation } from "../../components/ui/wizard/WizardNavigation";
import { Sidebar } from "../../components/ui/wizard/WizardNavigation/Sidebar";
import { Header } from "../../components/ui/dashboard/Header";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-10">
        <Header />
      </div>

      <div className="flex pt-[64px]">
        <div className="fixed left-0 top-[64px] bottom-0">
          <Sidebar />
        </div>

        <main className="flex-1 ml-80 bg-slate-50 min-h-[calc(100vh-4rem)]">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <Wizard>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                <WizardSection />
                <div className="px-6 py-4 border-t border-slate-200">
                  <WizardNavigation />
                </div>
              </div>
            </Wizard>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
