import { CardItem } from "@/components/CardItem";
import { Movie } from "@/interfaces/interfaces";
import { TMDB_ENDPOINT, TMDB_TOKEN } from "@/lib/tmdb";

// interface GetMovies {
//   genre: string;
//   page: number;
// }

interface Props {
  params: { id: string };
}

const getMovies = async (genre: any, page: number = 1) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };
  const data = await fetch(
    `${TMDB_ENDPOINT}/discover/movie?language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`,
    options,
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
  return data;
};

export default async function GenrePage({ params }: Props) {
  const { results }: { results: Movie[] } = await getMovies(params.id, 1);

  return (
    <section className="my-4 flex flex-wrap justify-between gap-4">
      {results.map((result) => (
        <CardItem key={result.id} {...result} />
      ))}
    </section>
  );
}
