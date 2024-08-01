import { CarouselMovies, CatalogueMovies } from "@/components";
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchTrendingTV,
} from "@/lib/tmdb";

export default async function HomePage() {
  const trendingMovies = await fetchTrendingMovies();
  const topRatedMovies = await fetchTopRatedMovies();
  const trendingTV = await fetchTrendingTV();

  const top10Movies = trendingMovies.results.slice(0, 10);
  const top10Rate = topRatedMovies.results.slice(0, 10);
  const top10TV = trendingTV.results.slice(0, 10);

  return (
    <section className="space-y-6">
      <h1 className="text-xl font-light text-white md:text-[32px]">
        Trending for Week
      </h1>
      <CarouselMovies items={top10Movies} />
      <h2 className="text-xl font-light text-white md:text-[32px]">
        Top Rated
      </h2>

      {/* <CatalogueMovies items={top10Rate} /> */}
      <h2 className="text-xl font-light text-white md:text-[32px]">Upcoming</h2>
      {/* <CarouselMovies items={top10TV} /> */}
    </section>
  );
}
