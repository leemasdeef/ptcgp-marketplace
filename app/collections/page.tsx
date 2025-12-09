import { Card, CardContent } from "@/components/ui/card";
import { series } from "@/lib/pokemonSDK";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const allSets = series?.sets;
  const sets = allSets?.map((set) => ({
    id: set.id,
    name: set.name,
    logo: set.logo ? set.logo + ".webp" : `/${set.id}.png`,
  }));
  console.log(sets);
  return (
    <>
      <h1>All collections</h1>
      <div className="flex gap-2 flex-wrap">
        {sets?.map((set) => (
          <Card className="" key={set.id} data-testid="card" data-id={set.id}>
            <CardContent>
              <Link href={`/collections/${set.id}`}>
                <Image
                  src={set.logo!}
                  alt={set.name}
                  height={150}
                  width={150}
                />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
