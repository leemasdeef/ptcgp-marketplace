import CardListWrapper from "@/components/ui/cardListWrapper";
import { searchParamProps } from "@/lib/types/types";
import { Card } from "@/components/ui/card";
type HomeProps = searchParamProps;

export default function Home({ searchParams }: HomeProps) {
  return (
    <div className="flex justify-center items-center">
      <Card className="flex flex-col max-w-11/12 bg-violet-300 ">
        <CardListWrapper searchParams={searchParams} />
      </Card>
    </div>
  );
}
