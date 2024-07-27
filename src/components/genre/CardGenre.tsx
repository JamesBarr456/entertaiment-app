import Link from "next/link";

interface Props {
  id: number;
  name: string;
}

export const CardGenre = ({ id, name }: Props) => {
  return (
    <>
      <Link
        href={`/movies/genre/${id}`}
        className="flex h-40 w-40 items-center justify-center rounded-xl bg-emerald-500 text-center text-lg text-white transition-all hover:scale-105"
      >
        {name}
      </Link>
    </>
  );
};
