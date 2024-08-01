"use client";

import { DiscoverFind, Movie, Serie } from "@/interfaces/interfaces";
import { optionsFecthTMDB, urlFindDiscover } from "@/lib/tmdb";
import { usePaginationStore } from "@/store/store";

import { useEffect, useState } from "react";

const fetchResults = async (
  type: string,
  page: number,
  genre: number,
): Promise<DiscoverFind> => {
  let url;
  if (genre !== 0) {
    url = `${urlFindDiscover}/${type}?language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`;
  } else {
    url = `${urlFindDiscover}/${type}?language=en-US&page=${page}&sort_by=popularity.desc`;
  }

  const response = await fetch(url, optionsFecthTMDB);
  const data = await response.json();
  return data;
};

export const useResults = (type: string, genre: number) => {
  const { currentPage, setTotalPages } = usePaginationStore();
  const [results, setResults] = useState<(Movie | Serie)[]>([]);
  useEffect(() => {
    const loadMovies = async () => {
      const moviesTmdb = await fetchResults(type, currentPage, genre);
      setResults(moviesTmdb.results);
      setTotalPages(moviesTmdb.total_pages);
    };

    loadMovies();
  }, [type, genre, currentPage, setTotalPages]);

  return { results };
};
