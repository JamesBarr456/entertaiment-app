"use client";

import { useResults } from "@/hooks/useResults";
import { CardItem } from "./CardItem";
import { Paginations } from "./Paginations";
import { useGenreStore } from "@/store/store";
import { GridCards } from "./GridGenres";

interface Props {
  type: "movie" | "tv";
}

export const CollectionFilms = ({ type }: Props) => {
  const { currentGenre } = useGenreStore();
  const { results } = useResults(type, currentGenre);
  return (
    <div>
      <GridCards>
        {results.map((result) => (
          <CardItem
            key={result.id}
            backdrop_path={result.backdrop_path}
            type={type}
            title={"title" in result ? result.title : result.name} // Manejar propiedades específicas de Movie y Serie
            release_date={
              "release_date" in result
                ? result.release_date
                : result.first_air_date
            } // Manejar propiedades específicas
          />
        ))}
      </GridCards>
      <div>
        <Paginations />
      </div>
    </div>
  );
};
