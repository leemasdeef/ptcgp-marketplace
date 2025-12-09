import { cardList, searchCard } from "@/lib/pokemonSDK";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Card {
  id: string;
  name: string;
  image: string;
}

export default async function CardGrid({
  page,
  query,
  set,
}: {
  page: number;
  query: string | string[];
  set: string;
}) {
  let cards; // declare cards array
  if (query) {
    cards = await searchCard(query.toString(), page, 24);
  } else {
    cards = await cardList(set, page, 24); // 24 cards per page
  }

  //Image object will have id, name, and image link
  const images = cards.map((card) => ({
    id: card.id,
    name: card.name,
    image: card.getImageURL("high", "webp"),
  }));

  // Card click handler

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
            <Link href={`/${pokemon.id}`}>
              <Image
                src={pokemon.image!}
                alt={pokemon.name}
                height={150}
                width={150}
              />
            </Link>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
