"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Movie, Serie } from "@/interfaces/interfaces";

import { CardCarouselFilms } from "./CardCarouselFilms";
interface Props {
  items: (Movie | Serie)[];
  type: "movie" | "tv";
}
export const CarouselFilms = ({ items, type }: Props) => {
  return (
    <Carousel
      plugins={[Autoplay()]}
      className="-mr-4 w-full md:-mr-0"
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
            <CardCarouselFilms
              backdrop_path={item.backdrop_path}
              type={type}
              title={"title" in item ? item.title : item.name}
              release_date={
                "release_date" in item ? item.release_date : item.first_air_date
              }
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

{
  /* <Card className="relative h-[140px] overflow-hidden rounded-xl border-none md:h-[230px]">
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
            </Card> */
}
