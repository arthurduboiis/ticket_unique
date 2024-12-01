import api from "../services/api";
import useTicketsStore from "../store/TicketsStore";
import useAuthStore from "../store/authStore";

export const fetchMyTickets = async () => {
  const { user } = useAuthStore.getState();
  const { setTickets } = useTicketsStore.getState();
  try {
    const response = await api.get(`/tickets/user/${user.id}`);
    setTickets(response.data);
  } catch (error) {
    console.error("Failed to fetch tickets:", error.response.message);
    throw error;
  }
}