export interface BaseContent {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

// Interfaz específica para películas
export interface Movie extends BaseContent {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

// Interfaz específica para series
export interface Serie extends BaseContent {
  origin_country: string[];
  original_name: string;
  first_air_date: string;
  name: string;
}

export interface OptionsFecth {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}
export interface DiscoverFind {
  page: number;
  results: (Movie | Serie)[]; //Todo: hay que cambiar el nombre de movie por result o algo porque esta estrucutra tambien  es para series como movies
  total_pages: number;
  total_results: number;
}

export interface DiscoverFindTV {
  page: number;
  results: Serie[]; //Todo: hay que cambiar el nombre de movie por result o algo porque esta estrucutra tambien  es para series como movies
  total_pages: number;
  total_results: number;
}
export interface Genre {
  id: number;
  name: string;
}

export interface GenresFind {
  genres: Genre[];
}
