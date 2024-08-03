import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import img2 from "@/assets/thumbnails/the-great-lands/regular/small.jpg";
import { Button } from "./ui/button";
import { BookmarkEmpty, CategoryMovies } from "./icons";
import { Dot } from "lucide-react";
import { CardItem } from "./CardItem";
import { Movie, Serie } from "@/interfaces/interfaces";

interface Props {
  items: (Movie | Serie)[];
  type: "movie" | "tv";
}
export const CatalogueFilms = ({ items, type }: Props) => {
  return (
    <article>
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7 2xl:grid-cols-4">
        {items.map((item) => (
          <CardItem
            key={item.id}
            backdrop_path={item.backdrop_path}
            type={type}
            title={"title" in item ? item.title : item.name}
            release_date={
              "release_date" in item ? item.release_date : item.first_air_date
            }
          />
        ))}
      </section>
    </article>
  );
};
