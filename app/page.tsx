import { a1set, series } from "@/lib/pokemonSDK";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonCard } from "@/components/ui/skeleton-card";
export default async function Home() {
  console.log(series);
  console.log(series?.logo);
  console.log(a1set?.cards[1].image);

  const images = [
    {
      id: 1,
      name: "bulbasaur",
      image: a1set?.cards[0].getImageURL("high", "webp"),
    },
    {
      id: 2,
      name: "ivysaur",
      image: a1set?.cards[1].getImageURL("high", "webp"),
    },
    {
      id: 3,
      name: "venasaur",
      image: a1set?.cards[2].getImageURL("high", "webp"),
    },
  ];

  return (
    <div className="flex flex-wrap">
      {images.map((pokemon) => (
        <Card key={pokemon.id}>
          <CardContent>
            <Image
              src={pokemon.image ?? ""}
              alt={pokemon.name}
              height={150}
              width={150}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
