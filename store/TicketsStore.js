import { create } from "zustand";

const useTicketsStore = create((set, get) => ({
  tickets: [],
  setTickets: (tickets) => set({ tickets }),
  getTickets: () => get().tickets,
  getTicketsById: (id) => get().tickets.find((ticket) => ticket.id === id),
}));

export default useTicketsStore;