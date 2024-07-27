import { create } from "zustand";

export const useCount = create((set) => ({
  count: 0,
  username: "",
  actions: {
    increase: () => {
      set((state) => {
        return {
          count: state.count + 1,
        };
      });
    },
    decrease: () => {
      set((state) => ({
        count: state.count - 1,
      }));
    },
  },
}));
