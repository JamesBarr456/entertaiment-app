import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import img2 from "@/assets/thumbnails/the-great-lands/regular/small.jpg";

interface Props {
  title: string;
}

export const CatalogueMovies = ({ title }: Props) => {
  return (
    <article>
      <h2 className="text-xl font-light tracking-wide text-white">{title}</h2>
      <section className="grid grid-cols-[auto_auto] gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <Card key={index}>
            <CardContent className="p-0">
              <Image
                src={img2}
                width={164}
                height={110}
                alt="imagen de galeria"
              />
            </CardContent>
          </Card>
        ))}
      </section>
    </article>
  );
};
