import { tcgdex } from "@/lib/pokemonSDK";
import Image from "next/image";
import Price from "@/components/ui/price";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default async function CardDetails() {
  const card = await tcgdex.card.get("A1-020");
  const image = card?.getImageURL("high", "webp");
  return (
    <section className="flex justify-center items-center">
      <Card className="min-w-9/12 p-20">
        <div className="flex flex-col items-center">
          <h1>{card?.name}</h1>
          <h2>
            {card?.set.name} & {card?.set.id}
          </h2>
          <div>
            <Image alt={"Card"} src={image ?? ""} height={300} width={300} />
          </div>
          <div>
            <Price price="20.00"></Price>
          </div>
          <div>{card?.description}</div>
          <div>
            <Button>Add to cart</Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
