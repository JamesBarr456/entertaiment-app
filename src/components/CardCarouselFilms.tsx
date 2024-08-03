import Image from "next/image";
import { TMDB_IMAGE_ENDPOINT } from "@/lib/tmdb";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { BookmarkEmpty, CategoryMovies } from "./icons";
import { Dot } from "lucide-react";
import { capitalizeFirstLetter, getYearFromReleaseDate } from "@/lib/utils";
interface Props {
  backdrop_path: string;
  title: string;
  release_date: string;
  type: string;
}

export const CardCarouselFilms = ({
  backdrop_path,
  release_date,
  title,
  type,
}: Props) => {
  return (
    <>
      <Card className="relative h-[140px] overflow-hidden rounded-xl border-none md:h-[230px]">
        <CardHeader className="absolute right-2 top-2 z-10 p-0 md:right-4 md:top-4">
          <Button className="rounded-full bg-main-blue-dark/50" size={"icon"}>
            <BookmarkEmpty />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <Image
            src={`${TMDB_IMAGE_ENDPOINT}${backdrop_path}`}
            fill
            alt={title}
          />
        </CardContent>
        <CardFooter className="absolute inset-x-4 bottom-4 p-0 md:inset-x-6 md:bottom-6">
          <div className="text-white">
            <div className="flex items-center text-xs font-light md:text-base">
              <span>{getYearFromReleaseDate(release_date)}</span>
              <Dot />
              <div className="flex items-center gap-2">
                <CategoryMovies />
                <span>{capitalizeFirstLetter(type)}</span>
              </div>
            </div>
            <p className="font-medium md:text-2xl">{title}</p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
