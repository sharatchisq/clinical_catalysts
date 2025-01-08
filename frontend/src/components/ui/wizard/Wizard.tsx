import React from 'react';
import { useWizard } from './WizardContext';
import { questionnaire } from '../../../data/questions';

interface WizardProps {
  children: React.ReactNode;
}

export function Wizard({ children }: WizardProps) {
  const currentSectionId = useWizard((state) => state.currentSectionId);
  const currentSection = questionnaire.sections.find(s => s.id === currentSectionId);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{currentSection?.title}</h1>
      </div>
      {children}
    </div>
  );
}
