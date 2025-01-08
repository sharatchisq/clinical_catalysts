import { create } from 'zustand';
import { questionnaire } from '../../../data/questions';

interface WizardState {
  currentSectionId: string;
  answers: { [key: string]: any };
  setAnswer: (questionId: string, value: any) => void;
  nextSection: () => void;
  previousSection: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export const useWizard = create<WizardState>((set, get) => ({
  currentSectionId: questionnaire.sections[0].id,
  answers: {},
  canGoNext: true,
  canGoPrevious: false,

  setAnswer: (questionId: string, value: any) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: value },
    })),

  nextSection: () => {
    const { currentSectionId } = get();
    const currentSectionIndex = questionnaire.sections.findIndex(s => s.id === currentSectionId);
    
    if (currentSectionIndex < questionnaire.sections.length - 1) {
      const nextSection = questionnaire.sections[currentSectionIndex + 1];
      set({ currentSectionId: nextSection.id });
    }
  },

  previousSection: () => {
    const { currentSectionId } = get();
    const currentSectionIndex = questionnaire.sections.findIndex(s => s.id === currentSectionId);
    
    if (currentSectionIndex > 0) {
      const previousSection = questionnaire.sections[currentSectionIndex - 1];
      set({ currentSectionId: previousSection.id });
    }
  },
}));

export const useWizardAnswer = (questionId: string) => 
  useWizard(state => state.answers[questionId]);
