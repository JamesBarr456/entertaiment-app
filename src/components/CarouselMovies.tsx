"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { BookmarkEmpty, CategoryMovies } from "@/components/icons";
import Image from "next/image";
import { Dot } from "lucide-react";
import { Movie, Serie } from "@/interfaces/interfaces";
import { TMDB_IMAGE_ENDPOINT } from "@/lib/tmdb";
interface Props {
  items: (Movie | Serie)[];
}
export const CarouselMovies = ({ items }: Props) => {
  function getYearFromReleaseDate(date: string): number {
    return new Date(date).getFullYear();
  }
  return (
    <div className="-mr-4 md:-mr-0">
      <Carousel
        plugins={[Autoplay()]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              className="basis-60 cursor-pointer md:basis-[470px]"
              key={item.id}
            >
              <Card className="relative h-[140px] overflow-hidden rounded-xl border-none md:h-[230px]">
                <CardHeader className="absolute right-2 top-2 z-10 p-0 md:right-4 md:top-4">
                  <Button
                    size={"icon"}
                    className="rounded-full bg-main-blue-dark/50"
                  >
                    <BookmarkEmpty />
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <Image
                    src={`${TMDB_IMAGE_ENDPOINT}${item.backdrop_path}`}
                    fill
                    alt="imagen de prueba"
                  />
                </CardContent>
                <CardFooter className="absolute inset-x-4 bottom-4 p-0 md:inset-x-6 md:bottom-6">
                  <div className="text-white">
                    <div className="flex items-center text-xs font-light md:text-base">
                      <span>{getYearFromReleaseDate(item.release_date)}</span>
                      <Dot />
                      <div className="flex items-center gap-2">
                        <CategoryMovies />
                        <span>Movie</span>
                      </div>
                    </div>
                    <p className="font-medium md:text-2xl">{item.title}</p>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
