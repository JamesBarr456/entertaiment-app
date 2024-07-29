//Con esto se puede traer ya la pelicula

import { GridGenres } from "@/components";

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
];

export default async function MoviesPage() {
  return (
    <div>
      <h1 className="text-white">Esta es la pagina de movies </h1>
      <GridGenres array={genres} type="movies" />
    </div>
  );
}
