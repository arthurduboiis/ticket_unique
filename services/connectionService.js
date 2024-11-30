import useAuthStore from "../store/authStore";
import api from "../services/api"; 
import {jwtDecode} from 'jwt-decode';


export const login = async (email, password) => {
  const { setUser, saveRefreshToken, setAccessToken, isTokenValid } = useAuthStore.getState();

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  try {
    const response = await api.post("/auth/login", { email, password });
    const { access_token, refresh_token } = response.data;

    if (!isTokenValid(access_token)) {
      throw new Error("Invalid access token received.");
    }

    // Sauvegarder les tokens
    setAccessToken(access_token);
    await saveRefreshToken(refresh_token);

    // Mettre à jour l'utilisateur
    setUser(jwtDecode(access_token));

    console.log("Login successful");
  } catch (error) {
    console.log("ERROR", error);
    const status = error.response?.status;
    const message = error.response?.data?.message || "An error occurred during login.";
    console.log("STATUS", status);
    if (status === 401) {
      throw new Error(message);
    }
    console.error("Login error:", error);
    throw new Error(message);
  }
};

export const logout = async () => {
  const { logout, removeRefreshToken } = useAuthStore.getState();

  try {
    await removeRefreshToken(); 
    logout(); 
    console.log("Logout successful");
  } catch (error) {
    console.error("Logout error:", error);
    throw new Error("Failed to logout.");
  }
};

const refreshAccessToken = async () => {
  const { getRefreshToken, isTokenValid, setAccessToken, setUser } = useAuthStore.getState();

  try {
    const refreshToken = await getRefreshToken();
    console.log("refreshToken", refreshToken);
    if (!refreshToken || !isTokenValid(refreshToken)) {
      throw new Error("Refresh token invalid or expired");
    }

    const response = await api.post("/auth/refresh", { refreshToken: refreshToken });
    const newAccessToken = response.data.access_token;

    setAccessToken(newAccessToken);

    await setUser(jwtDecode(newAccessToken));

    return newAccessToken;
  }
  catch (error) {

    console.error("Failed to refresh access token:", error);
    throw error;
  }
}

export const initializeSession = async () => {
  const { getRefreshToken, isTokenValid, setAccessToken, setUser, removeRefreshToken } = useAuthStore.getState();

  try {
    const refreshToken = await getRefreshToken();
    if (!refreshToken) {
      console.log("No refresh token found. User not logged in.");
      return;
    }
    if (refreshToken && isTokenValid(refreshToken)) {
      const accessToken = await refreshAccessToken();
      setAccessToken(accessToken);

      await setUser(jwtDecode(accessToken));
    } else {
      console.log("No valid session found. User not logged in.");
    }
  } catch (error) {
    console.error("Failed to initialize session:", error);
    await removeRefreshToken();
    setAccessToken(null);
    setUser(null);
  }
}


export const register = async (email, password, passwordConfirm) => {
  const { setUser, saveRefreshToken, setAccessToken, isTokenValid } = useAuthStore.getState();

  if (!email || !password || !passwordConfirm) {
    throw new Error("All fields are required.");
  }

  if (password !== passwordConfirm) {
    throw new Error("Passwords do not match.");
  }

  try {
    console.log("Registering user with email:", email);
    console.log(api);
    const response = await api.post("/auth/register", { email, password });
    const { access_token, refresh_token } = response.data;

    if (!isTokenValid(access_token)) {
      throw new Error("Invalid access token received.");
    }

    // Sauvegarder les tokens
    setAccessToken(access_token);
    await saveRefreshToken(refresh_token);

    // Mettre à jour l'utilisateur
    setUser(jwtDecode(access_token));


    console.log("Registration successful");
  } catch (error) {
    const status = error.response?.status;
    const message = error.response?.data?.message || "An error occurred during registration.";

    if (status === 400 || status === 401) {
      throw new Error(message);
    }
    console.error("Registration error:", error);
    throw new Error(message);
  }
};

export const changePassword = async (oldPassword, newPassword, confirmPassword) => {
  const { getRefreshToken } = useAuthStore.getState();
  console.log("OLD", oldPassword);
  console.log("NEW", newPassword);
  console.log("CONFIRM", confirmPassword)

  if (!oldPassword || !newPassword || !confirmPassword) {
    throw new Error("Tous les champs sont obligatoires.");
  }

  if (newPassword !== confirmPassword) {
    throw new Error("Le nouveau mot de passe et la confirmation ne correspondent pas.");
  }

  try {
    const token = await getRefreshToken();
    console.log("TOKEN", token);
    const response = await api.patch(
      "/auth/change-password",
      {
        oldPassword,
        newPassword,
        confirmPassword
      },
    );
    console.log("Mot de passe changé avec succès:", response.data);
    return response.data;

  } catch (error) {
    console.error("Erreur lors du changement de mot de passe:", error);
    if (error.response) {
      throw new Error(error.response.data.message || "Erreur lors du changement de mot de passe.");
    } else {
      throw new Error("Erreur réseau ou de connexion.");
    }
  }
};


export const forgotPassword = async (email) => {
  console.log(API_URL);
};
