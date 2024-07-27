import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { BookmarkEmpty, CategoryMovies } from "./icons";
import Image from "next/image";
import { Dot } from "lucide-react";
import { Movie } from "@/interfaces/interfaces";
import { TMDB_IMAGE_ENDPOINT } from "@/lib/tmdb";

function getYearFromReleaseDate(date: string): number {
  return new Date(date).getFullYear();
}
export const CardItem = (movie: Movie) => {
  return (
    <>
      <Card className="relative h-[140px] overflow-hidden rounded-none border-none bg-transparent md:h-[230px]">
        <CardHeader className="absolute right-2 top-2 z-10 p-0 md:right-4 md:top-4">
          <Button className="flex h-8 w-8 rounded-full bg-main-blue-dark/70">
            <div>
              <BookmarkEmpty />
            </div>
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <Image
            src={`${TMDB_IMAGE_ENDPOINT}${movie.backdrop_path}`}
            alt={movie.title}
            className="h-full w-full rounded-lg object-cover"
            width={250}
            height={250}
          />
        </CardContent>
        <CardFooter className="absolute inset-x-4 bottom-4 p-0 md:inset-x-6 md:bottom-6">
          <div className="text-white">
            <div className="flex items-center text-xs font-light md:text-base">
              <span>{getYearFromReleaseDate(movie.release_date)}</span>
              <Dot />
              <div className="flex items-center gap-2">
                <CategoryMovies />
                <span>Movie</span>
              </div>
            </div>
            <p className="font-medium md:text-2xl">{movie.title}</p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
