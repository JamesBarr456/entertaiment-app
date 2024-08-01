//Con esto se puede traer ya la pelicula

import { CardGenre, CollectionFilms, GridCards } from "@/components";

import { fetchGenresMovie } from "@/lib/tmdb";

export default async function MoviesPage() {
  const dataGenres = await fetchGenresMovie();
  return (
    <div>
      <h1 className="text-white">Movies </h1>
      <GridCards>
        {dataGenres.genres.map((genre) => (
          <CardGenre key={genre.id} id={genre.id} name={genre.name} />
        ))}
      </GridCards>
      <GridCards>
        <CollectionFilms type="movie" />
      </GridCards>
    </div>
  );
}
