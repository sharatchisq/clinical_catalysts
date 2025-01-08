import { useWizard } from "./WizardContext";
import { Question } from "./questions/types";
import { questionnaire } from "../../../data/questions";
import { cn } from "../../../lib/utils";
import {
  RadioQuestion,
  CheckboxQuestion,
  TextQuestion,
  NumberQuestion,
  DateQuestion,
  SliderQuestion,
  TextAreaQuestion,
  MultiSelectQuestion,
  StatementQuestion,
  HeadingQuestion,
} from "./questions";

interface QuestionRendererProps {
  question: Question;
}

export function QuestionRenderer({ question }: QuestionRendererProps) {
  const setAnswer = useWizard(state => state.setAnswer);

  const handleAnswerChange = (value: any) => {
    setAnswer(question.id, value);
  };

  const renderQuestion = (q: Question) => {
    switch (q.type) {
      case "heading":
        return <HeadingQuestion question={q} />;
      case "radio":
        return <RadioQuestion question={q} onChange={handleAnswerChange} />;
      case "checkbox":
        return <CheckboxQuestion question={q} onChange={handleAnswerChange} />;
      case "text":
        return <TextQuestion question={q} onChange={handleAnswerChange} />;
      case "textarea":
        return <TextAreaQuestion question={q} onChange={handleAnswerChange} />;
      case "number":
        return <NumberQuestion question={q} onChange={handleAnswerChange} />;
      case "date":
        return <DateQuestion question={q} onChange={handleAnswerChange} />;
      case "slider":
        return <SliderQuestion question={q} onChange={handleAnswerChange} />;
      case "multiSelect":
        return (
          <MultiSelectQuestion question={q} onChange={handleAnswerChange} />
        );
      case "statement":
        return <StatementQuestion question={q} onChange={handleAnswerChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
      <div className="text-xl font-semibold text-[#2C3E50]">
        {question.text}
      </div>
      {question.required && (
        <span className="text-[#D32F2F] text-sm">* Required</span>
      )}
      {renderQuestion(question)}
    </div>
  );
}
