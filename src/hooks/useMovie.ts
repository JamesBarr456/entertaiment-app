import { Movie } from "@/interfaces/interfaces";
import { TMDB_ENDPOINT, TMDB_TOKEN } from "@/lib/tmdb";
import usePaginationStore from "@/store/store";
import { useEffect, useState } from "react";

const fetchMovies = async (genre: string, page: number) => {
  const urlFetch = `${TMDB_ENDPOINT}/discover/movie?language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };
  const data = await fetch(urlFetch, options)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
  return data;
};

export const useFecthMovies = (genre: string) => {
  const { currentPage, setTotalPages } = usePaginationStore();

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      const moviesTmdb = await fetchMovies(genre, currentPage);
      console.log(moviesTmdb);
      setMovies(moviesTmdb.results);
      setTotalPages(moviesTmdb.total_pages);
    };

    loadMovies();
  }, [genre, currentPage, setTotalPages]);

  return { movies };
};
