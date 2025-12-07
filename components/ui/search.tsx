"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./input";
import { searchCard } from "@/lib/pokemonSDK";

function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(term);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

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
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}
