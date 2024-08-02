import Image from "next/image";
import { TMDB_IMAGE_ENDPOINT } from "@/lib/tmdb";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { BookmarkEmpty, CategoryMovies } from "./icons";
import { Dot } from "lucide-react";
interface Props {
  backdrop_path: string;
  title: string;
  release_date: string;
  type: string;
}
function getYearFromReleaseDate(date: string): number {
  return new Date(date).getFullYear();
}
export const CardItem = ({
  backdrop_path,
  release_date,
  title,
  type,
}: Props) => {
  const capitalizeFirstLetter = (str: string): string => {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      <Card className="relative overflow-hidden border-0 bg-inherit">
        <CardHeader className="absolute z-10 flex w-full flex-row items-center space-y-0 p-2">
          <Button
            className="ms-auto rounded-full bg-main-blue-dark/70"
            size={"icon"}
          >
            <BookmarkEmpty />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <Image
            src={`${TMDB_IMAGE_ENDPOINT}${backdrop_path}`}
            alt={title}
            className="h-full w-full rounded-lg object-cover"
            width={150}
            height={150}
            priority
          />
        </CardContent>
        <CardFooter className="flex-col items-start p-0 pt-2 text-white">
          <div className="flex items-center text-xs font-light md:text-base">
            <span>{getYearFromReleaseDate(release_date)}</span>
            <Dot />
            <div className="flex items-center gap-2">
              <CategoryMovies />
              <span>{capitalizeFirstLetter(type)}</span>
            </div>
          </div>
          <p>{title}</p>
        </CardFooter>
      </Card>
    </>
  );
};
