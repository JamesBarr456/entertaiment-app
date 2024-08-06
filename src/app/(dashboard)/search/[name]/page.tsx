// "use client";

import { CollectionSearch } from "@/components";

interface Props {
  params: { name: string };
}
export default function SearchPage({ params }: Props) {
  const { name } = params;

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-xl font-light text-white md:text-[32px]">
        Found {} results for &#39;{name}&#39;
      </h1>
      <CollectionSearch name={name} />
    </section>
  );
}
