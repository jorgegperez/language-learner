import { create } from "zustand";

interface IStore {
  points: number;
  setPoints: (points: number) => void;
}

const store = create<IStore>((set) => ({
  points: 0,
  setPoints: (points) => set({ points }),
}));

export const useUserPoints = () => {
  const { points, setPoints } = store();

  return { points, setPoints };
};
