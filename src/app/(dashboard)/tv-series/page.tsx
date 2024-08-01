import { CardGenre, CollectionFilms, GridCards } from "@/components";
import { fetchGenresTvSeries } from "@/lib/tmdb";

export default async function TvSeriesPage() {
  const dataGenres = await fetchGenresTvSeries();

  return (
    <div>
      <h1 className="text-white">Tv Series </h1>
      <GridCards>
        {dataGenres.genres.map((genre) => (
          <CardGenre key={genre.id} id={genre.id} name={genre.name} />
        ))}
      </GridCards>
      <GridCards>
        <CollectionFilms type="tv" />
      </GridCards>
    </div>
  );
}
