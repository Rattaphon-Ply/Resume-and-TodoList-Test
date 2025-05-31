import { create } from 'zustand';

export const useModalStore = create((set) => ({
  isModalOpen: false,
  setModalOpen: (val) => set({ isModalOpen: val }),
}));