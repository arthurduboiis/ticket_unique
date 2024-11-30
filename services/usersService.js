import useAuthStore from "../store/authStore";
import api from "../services/api"; 

export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to get user by id:", error);
    throw error;
  }
}

export const updateUser = async (id, data) => {
  const { setUser } = useAuthStore.getState();
  try {
    const response = await api.patch(`/users/${id}`, data);
    setUser(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to update user:", error);
    throw error;
  }
}