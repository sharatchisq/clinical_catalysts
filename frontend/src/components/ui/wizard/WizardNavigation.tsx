import React from 'react';
import { useWizard } from './WizardContext';
import { questionnaire } from '../../../data/questions';

export function WizardNavigation() {
  const nextSection = useWizard(state => state.nextSection);
  const previousSection = useWizard(state => state.previousSection);
  const currentSectionId = useWizard(state => state.currentSectionId);
  
  const currentIndex = questionnaire.sections.findIndex(s => s.id === currentSectionId);
  const isFirstSection = currentIndex === 0;
  const isLastSection = currentIndex === questionnaire.sections.length - 1;

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={previousSection}
        disabled={isFirstSection}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
      >
        Previous Section
      </button>
      <div className="text-sm text-gray-500">
        Section {currentIndex + 1} of {questionnaire.sections.length}
      </div>
      <button
        onClick={nextSection}
        disabled={isLastSection}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        Next Section
      </button>
    </div>
  );
}
