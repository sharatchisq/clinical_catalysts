import { BaseQuestionLayout, BaseQuestionProps } from "./BaseQuestion";
import { useWizard } from "../WizardContext";

export function SliderQuestion({ question, onChange }: BaseQuestionProps) {
  const answer = useWizard(state => state.answers[question.id] ?? 0);

  return (
    <BaseQuestionLayout question={question} onChange={onChange}>
      <div className="space-y-2">
        <input
          type="range"
          value={answer}
          onChange={(e) => onChange?.(Number(e.target.value))}
          className="w-full"
          min={question.validation?.min ?? 0}
          max={question.validation?.max ?? 100}
          step={question.validation?.step ?? 1}
          aria-label={question.text}
          title={question.text}
        />
        <div className="text-center font-medium">{answer}</div>
      </div>
    </BaseQuestionLayout>
  );
}
