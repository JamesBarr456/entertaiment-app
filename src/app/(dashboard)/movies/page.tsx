//Con esto se puede traer ya la pelicula

import { CollectionFilms, ToogleGroupGenres } from "@/components";
import { useFetch } from "@/hooks/useFecth";
import { GenresFind } from "../../../interfaces/interfaces";

import {
  fetchGenresMovie,
  optionsFecthTMDB,
  urlFindGenreMovie,
} from "@/lib/tmdb";

export default async function MoviesPage() {
  const dataGenres = await fetchGenresMovie();

  return (
    <section className="flex flex-col gap-6">
      <ToogleGroupGenres genres={dataGenres.genres} />
      <CollectionFilms type="movie" />
    </section>
  );
}

// export default function MoviesPage() {
//   // const dataGenres = await fetchGenresMovie();
//   const { data, loading, error } = useFetch<GenresFind>(
//     urlFindGenreMovie,
//     optionsFecthTMDB,
//   );
//   // console.log(data);
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (!data) return <div>No data found</div>;

//   return (
//     <section className="flex flex-col gap-6">
//       <ToogleGroupGenres genres={data.genres} />
//       <CollectionFilms type="movie" />
//     </section>
//   );
// }
