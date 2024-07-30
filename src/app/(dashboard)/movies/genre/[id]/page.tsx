import { MovieCard, MoviesGrid, Paginations } from "@/components";
import { useResults } from "@/hooks/useResults";

interface Props {
  params: { id: string };
}

export default function GenrePage({ params }: Props) {
  const genre = params.id;
  const { results } = useResults("movie", genre);

  return (
    <section>
      <MoviesGrid>
        {results.map((result) => (
          <MovieCard key={result.id} {...result} />
        ))}
      </MoviesGrid>
      <div>
        <Paginations />
      </div>
    </section>
  );
}
