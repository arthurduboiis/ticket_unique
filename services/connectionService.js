import useAuthStore from "../store/authStore";
import axios from "axios";

const API_URL = process.env.URL_BACKEND;

export const login = async (email, password) => {
  const { setUser, isTokenValid, saveToken } = useAuthStore.getState();

  if (!email || !password) {
    return;
  }
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    if (isTokenValid(response.data.access_token)) {
      saveToken("token", response.data.access_token);
      setUser(response.data);
    }
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message);
    }
  }
};

export const logout = async () => {
  const { logout, removeToken } = useAuthStore.getState();
  await removeToken("token");
  logout();
};

export const register = async (email, password, passwordConfirm) => {
  const { setUser, isTokenValid, saveToken } = useAuthStore.getState();

  if (!email || !password || !passwordConfirm) {
    return;
  }

  if (password !== passwordConfirm) {
    return;
  }

  try {
    console.log(email, password);
    const response = await axios.post(`${API_URL}/auth/register`, {
      email,
      password,
    });
    if (isTokenValid(response.data.access_token)) {
      saveToken("token", response.data.access_token);
      setUser(response.data);
    }
  } catch (error) {
    if (error.response.status >= 401) {
      console.log(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  }
};

export const forgotPassword = async (email) => {
  console.log(API_URL);
};
