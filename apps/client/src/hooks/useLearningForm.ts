import { create } from "zustand";
import { ELevel, IExercise } from "../common";

interface IStore {
  exercise?: IExercise;
  setExercise: (exercise?: IExercise) => void;
  step: number;
  setStep: (step: number) => void;
  level: ELevel;
  topic?: string;
  setLevelAndTopic: (level?: ELevel, topic?: string) => void;
}

const store = create<IStore>((set) => ({
  step: 0,
  setStep: (step) => set({ step }),
  setExercise: (exercise) => set({ exercise }),
  level: ELevel.BEGINNER,
  setLevelAndTopic: (level, topic) => set({ level, topic }),
}));

export const useLearningForm = () => {
  const {
    step,
    level,
    topic,
    exercise,
    setStep,
    setExercise,
    setLevelAndTopic,
  } = store();

  return {
    step,
    level,
    topic,
    exercise,
    setStep,
    setExercise,
    setLevelAndTopic,
  };
};
