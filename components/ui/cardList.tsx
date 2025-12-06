import { cardList, searchCard } from "@/lib/pokemonSDK";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Card {
  id: string;
  name: string;
  image: string;
}

export default async function CardGrid({ page }: { page: number }) {
  const cards = await cardList("A1", page, 20); // 20 cards per page

  //Image object will have id, name, and image link
  const images = cards.map((card) => ({
    id: card.localId,
    name: card.name,
    image: card.getImageURL("high", "webp"),
  }));

  return (
    <>
      {images.map((pokemon) => (
        <Card key={pokemon.id} data-testid="card">
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
