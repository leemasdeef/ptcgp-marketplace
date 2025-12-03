import { Input } from "./input";
import { searchCard } from "@/lib/pokemonSDK";
export default function Search() {
  const handleSearch = (term: string) => {
    console.log(term);
  };

  return (
    <>
      <Input
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
}
