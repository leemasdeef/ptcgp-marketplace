import CardGrid from "@/components/ui/cardList";
import CardListWrapper from "@/components/ui/cardListWrapper";
import PageButtons from "@/components/ui/pageButton";
import { searchParamProps } from "@/lib/types/types";

type HomeProps = searchParamProps;

export default function Home({ searchParams }: HomeProps) {
  return (
    <div className="flex flex-col w-lg">
      <CardListWrapper searchParams={searchParams} />
    </div>
  );
}
