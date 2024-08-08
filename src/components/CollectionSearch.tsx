"use client";
import { CardItem } from "./CardItem";
import { Paginations } from "./Paginations";
import { GridCards } from "./GridCards";
import { SearchFilms } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import { fetchSearchFilms } from "@/lib/tmdb";
import { usePaginationStore } from "@/store/store";

interface Props {
  //   array: SearchFilms[];
  name: string;
}

export const CollectionSearch = ({ name }: Props) => {
  const { currentPage, setTotalPages, totalPages } = usePaginationStore();

  const [results, setResults] = useState<SearchFilms[]>([]);

  const [totalResults, setTotalResults] = useState<number>(0);

  useEffect(() => {
    const loadMovies = async () => {
      const { results, total_results, total_pages } = await fetchSearchFilms(
        name,
        currentPage,
      );
      const data = results.filter((item) => item.media_type !== "person");
      setResults(data);
      setTotalPages(total_pages);
      setTotalResults(total_results);
    };

    loadMovies();
  }, [name, currentPage, setTotalPages, setTotalResults]);

  // Asumiendo que result es de tipo SearchFilms
  const getTitle = (result: SearchFilms): string => {
    if (result.media_type === "movie") {
      return result.title ?? "No Title"; // Usa title si es película, con valor por defecto
    } else if (result.media_type === "tv") {
      return result.name ?? "No Name"; // Usa name si es serie, con valor por defecto
    }
    return "Unknown Title";
  };

  const getReleaseDate = (result: SearchFilms): string => {
    if (result.media_type === "movie") {
      return result.release_date ?? "No Release Date"; // Usa release_date si es película, con valor por defecto
    } else if (result.media_type === "serie") {
      return result.first_air_date ?? "No Air Date"; // Usa first_air_date si es serie, con valor por defecto
    }
    return "Unknown Date";
  };
  return (
    <div className="flex flex-col gap-10">
      <GridCards>
        {results.map((result) => (
          <CardItem
            key={result.id}
            backdrop_path={result.backdrop_path}
            type={result.media_type}
            title={getTitle(result)}
            release_date={getReleaseDate(result)}
          />
        ))}
      </GridCards>
      <Paginations />
    </div>
  );
};
