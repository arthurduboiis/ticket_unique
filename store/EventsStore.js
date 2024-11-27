import { create } from "zustand";

const useEventsStore = create((set, get) => ({
  events: [],
  setEvents: (events) => set({ events }),
  getEvents: () => get().events,
  getEventsById: (id) => get().events.find((event) => event.id === id),
}));

export default useEventsStore;