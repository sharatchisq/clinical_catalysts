import React from "react";
import { BaseQuestionLayout, BaseQuestionProps } from "./BaseQuestion";
import { cn } from "../../../../lib/utils";
import { useWizard } from "../WizardContext";

export function RadioQuestion({ question, onChange }: BaseQuestionProps) {
  const answer = useWizard(state => state.answers[question.id]) ?? "";

  return (
    <BaseQuestionLayout question={question} onChange={onChange}>
      <div className="space-y-2">
        {question.options?.map((option) => (
          <label
            key={option.value}
            className={cn(
              "flex items-center space-x-4 p-4 rounded-lg border-2",
              "transition-colors duration-200",
              "text-lg",
              answer === option.value
                ? "border-[#4A90E2] bg-[#E6F3FF]"
                : "border-gray-200 hover:bg-[#FAFAFA]"
            )}
          >
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={answer === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="h-4 w-4 text-blue-600"
            />
            <span className="text-sm font-medium text-gray-900">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </BaseQuestionLayout>
  );
}
