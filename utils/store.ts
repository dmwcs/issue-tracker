import { create } from 'zustand';

interface errState {
  error: string;
  setError: (err: string) => void;
}

interface isSubmitState {
  isSubmit: boolean;
  setIsSubmit: (submitStatus: boolean) => void;
}

export const useErrStore = create<errState>()((set) => ({
  error: '',
  setError: (err) => set((state) => ({ error: err })),
}));

export const useIsSubmit = create<isSubmitState>()((set) => ({
  isSubmit: false,
  setIsSubmit: (submitStatus) => set(() => ({ isSubmit: submitStatus })),
}));
