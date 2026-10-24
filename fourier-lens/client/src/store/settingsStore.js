import { create } from 'zustand'

export const useSettingsStore = create((set) => ({
  showGrid: false,
  showSpectrum: true,
  toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),
  toggleSpectrum: () => set((state) => ({ showSpectrum: !state.showSpectrum })),
  setShowGrid: (showGrid) => set({ showGrid }),
  setShowSpectrum: (showSpectrum) => set({ showSpectrum }),
}))
