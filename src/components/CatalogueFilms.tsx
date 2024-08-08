import { CardItem } from "./CardItem";
import { GridCards } from "./GridCards";
import type { Movie, Serie } from "@/interfaces/interfaces";

interface Props {
  items: (Movie | Serie)[];
  type: "movie" | "tv";
}
export const CatalogueFilms = ({ items, type }: Props) => {
  return (
    <article>
      <GridCards>
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
      </GridCards>
    </article>
  );
};
