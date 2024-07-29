import { MoviesGrid, ToogleGroupGenres, MovieCard } from "@/components";

const genresList = [
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
  //**
  //*?
  //*Todo: Llamar a la api para mostrar las movies y renderizarlo dentro de MoviesGrid
  //*!Falta hacer la funcionalidad para cuando se seleccione el genero renderize nuevamente las movies pero con el genero seleccionado
  return (
    <div>
      <h1 className="text-xl font-light text-white md:text-[32px]">Movies</h1>
      <ToogleGroupGenres genres={genresList} />
      {/* <MoviesGrid>
        //** pasar la data por parametro a la MovieCard
        {data.map(movie => (
          <MovieCard index={id} {...data}/>
        ))}
      </MoviesGrid> */}
    </div>
  );
}
