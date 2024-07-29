import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

interface Genre {
  id: number;
  name: string;
}

interface ToggleGroupGenresProps {
  genres: Genre[];
}

export const ToogleGroupGenres = ({ genres }: ToggleGroupGenresProps) => {
  return (
    <ToggleGroup className="flex flex-wrap" type="single">
      {genres.map(({ id, name }) => (
        <ToggleGroupItem
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
