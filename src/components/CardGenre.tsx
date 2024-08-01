"use client";

import { useGenreStore } from "@/store/store";

interface Props {
  id: number;
  name: string;
}

export const CardGenre = ({ id, name }: Props) => {
  const { setCurrentGenre } = useGenreStore();

  const handledGenre = (genre: number) => {
    setCurrentGenre(genre);
  };
  return (
    <>
      <span
        onClick={() => handledGenre(id)}
        className="flex h-10 w-16 items-center justify-center rounded-xl bg-emerald-500 px-2 text-center text-[10px] text-white transition-all hover:scale-105"
      >
        {name}
      </span>
    </>
  );
};
