import { MovieCard } from "./MovieCard";
import { MoviesGrid } from "./MoviesGrid";

export const CatalogueMovies = () => {
  return (
    <article>
      <MoviesGrid>
        {Array.from({ length: 26 }).map((_, index) => (
          <MovieCard key={index} />
        ))}
      </MoviesGrid>
    </article>
  );
};
