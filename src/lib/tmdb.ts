import {
  DiscoverFind,
  DiscoverSearch,
  GenresFind,
  OptionsFetch,
} from "../interfaces/interfaces";
//-----------------------------------------------
// Aqui los endpoints y el API_KEY
export const TMDB_ENDPOINT = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";
export const TMDB_TOKEN = process.env.TMDB_TOKEN;
//-----------------------------------------------

//-----------------------------------------------
//Esto es para mandarle las optiones al fecth
export const optionsFecthTMDB = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
};
//-----------------------------------------------

//-----------------------------------------------
//Funcion Generica para realizar una peticion fetch y traer los datos
async function fetchData<T>({
  url,
  options,
}: {
  url: string;
  options: OptionsFetch;
}): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
  }
  const data: T = await response.json();
  return data;
}
//-----------------------------------------------

//-----------------------------------------------
//Aqui agregamos las url´s donde hacer las peticiones
export const urlFindDiscover = `${TMDB_ENDPOINT}/discover`;
export const urlFindGenreTvSerie = `${TMDB_ENDPOINT}/genre/tv/list?language=en`;
export const urlFindGenreMovie = `${TMDB_ENDPOINT}/genre/movie/list?language=en`;
export const urlTrendingMovies = `${TMDB_ENDPOINT}/trending/movie/week`;
export const urlTopRatedMovies = `${TMDB_ENDPOINT}/movie/top_rated?language=en-US&page=1`;
export const urlTrendingTV = `${TMDB_ENDPOINT}/trending/tv/week?language=en-US`;
export const urlTopRatedTV = `${TMDB_ENDPOINT}/tv/top_rated?language=en-US&page=1`;
export const urlSearchFilms = `${TMDB_ENDPOINT}/search/multi`;
//-----------------------------------------------

//-----------------------------------------------
//aqui agregamos las funciones de peticiones

export async function fetchGenresTvSeries(): Promise<GenresFind> {
  return fetchData<GenresFind>({
    url: urlFindGenreTvSerie,
    options: optionsFecthTMDB,
  });
}

export async function fetchGenresMovie(): Promise<GenresFind> {
  return fetchData<GenresFind>({
    url: urlFindGenreMovie,
    options: optionsFecthTMDB,
  });
}

export async function fetchTrendingMovies(): Promise<DiscoverFind> {
  return fetchData<DiscoverFind>({
    url: urlTrendingMovies,
    options: optionsFecthTMDB,
  });
}

export async function fetchTopRatedMovies(): Promise<DiscoverFind> {
  return fetchData<DiscoverFind>({
    url: urlTopRatedMovies,
    options: optionsFecthTMDB,
  });
}

export async function fetchTrendingTV(): Promise<DiscoverFind> {
  return fetchData<DiscoverFind>({
    url: urlTrendingTV,
    options: optionsFecthTMDB,
  });
}

export async function fetchTopRatedTv(): Promise<DiscoverFind> {
  return fetchData<DiscoverFind>({
    url: urlTopRatedTV,
    options: optionsFecthTMDB,
  });
}

export async function fetchSearchFilms(
  name: string,
  page: number,
): Promise<DiscoverSearch> {
  return fetchData<DiscoverSearch>({
    url: urlSearchFilms + "?query=" + name + "&page=" + page,
    options: optionsFecthTMDB,
  });
}
//-----------------------------------------------
