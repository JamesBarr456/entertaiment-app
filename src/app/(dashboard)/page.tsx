import { CarouselFilms, CatalogueFilms } from "@/components";

export default async function HomePage() {
  /* const trendingMovies = (await fetchTrendingMovies()).results.slice(0, 10);
  const topRatedMovies = (await fetchTopRatedMovies()).results.slice(0, 10);
  const trendingTV = (await fetchTrendingTV()).results.slice(0, 10);
  const topRatedTv = (await fetchTopRatedTv()).results.slice(0, 10); */

  return (
    <section className="space-y-6">
      {/* Trending for week */}
      <h1 className="text-xl font-light text-white md:text-[32px]">
        Trending Movies
      </h1>
      <CarouselFilms items={trendingMovies} type="movie" />

      {/* Top Rated Movies */}
      <h2 className="text-xl font-light text-white md:text-[32px]">
        Top Rated Movies
      </h2>
      <CatalogueFilms items={topRatedMovies} type="movie" />

      {/* Trending Tv for week */}
      <h2 className="text-xl font-light text-white md:text-[32px]">
        Trending Tv
      </h2>
      <CarouselFilms items={trendingTV} type="tv" />

      {/* Top Rated Movies */}
      <h2 className="text-xl font-light text-white md:text-[32px]">
        Top Rated Tv Series
      </h2>
      <CatalogueFilms items={topRatedTv} type="tv" />
    </section>
  );
}
