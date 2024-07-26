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

import img1 from "@/assets/thumbnails/beyond-earth/trending/small.jpg";

export const CarouselMovies = () => {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className="basis-60 md:basis-[470px]" key={index}>
              <Card className="relative h-[140px] overflow-hidden rounded-xl border-none md:h-[230px]">
                <CardHeader className="absolute right-2 top-2 z-10 p-0 md:right-4 md:top-4">
                  <Button
                    size={"icon"}
                    className="rounded-full bg-main-blue-dark/70"
                  >
                    <BookmarkEmpty />
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <Image src={img1} fill alt="imagen de prueba" />
                </CardContent>
                <CardFooter className="absolute inset-x-4 bottom-4 p-0 md:inset-x-6 md:bottom-6">
                  <div className="text-white">
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
                    <p className="font-medium md:text-2xl">Beyond Earth</p>
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
