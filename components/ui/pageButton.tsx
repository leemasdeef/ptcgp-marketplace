"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
export default function PageButtons({ page }: { page: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (p: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(p));

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex" data-testid="page button container">
      <Button
        onClick={() => goToPage(page - 1)}
        disabled={page <= 1}
        data-testid="page left"
      >
        <ChevronLeft />
      </Button>

      <Button>{page}</Button>
      <Button onClick={() => goToPage(page + 1)} data-testid="page right">
        <ChevronRight />
      </Button>
    </div>
  );
}
