import React from "react";
import { Wizard } from "../../components/ui/wizard/Wizard";
import { WizardSection } from "../../components/ui/wizard/WizardSection";
import { WizardNavigation } from "../../components/ui/wizard/WizardNavigation";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Wizard>
        <WizardSection />
        <WizardNavigation />
      </Wizard>
    </div>
  );
};

export default Dashboard;
