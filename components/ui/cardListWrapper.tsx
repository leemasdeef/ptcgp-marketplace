import React from "react";
import CardGrid from "./cardList";
import PageButtons from "./pageButton";
import { searchParamProps } from "@/lib/types/types";

type CardListWrapperProps = searchParamProps;

export default async function CardListWrapper({
  searchParams,
}: CardListWrapperProps) {
  const response = await searchParams;
  const page = Number(response?.page ?? 1);
  const query = response?.query || "";

  return (
    <>
      <div className="flex flex-wrap">
        <CardGrid page={page} query={query} />
      </div>
      <div className="flex justify-center">
        <PageButtons page={page} />
      </div>
    </>
  );
}
