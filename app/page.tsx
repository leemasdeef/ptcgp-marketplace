import CardGrid from "@/components/ui/cardList";
import PageButtons from "@/components/ui/pageButton";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        <CardGrid />
      </div>
      <div className="flex justify-center">
        <PageButtons />
      </div>
    </div>
  );
}

interface Card {
  id: string;
  name: string;
  image: string;
}
