import { getCard } from "@/lib/pokemonSDK";
import Image from "next/image";
import { Plus, Trash } from "lucide-react";
import { Button } from "../button";

export default async function CartItem({ card }: { card: string }) {
  const demoCard = await getCard(card);
  const image = demoCard?.getImageURL("high", "webp");

  return (
    <div className="flex gap-8">
      <Image src={image!} alt={demoCard!.id} height={150} width={150} />
      <div className="flex flex-col">
        <p>{demoCard?.name}</p>
        <p>{demoCard?.set.name}</p>
        <p>
          <strong>$20.00</strong>
        </p>
        <div className="border-4 border-purple-400 rounded-xl flex ">
          <Button>
            <Trash />
          </Button>
          <p>Quantity: 1</p>
          <Button>
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}
