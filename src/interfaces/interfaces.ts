// Interfaz base para contenido común de películas y series
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

//Interfaz especifica para Search
export interface SearchFilms extends BaseContent {
  media_type: string;
  original_title?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  origin_country?: string[];
  original_name?: string;
  first_air_date?: string;
  name?: string;
}

// Interfaz para opciones de fetch
export interface OptionsFetch {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

// Interfaz para los resultados de descubrimiento (películas y series)
export interface Discover {
  page: number;
  total_pages: number;
  total_results: number;
}

export interface DiscoverFind extends Discover {
  results: (Movie | Serie)[];
}

export interface DiscoverSearch extends Discover {
  results: SearchFilms[];
}

// Interfaz para géneros
export interface Genre {
  id: number;
  name: string;
}

// Interfaz para la búsqueda de géneros
export interface GenresFind {
  genres: Genre[];
}
