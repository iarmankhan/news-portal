import { create } from "zustand";

interface NewsStore {
  search: string;
  page: number;
  setSearch: (search: string) => void;
  setPage: (page: number) => void;

  category: string;
  setCategory: (category: string) => void;
}

export const useNewsStore = create<NewsStore>((set) => ({
  search: "",
  page: 1,
  setSearch: (search) => set({ search }),
  setPage: (page) => set({ page }),

  category: "all",
  setCategory: (category) => set({ category }),
}));
