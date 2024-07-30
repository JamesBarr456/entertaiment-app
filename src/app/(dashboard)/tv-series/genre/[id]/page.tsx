"use client";
import { CardItem } from "@/components/CardItem";
import { Paginations } from "@/components";
import { useResults } from "@/hooks/useResults";

interface Props {
  params: { id: string };
}

export default function GenrePage({ params }: Props) {
  const genre = params.id;

  const { results } = useResults("tv", genre);

  return (
    <section>
      <div className="my-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7 2xl:grid-cols-4">
        {results.map((result) => (
          <CardItem key={result.id} {...result} />
        ))}
      </div>
      <div>
        <Paginations />
      </div>
    </section>
  );
}
