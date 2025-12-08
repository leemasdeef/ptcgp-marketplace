import { cardList, searchCard } from "@/lib/pokemonSDK";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Card {
  id: string;
  name: string;
  image: string;
}

export default async function CardGrid({
  page,
  query,
}: {
  page: number;
  query: string | string[];
}) {
  let cards; // declare cards array
  if (query) {
    cards = await searchCard(query.toString(), page, 24);
  } else {
    cards = await cardList("A1", page, 24); // 20 cards per page
  }

  console.log("THE CARDS ARE: ", cards);
  //Image object will have id, name, and image link
  const images = cards.map((card) => ({
    id: card.id,
    name: card.name,
    image: card.getImageURL("high", "webp"),
  }));

  return (
    <>
      {images.map((pokemon) => (
        <Card
          className=""
          key={pokemon.id}
          data-testid="card"
          data-id={pokemon.id}
        >
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
