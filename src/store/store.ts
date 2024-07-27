import create from "zustand";

interface PaginationState {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  setTotalPages: (pages: number) => void;
}
const usePaginationStore = create<PaginationState>((set) => ({
  currentPage: 1,
  totalPages: 1,

  setCurrentPage: (page: number) => set({ currentPage: page }),
  setTotalPages: (pages: number) => set({ totalPages: pages }),
}));

export default usePaginationStore;
