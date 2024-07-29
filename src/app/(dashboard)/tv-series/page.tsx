import { GridGenres } from "@/components";
import { fetchGenresTvSeries } from "@/lib/tmdb";

export default async function TvSeriesPage() {
  const dataGenres = await fetchGenresTvSeries();

  return (
    <div>
      <div>
        <h1 className="text-white">Esta es la pagina de tv-series </h1>
        <GridGenres array={dataGenres.genres} type="tv-series" />
      </div>
    </div>
  );
}
