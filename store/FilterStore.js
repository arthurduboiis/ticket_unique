import { create } from 'zustand';

const useFilterStore = create((set) => ({
  filteredCity: [],
  filteredDate: {
    startDate: null,
    endDate: null,
  },
  setFilteredCity: (cities) => set({ filteredCity: cities }),
  setFilteredDate: (dates) => set({ filteredDate: dates }),
  resetFilters: () =>
    set({ filteredCity: [], filteredDate: { startDate: null, endDate: null } }),
}));

export default useFilterStore;
