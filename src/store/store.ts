import create from "zustand";

interface PaginationState {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  setTotalPages: (pages: number) => void;
}
interface GenreState {
  currentGenre: number;
  setCurrentGenre: (genre: number) => void;
}
//Aqui manejamos la paginacion
export const usePaginationStore = create<PaginationState>((set) => ({
  currentPage: 1,
  totalPages: 1,

  setCurrentPage: (page: number) => set({ currentPage: page }),
  setTotalPages: (pages: number) => set({ totalPages: pages }),
}));

//Aqui manejamos los generos al hacer click
export const useGenreStore = create<GenreState>((set) => ({
  currentGenre: 0,
  setCurrentGenre: (genre: number) => set({ currentGenre: genre }),
}));
