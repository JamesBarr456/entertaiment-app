import { CardGenre } from "./CardGenre";

interface Genre {
  id: number;
  name: string;
}

type Props = {
  array: Genre[];
};

export const GridGenres = ({ array }: Props) => {
  return (
    <>
      <section className="my-4 flex flex-wrap justify-between gap-4">
        {array.map((genre) => (
          <CardGenre key={genre.id} {...genre} />
        ))}
      </section>
    </>
  );
};
