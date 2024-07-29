import { MovieCard, MoviesGrid, Paginations } from "@/components";
import { useFecthMovies } from "@/hooks/useMovie";

interface Props {
  params: { id: string };
}

export default function GenrePage({ params }: Props) {
  const genre = params.id;

  const { movies } = useFecthMovies(genre);

  return (
    <section>
      <MoviesGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </MoviesGrid>
      <div>
        <Paginations />
        {/* TODO: aqui le tenemos que mandar la cantidad de pages y el page actual */}
      </div>
    </section>
  );
}
