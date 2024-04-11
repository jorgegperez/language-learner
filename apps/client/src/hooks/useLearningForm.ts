import { create } from "zustand";
import { IExercise } from "../common";

interface IStore {
  exercise?: IExercise;
  setExercise: (exercise?: IExercise) => void;
  step: number;
  setStep: (step: number) => void;
}

const store = create<IStore>((set) => ({
  step: 0,
  setStep: (step) => set({ step }),
  setExercise: (exercise) => set({ exercise }),
}));

export const useLearningForm = () => {
  const { step, setStep, exercise, setExercise } = store();
  return { step, setStep, exercise, setExercise };
};
