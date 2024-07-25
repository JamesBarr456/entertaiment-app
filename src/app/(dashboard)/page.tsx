import { CarouselMovies, CatalogueMovies } from "@/components";

export default function HomePage() {
  return (
    <section>
      <h1 className="mb-6 text-xl font-light text-white">Trending</h1>
      <CarouselMovies />
      <CatalogueMovies title="Recommended for you" />
    </section>
  );
}
