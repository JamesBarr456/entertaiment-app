//Con esto se puede traer ya la pelicula

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

export default async function MoviesPage() {
  // const movies = await getMovies();
  // const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>Esta es la pagina de movies </h1>
      {/* <Image
        src={`${URL_IMAGE}${movies.poster_path}`}
        alt="pelicula"
        width={250}
        height={250}
      /> */}
    </div>
  );
}
