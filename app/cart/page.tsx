import CartItem from "@/components/ui/cart/cartItem";
import { getCard } from "@/lib/pokemonSDK";
import Image from "next/image";

export default function Cart() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-4xl">Shopping cart</h1>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <CartItem card="A1-001" />
        <hr />
        <CartItem card="A1-003" />
      </div>
    </div>
  );
}
