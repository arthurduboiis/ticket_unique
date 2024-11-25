import { create } from "zustand";

const useAuthStore = create((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;