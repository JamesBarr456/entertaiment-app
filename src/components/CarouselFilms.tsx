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
              urlImg={item.backdrop_path}
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
