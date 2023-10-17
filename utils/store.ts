import { create } from 'zustand';

interface errState {
  error: string;
  setError: (err: string) => void;
}

const useErrStore = create<errState>()((set) => ({
  error: '',
  setError: (err) => set((state) => ({ error: err })),
}));

export default useErrStore;
