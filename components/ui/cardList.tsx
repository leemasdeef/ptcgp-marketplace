import { cardList, searchCard } from "@/lib/pokemonSDK";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default async function CardGrid() {
  const cards = await cardList("A1", 1, 20);
  const images = cards.map((card) => ({
    id: card.localId,
    name: card.name,
    image: card.getImageURL("high", "webp"),
  }));

  return (
    <>
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
    </>
  );
}
