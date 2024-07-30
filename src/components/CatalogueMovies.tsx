import type { Movie } from "@/interfaces/interfaces";
import { MoviesGrid, MovieCard } from "./";

interface Props {
  items: Movie[];
}

export const CatalogueMovies = ({ items }: Props) => {
  return (
    <article>
      <MoviesGrid>
        {items.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </MoviesGrid>
    </article>
  );
};
