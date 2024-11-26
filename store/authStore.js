import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import {jwtDecode} from 'jwt-decode';


const useAuthStore = create((set, get) => ({
  user: null,
  saveToken: async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  },
  isTokenValid: (token) => {
    try {
      const { exp} = jwtDecode(token);
      return Date.now() < exp * 1000; 
    } catch (error) {
      console.log(error)
      return false; 
    }
  },

  getToken: async (key) => {
    return await SecureStore.getItemAsync(key);
  },
  removeToken: async (key) => {
    await SecureStore.deleteItemAsync(key);
  },
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;
