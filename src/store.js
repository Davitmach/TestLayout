import { create } from 'zustand'

const useStore = create((set) => ({
  activeSection: '', 
  setActiveSection: (section) => set({ activeSection: section }),
}));

export default useStore;
