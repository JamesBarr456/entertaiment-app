import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import img2 from "@/assets/thumbnails/the-great-lands/regular/small.jpg";
import { Button } from "./ui/button";
import { BookmarkEmpty, CategoryMovies } from "./icons";
import { Dot } from "lucide-react";

export const CatalogueMovies = () => {
  return (
    <article>
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7 2xl:grid-cols-4">
        {Array.from({ length: 26 }).map((_, index) => (
          <Card
            key={index}
            className="relative overflow-hidden border-0 bg-inherit"
          >
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
                className="w-full rounded-xl"
                src={img2}
                alt="imagen de galeria"
              />
            </CardContent>
            <CardFooter className="flex-col items-start p-0 pt-2 text-white">
              <div className="flex items-center text-xs font-light md:text-base">
                <span>2019</span>
                <Dot />
                <div className="flex items-center gap-2">
                  <CategoryMovies />
                  <span>Movie</span>
                </div>
                <Dot />
                <span>PG</span>
              </div>
              <p>The Great Lands</p>
            </CardFooter>
          </Card>
        ))}
      </section>
    </article>
  );
};
