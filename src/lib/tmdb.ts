import {
  DiscoverFind,
  DiscoverSearch,
  GenresFind,
} from "../interfaces/interfaces";
//-----------------------------------------------
// Aqui los endpoints y el API_KEY
export const TMDB_ENDPOINT = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";
export const TMDB_TOKEN = process.env.TMDB_TOKEN;
//-----------------------------------------------

//-----------------------------------------------
//Funcion Generica para realizar una peticion fetch y traer los datos
/* async function fetchData<T>({
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
} */

export const fetchData = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  });
  const data = await response.json();

  return data;
};

//-----------------------------------------------
type MediaType = "tv" | "movie";

export const urlGenresList = (type: MediaType) =>
  `${TMDB_ENDPOINT}/genre/${type}/list`; //trae los 2 de arriba
//trae los generos disponibles para tv o movie. solo acepta lenguaje como QueryParams

export const urlTrendingList = (type: MediaType) =>
  `${TMDB_ENDPOINT}/trending/${type}/week`;
//solo acepta languaje como queryparams

type CategoryProps = "now_playing" | "popular" | "top_rated" | "upcoming";

export const urlCategoryList = (
  type: MediaType,
  category: CategoryProps,
  page: number = 1,
) => `${TMDB_ENDPOINT}/${type}/${category}?language=en-US&page=${page}`;
//trae data ordenado por clasificacion. acepta languaje, page y region como queryparams

export const urlSearchFilm = (
  type: MediaType,
  inputText: string,
  page: number = 1,
) =>
  `${TMDB_ENDPOINT}/search/${type}?query=${inputText}&include_adult=false&language=en-US&page=${page}`;
//busca la pelicula o tv desde el input

//-----------------------------------------------

//-----------------------------------------------
//aqui agregamos las funciones de peticiones

/* export async function fetchGenresTvSeries(): Promise<GenresFind> {
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
} */
//-----------------------------------------------
