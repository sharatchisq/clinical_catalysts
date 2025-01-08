import React from "react";
import { Wizard } from "../../components/ui/wizard/Wizard";
import { WizardSection } from "../../components/ui/wizard/WizardSection";
import { WizardNavigation } from "../../components/ui/wizard/WizardNavigation";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Wizard>
          <div className="bg-white rounded-lg shadow-sm">
            <WizardSection />
            <div className="px-6 py-4 border-t">
              <WizardNavigation />
            </div>
          </div>
        </Wizard>
      </div>
    </div>
  );
};

export default Dashboard;
