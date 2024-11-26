import axios from "axios";
import * as SecureStore from "expo-secure-store";
import useAuthStore from "../store/authStore";

const API_URL = process.env.URL_BACKEND;

// Créez une instance Axios avec une base URL
const api = axios.create({
  baseURL: API_URL,
});

// Fonction pour rafraîchir le token d'accès
const refreshAccessToken = async () => {
  const { saveRefreshToken } = useAuthStore.getState();

  try {
    const refreshToken = await SecureStore.getItemAsync("refresh_token");
    if (!refreshToken) throw new Error("No refresh token found");

    const response = await axios.post(`${API_URL}/auth/refresh`, {
      refresh_token: refreshToken,
    });

    const { access_token, refresh_token: newRefreshToken } = response.data;

    // Mettre à jour les tokens dans SecureStore et dans le state
    if (newRefreshToken) {
      await SecureStore.setItemAsync("refresh_token", newRefreshToken);
      saveRefreshToken(newRefreshToken);
    }

    return access_token;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    throw error;
  }
};

// Ajouter un intercepteur pour les requêtes
api.interceptors.request.use(async (config) => {
  const { accessToken, isTokenValid, setAccessToken } = useAuthStore.getState();

  let currentAccessToken = accessToken;

  // Vérifier si le token est valide
  if (currentAccessToken && !isTokenValid(currentAccessToken)) {
    try {
      currentAccessToken = await refreshAccessToken();
      setAccessToken(currentAccessToken); // Mettre à jour le token dans le store
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  }

  // Ajouter le token d'accès dans les headers Authorization
  if (currentAccessToken) {
    config.headers.Authorization = `Bearer ${currentAccessToken}`;
  }

  return config;
});

export default api;
