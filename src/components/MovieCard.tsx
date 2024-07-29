import Image from "next/image";
import { BookmarkEmpty, CategoryMovies } from "./icons";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Dot } from "lucide-react";
import img2 from "@/assets/thumbnails/the-great-lands/regular/small.jpg";

export const MovieCard = () => {
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
          src={img2}
          alt="imagen de galeria"
        />
      </CardContent>
      <CardFooter className="flex-col items-start p-0 pt-2 text-white">
        <div className="flex items-center text-xs font-light md:text-sm">
          <span>2019</span>
          <Dot />
          <div className="flex items-center gap-2">
            <CategoryMovies />
            <span>Movie</span>
          </div>
          <Dot />
          <span>PG</span>
        </div>
        <p className="text-sm font-medium md:text-lg">The Great Lands</p>
      </CardFooter>
    </Card>
  );
};
