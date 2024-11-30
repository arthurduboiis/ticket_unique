import { useColorScheme } from 'react-native';
import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'light', // Valeur par défaut
  setTheme: (newTheme) => set({ theme: newTheme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
