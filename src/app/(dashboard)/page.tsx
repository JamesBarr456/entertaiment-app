import { CarouselMovies, CatalogueMovies } from "@/components";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-xl font-light text-white md:text-[32px]">Trending</h1>
      <CarouselMovies />
      <h2 className="text-xl font-light text-white md:text-[32px]">
        Recommended for you
      </h2>
      <CatalogueMovies />
    </section>
  );
}
