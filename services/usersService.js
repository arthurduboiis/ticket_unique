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
  try {
    const response = await api.put(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Failed to update user:", error);
    throw error;
  }
}