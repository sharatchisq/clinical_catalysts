import React from "react";
import { useWizard } from "./WizardContext";
import { questionnaire } from "../../../data/questions";
import { QuestionRenderer } from "./QuestionRenderer";
import { RequiredBadge } from "./components/RequiredBadge";

export function WizardSection() {
  const currentSectionId = useWizard(state => state.currentSectionId);
  const currentSection = questionnaire.sections.find(s => s.id === currentSectionId);

  if (!currentSection) return null;

  return (
    <div>
      <div className="px-6 py-3 bg-gray-50 border-b flex items-center gap-2 text-sm text-gray-500">
        <RequiredBadge />
        <span>Indicates required field</span>
      </div>
      <div className="divide-y divide-gray-200">
        {currentSection.questions.map((question) => (
          <div key={question.id} className="px-6 py-4">
            <QuestionRenderer question={question} />
          </div>
        ))}
      </div>
    </div>
  );
} 