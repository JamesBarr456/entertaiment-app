export interface Movie {
  adult: boolean;
  backdrop_path: string; // URL o ruta de la imagen de fondo
  genre_ids: number[]; // Identificadores de género (probablemente corresponden a un enum o lista de géneros)
  id: number; // Identificador único de la película
  original_language: string; // Idioma original de la película
  original_title: string; // Título original de la película
  overview: string; // Descripción de la trama
  popularity: number; // Popularidad (generalmente en una escala de 0 a 100)
  poster_path: string; // URL o ruta del póster
  release_date: string; // Fecha de estreno en formato 'YYYY-MM-DD'
  title: string; // Título de la película
  video: boolean; // Indica si hay un video relacionado
  vote_Average: number; // Promedio de votos (escala de 0 a 10)
  vote_count: number; // Número de votos recibidos
}
