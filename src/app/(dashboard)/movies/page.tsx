//Con esto se puede traer ya la pelicula

import { GridGenres } from "@/components";

// import Image from "next/image";

// const getMovies = async (): Promise<any> => {
//   const API_KEY = "d2a2c356ace0c552ee7f2d74affbc6a1";
//   const URL_BASE = "https://api.themoviedb.org/3";

//   const data = await fetch(`${URL_BASE}/movie/550?api_key=${API_KEY}`)
//     .then((res) => res.json())
//     .catch((err) => {
//       console.log(err.message);
//     });

//   return data;
// };
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
  // const movies = await getMovies();
  return (
    <div>
      <h1 className="text-white">Esta es la pagina de movies </h1>
      <GridGenres array={genres} />
      {/* <Image
        src={`${URL_IMAGE}${movies.poster_path}`}
        alt="pelicula"
        width={250}
        height={250}
      /> */}
    </div>
  );
}
