import { Genre } from "@/interfaces/interfaces";
import { CardGenre } from "./CardGenre";

type Props = {
  array: Genre[];
  type: "movies" | "tv-series";
};

export const GridGenres = ({ array, type }: Props) => {
  return (
    <>
      <section className="my-4 flex flex-wrap justify-between gap-4">
        {array.map((genre) => (
          <CardGenre
            key={genre.id}
            id={genre.id}
            name={genre.name}
            type={type}
          />
        ))}
      </section>
    </>
  );
};
