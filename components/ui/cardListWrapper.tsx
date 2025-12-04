import React from "react";
import CardGrid from "./cardList";
import PageButtons from "./pageButton";
import { searchParamProps } from "@/lib/types/types";

type CardListWrapperProps = searchParamProps;

export default async function CardListWrapper({
  searchParams,
}: CardListWrapperProps) {
  const params = await searchParams;
  const page = Number(params?.page ?? 1);

  return (
    <>
      <div className="flex flex-wrap">
        <CardGrid page={page} />
      </div>
      <div className="flex justify-center">
        <PageButtons page={page} />
      </div>
    </>
  );
}
