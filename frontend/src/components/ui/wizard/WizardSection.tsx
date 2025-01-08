import React from "react";
import { useWizard } from "./WizardContext";
import { questionnaire } from "../../../data/questions";
import { QuestionRenderer } from "./QuestionRenderer";

export function WizardSection() {
  const currentSectionId = useWizard(state => state.currentSectionId);
  const currentSection = questionnaire.sections.find(s => s.id === currentSectionId);

  if (!currentSection) return null;

  return (
    <div className="space-y-8">
      {currentSection.questions.map((question) => (
        <QuestionRenderer key={question.id} question={question} />
      ))}
    </div>
  );
} 