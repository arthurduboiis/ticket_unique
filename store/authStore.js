import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import {jwtDecode} from 'jwt-decode';



const useAuthStore = create((set, get) => ({
  user: null,
  accessToken: null, 
  setAccessToken: (token) => set({ accessToken: token }),
  setUser: (user) => set({ user }),

   saveRefreshToken: async (token) => {
    await SecureStore.setItemAsync("refresh_token", token);
  },

  getRefreshToken: async () => {
    return await SecureStore.getItemAsync("refresh_token");
  },

  removeRefreshToken: async () => {
    await SecureStore.deleteItemAsync("refresh_token");
  },

  isTokenValid: (token) => {
    try {
      const { exp } = jwtDecode(token); 
      return Date.now() < exp * 1000; 
    } catch (error) {
      console.error("Invalid token:", error);
      return false;
    }
  },

  // *** Déconnexion ***
  logout: async () => {
    set({ user: null, accessToken: null });
    await get().removeRefreshToken();
    console.log("User logged out and tokens cleared.");
  },
}));

export default useAuthStore;
