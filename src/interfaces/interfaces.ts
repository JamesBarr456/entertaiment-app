export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_Average: number;
  vote_count: number;
}
export interface Serie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
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
  results: Movie[]; //Todo: hay que cambiar el nombre de movie por result o algo porque esta estrucutra tambien  es para series como movies
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
