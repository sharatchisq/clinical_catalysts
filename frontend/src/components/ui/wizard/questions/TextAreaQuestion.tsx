import { BaseQuestionLayout, BaseQuestionProps } from "./BaseQuestion";
import { useWizard } from "../WizardContext";

export function TextAreaQuestion({ question, onChange }: BaseQuestionProps) {
  const answer = useWizard(state => state.answers[question.id] ?? "");

  return (
    <BaseQuestionLayout question={question} onChange={onChange}>
      <textarea
        value={answer}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
        placeholder="Type your answer here..."
      />
    </BaseQuestionLayout>
  );
}
