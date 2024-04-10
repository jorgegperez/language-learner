import { create } from "zustand";

interface IStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  apiKey?: string;
  setApiKey: (apiKey?: string) => void;
}

const store = create<IStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  setApiKey: (apiKey) => set({ apiKey }),
}));

export const useConfigModal = () => {
  const { isOpen, setIsOpen, apiKey, setApiKey } = store();

  return { isOpen, setIsOpen, apiKey, setApiKey };
};
