import { create } from "zustand";


// Create the store
const useStore = create((set) => ({
    jobs: [], 

    setJobs: (jobs) => set({ jobs }),

    clearJobs: () => set({ jobs: [] }),
}));

// Export the store
export default useStore;