"use client";
import Link from "next/link";

interface Props {
  type: string;
  id: number;
  name: string;
}

export const CardGenre = ({ type, id, name }: Props) => {
  return (
    <>
      <Link
        href={`/${type}/genre/${id}`}
        className="flex h-40 w-40 items-center justify-center rounded-xl bg-emerald-500 text-center text-lg text-white transition-all hover:scale-105"
      >
        {name}
      </Link>
    </>
  );
};
