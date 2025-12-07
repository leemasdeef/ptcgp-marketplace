"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./input";
import { searchCard } from "@/lib/pokemonSDK";

function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(term);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <Input
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </>
  );
}

import { Suspense } from "react";

export default function SearchBar() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}
