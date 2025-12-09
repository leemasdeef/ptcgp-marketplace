import { tcgdex } from "@/lib/pokemonSDK";
import Image from "next/image";
import Price from "@/components/ui/price";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default async function CardDetails({
  params,
}: {
  params: {
    cardId: string;
  };
}) {
  const { cardId } = await params;
  console.log(cardId);
  const card = await tcgdex.card.get(cardId);
  const image = card?.getImageURL("high", "webp");
  return (
    <section className="flex justify-center items-center">
      <Card className="min-w-10/12 max-w-11/12 p-4">
        <div className="flex flex-col gap-5 items-center">
          <div>
            <Image alt={"Card"} src={image ?? ""} height={300} width={300} />
          </div>
          <div>
            <h1 className="text-7xl">{card?.name}</h1>
            <h2 className="text-center font-bold">
              {card?.set.name} & {card?.set.id}
            </h2>
          </div>
          <div>
            <Price price="20.00"></Price>
          </div>
          <div>{card?.description}</div>
          <div>
            <Button className="border hover:border-violet-400">
              Add to cart
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
