import { CollectionFilms, ToogleGroupGenres } from "@/components";
import { fetchGenresTvSeries } from "@/lib/tmdb";

export default async function TvSeriesPage() {
  const dataGenres = await fetchGenresTvSeries();

  return (
    <div className="flex flex-col gap-6">
      <ToogleGroupGenres genres={dataGenres.genres} />
      <CollectionFilms type="tv" />
    </div>
  );
}
