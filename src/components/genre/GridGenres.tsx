import { CardGenre } from "./CardGenre";

interface Genre {
  id: number;
  name: string;
}
type Props = {
  array: Genre[];
};

export const GridGenres: React.FC<Props> = ({ array }) => {
  return (
    <>
      {array.map((genre) => (
        <CardGenre key={genre.id} {...genre} />
      ))}
    </>
  );
};
