import Image from "next/image";
import { BookmarkEmpty, CategoryMovies } from "./icons";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Dot } from "lucide-react";
import { Movie } from "@/interfaces/interfaces";
import { TMDB_IMAGE_ENDPOINT } from "@/lib/tmdb";

const getYearFromReleaseDate = (date: string): number =>
  new Date(date).getFullYear();

export const MovieCard = (movie: Movie) => {
  return (
    <Card className="relative overflow-hidden border-0 bg-inherit">
      <CardHeader className="absolute z-10 flex w-full flex-row items-center space-y-0 p-2">
        <Button
          className="ms-auto rounded-full bg-main-blue-dark/50"
          size={"icon"}
        >
          <BookmarkEmpty />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <Image
          className="w-full rounded-xl"
          src={`${TMDB_IMAGE_ENDPOINT}${movie.backdrop_path}`}
          alt={movie.title}
        />
      </CardContent>
      <CardFooter className="flex-col items-start p-0 pt-2 text-white">
        <div className="flex items-center text-xs font-light md:text-sm">
          <span>{getYearFromReleaseDate(movie.release_date)}</span>
          <Dot />
          <div className="flex items-center gap-2">
            <CategoryMovies />
            <span>Movie</span>
          </div>
          <Dot />
          <span>PG</span>
        </div>
        <p className="text-sm font-medium md:text-lg">{movie.title}</p>
      </CardFooter>
    </Card>
  );
};
