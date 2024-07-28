"use client";
import { CardItem } from "@/components/CardItem";

import { Movie } from "@/interfaces/interfaces";
import { TMDB_ENDPOINT, TMDB_TOKEN } from "@/lib/tmdb";

import { Paginations } from "@/components";
import usePaginationStore from "@/store/store";
import { useFecthMovies } from "@/hooks/useMovie";

interface Props {
  params: { id: string };
}

export default function GenrePage({ params }: Props) {
  const genre = params.id;

  const { movies } = useFecthMovies(genre);
  return (
    <section>
      <div className="my-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7 2xl:grid-cols-4">
        {movies.map((movie) => (
          <CardItem key={movie.id} {...movie} />
        ))}
      </div>
      <div>
        <Paginations />
        {/* TODO: aqui le tenemos que mandar la cantidad de pages y el page actual */}
      </div>
    </section>
  );
}
