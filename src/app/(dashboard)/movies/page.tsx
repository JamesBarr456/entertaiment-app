import { CollectionFilms, ToogleGroupGenres } from "@/components";
import { fetchGenresMovie } from "@/lib/tmdb";

export default async function MoviesPage() {
  const dataGenres = await fetchGenresMovie();

  return (
    <section className="flex flex-col gap-6">
      <ToogleGroupGenres genres={dataGenres.genres} />
      <CollectionFilms type="movie" />
    </section>
  );
}
