"use client";
import { GenresFind } from "@/interfaces/interfaces";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useGenreStore } from "@/store/store";

export const ToogleGroupGenres = ({ genres }: GenresFind) => {
  const { setCurrentGenre } = useGenreStore();

  const handledGenre = (genre: number) => {
    setCurrentGenre(genre);
  };

  return (
    <ToggleGroup className="flex flex-wrap" type="single">
      {genres.map(({ id, name }) => (
        <ToggleGroupItem
          onClick={() => handledGenre(id)}
          key={id}
          className="text-white"
          variant={"outline"}
          value={name.toLowerCase()}
          aria-label={`Toggle ${name}`}
        >
          {name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
