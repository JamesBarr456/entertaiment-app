import {
  DiscoverFind,
  DiscoverFindTV,
  GenresFind,
} from "../interfaces/interfaces";

// Aqui los endpoints y el API_KEY
export const TMDB_ENDPOINT = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";
export const TMDB_TOKEN = process.env.TMDB_TOKEN;

//Esto es para mandarle las optiones al fecth
export const optionsFecthTMDB = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
};

//Aqui agregamos las url´s donde hacer las peticiones
export const urlFindDiscover = `${TMDB_ENDPOINT}/discover`;
export const urlFindGenreTvSerie = `${TMDB_ENDPOINT}/genre/tv/list?language=en`;
export const urlFindGenreMovie = `${TMDB_ENDPOINT}/genre/movie/list?language=en`;
export const urlTrendingMovies = `${TMDB_ENDPOINT}/trending/movie/week`;
export const urlTopRatedMovies = `${TMDB_ENDPOINT}/movie/top_rated?language=en-US&page=1`;
export const urlTrendingTV = `${TMDB_ENDPOINT}/trending/tv/week?language=en-US`;
//aqui agregamos las funciones de peticiones

export async function fetchGenresTvSeries(): Promise<GenresFind> {
  const response = await fetch(`${urlFindGenreTvSerie}`, optionsFecthTMDB);
  const data = await response.json();
  return data;
}

export async function fetchGenresMovie(): Promise<GenresFind> {
  const response = await fetch(`${urlFindGenreMovie}`, optionsFecthTMDB);
  const data = await response.json();
  return data;
}
// ---- TODO: IMPLEMENTAR SOLA ESTA FUNCION ----
// export async function fetchData<T>(url: string): Promise<T> {
//   const response = await fetch(url, optionsFecthTMDB);
//   if (!response.ok) {
//     throw new Error(`Error fetching data: ${response.statusText}`);
//   }
//   const data: T = await response.json();
//   return data;
// }
export async function fetchTrendingMovies(): Promise<DiscoverFind> {
  const response = await fetch(`${urlTrendingMovies}`, optionsFecthTMDB);
  const data = await response.json();
  return data;
}
export async function fetchTopRatedMovies(): Promise<DiscoverFind> {
  const response = await fetch(`${urlTrendingMovies}`, optionsFecthTMDB);
  const data = await response.json();
  return data;
}
export async function fetchTrendingTV(): Promise<DiscoverFindTV> {
  const response = await fetch(`${urlTrendingTV}`, optionsFecthTMDB);
  const data = await response.json();
  return data;
}
