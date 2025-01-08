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
    <div className="flex justify-between mt-8">
      <button
        onClick={previousSection}
        disabled={isFirstSection}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
      >
        Previous Section
      </button>
      <button
        onClick={nextSection}
        disabled={isLastSection}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
      >
        Next Section
      </button>
    </div>
  );
}
