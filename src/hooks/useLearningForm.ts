import { create } from "zustand";
import { ELevel } from "../common";

interface IStore {
  topic?: string;
  level?: ELevel;
  setFormData: (level: ELevel, topic?: string) => void;
  step: number;
  setStep: (step: number) => void;
}

const store = create<IStore>((set) => ({
  step: 0,
  setStep: (step) => set({ step }),
  setFormData: (level, topic) => set({ level, topic }),
}));

export const useLearningForm = () => {
  const { topic, step, setStep, level, setFormData } = store();

  return { topic, step, setStep, level, setFormData };
};
