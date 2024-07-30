"use client";

import { DiscoverFind, Movie } from "@/interfaces/interfaces";
import { optionsFecthTMDB, urlFindDiscover } from "@/lib/tmdb";
import usePaginationStore from "@/store/store";
import { useEffect, useState } from "react";

const fetchResults = async (
  type: string,
  page: number,
  genre: string, //!Todo: Hacerlo opcional
): Promise<DiscoverFind> => {
  const url = `${urlFindDiscover}/${type}?language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`;
  const response = await fetch(url, optionsFecthTMDB);
  const data = await response.json();
  return data;
};

export const useResults = (type: string, genre: string) => {
  const { currentPage, setTotalPages } = usePaginationStore();
  const [results, setResults] = useState<Movie[]>([]);
  console.log("prueba 1");
  useEffect(() => {
    const loadMovies = async () => {
      const moviesTmdb = await fetchResults(type, currentPage, genre);
      console.log(moviesTmdb);
      setResults(moviesTmdb.results);
      setTotalPages(moviesTmdb.total_pages);
    };

    loadMovies();
  }, [type, genre, currentPage, setTotalPages]);

  return { results };
};
